import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { green } from '@material-ui/core/colors';


const UserBox = ({item}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Avtar" src={item.avatar} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.name} gutterBottom variant="subtitle1">
                {item.first_name + " " + item.last_name}
                </Typography>
                <Typography className={classes.email} variant="body2" gutterBottom>
                  {item.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserBox


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: 10,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    name: {
        fontSize: 18,
        fontWeight: 600,
    },
    email: {
        fontSize: 16,
        color: "green",
        textOverflow: "ellipsis",
        overflow: "hidden",
    }
  }));