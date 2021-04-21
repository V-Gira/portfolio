import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ParticlesBg from 'particles-bg';

const useStyles = makeStyles({
  root: {},
  media: {
    zIndex: 999,
    padding: 5,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          component='img'
          image={props.img}
          title={props.imgTitle}
        />
      </div>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
