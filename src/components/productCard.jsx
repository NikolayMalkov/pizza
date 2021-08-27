import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import { addToCart } from '../store/shopcart_reducer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
  root: {
    background: 'black',
    color: 'white',
    border: '1px solid greenyellow',
    textAlign: 'center',
    width: 300,
    borderRadius: 20,
    margin: 30,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 90,
    paddingTop: '56.25%'
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
      margin: '0 auto',
      color: 'white',
      borderColor: 'yellow',
      width: 150,
  },
  smallBtn: {
    margin: 5,
    color: 'white',
    borderColor: 'yellow',
    width: 60,
  },
  btnWrap: {
      bottom: '0px',
      fontFamily: 'Play',
      margin: '0 auto'
  },
  typography: {
    fontFamily: 'Play'
  }
});

export default function ProductCard({id, name, img, descr, price, rating}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [size, setSize] = useState(30);

  console.log(id, name, price)
  
  function addToShopcart(id, name, price) {
    dispatch(addToCart(id, name, price))
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h3" className={classes.typography}>
          {name}
        </Typography>
        
        <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
      />

        {/* <Typography variant="body2" component="p" className={classes.typography}>
          {descr}
        </Typography> */}


      </CardContent>
      <CardActions>

       <div className={classes.btnWrap}>
            <div>

                <Button onClick={ () => addToShopcart(id, name, price) } size="medium" variant="outlined" className={classes.btn} >{price} р.</Button>

            </div>


            <div>

                <Button onClick={ () => setSize(30) } size="small" variant="outlined" className={classes.smallBtn}>30 см</Button>
                <Button onClick={ () => setSize(40) } size="small" variant="outlined" className={classes.smallBtn}>40 см</Button>

            </div>
            
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        
       </div>
      
      </CardActions>
    </Card>
  );
}