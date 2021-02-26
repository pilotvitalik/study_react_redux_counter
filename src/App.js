import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUpdate } from './store/reducers/countSlice';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    	},
    flexGrow: 1,
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = useState(1);
  const classes = useStyles();
  const newNumber = state => state.count.number;
  const val = useSelector(newNumber);
  const dispatch = useDispatch();

  function defType(event){
    let typeAction = event.currentTarget.dataset.type;
    if (typeAction === 'asyncIncrement') {
      dispatch(asyncUpdate());
      return false;
    }
    dispatch({type: 'count/' + typeAction, payload: ''});
  }

  return (
    <Grid container className={classes.root} spacing={spacing}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        	<Grid>
        		<Box component="span" mt={2} mb={2} display='inline-block'>
        			{val}
        		</Box>
        	</Grid>
        </Grid>
        <Grid container justify="center" spacing={spacing}>
        	{[{name: '+', func: 'increment'}, {name: '-', func: 'decrease'}, {name: 'Increment if odd', func: 'incrementOdd'}, {name: 'Async increment', func: 'asyncIncrement'}].map((value) => (
            <Grid key={value.name} item>
            	<Button variant="contained" data-type={value.func} onClick={defType}>{value.name}</Button>
				    </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}