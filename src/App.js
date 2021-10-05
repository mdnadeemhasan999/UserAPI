import React, {useState, useEffect} from 'react'
import UserBox from './component/UserBox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const [userData, setUserData] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [page])

  useEffect(() => {
    if(items){
      setUserData(items.data);
      console.log(items.data)
    }
  }, [items])



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app">
        <div className="app-content">
          <Typography className="heading" variant="h4" component="h2">
            This is a page {page}
          </Typography>
          <div>
            {userData.length === 0 ?
              <div className="page-not-found">"Page not found"</div> :
              userData.map(item => (
                <UserBox item={item} />
              ))
            }
          </div>

          <div className="button">
            <Button color="primary" onClick={() => page > 1? setpage(page-1) : null}>Back</Button>
              <Typography className="page-no" component="span">
                Page No {page}
              </Typography>
            <Button color="primary" onClick={() => userData.length !== 0? setpage(page+1) : null}>Next</Button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

