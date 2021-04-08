import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='/wood-wide-web.jpg'
          title='Wood Wide Web'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Roots
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            In vascular plants, the roots are the organs of a plant that are
            modified to provide anchorage for the plant and take in water and
            nutrients into the plant body, which allows plants to grow taller
            and faster.[1] They most often lie below the surface of the soil,
            but roots can also be aerial or aerating, that is, growing up above
            the ground or especially above water.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
