import React, { Component, useState, useRef } from 'react';
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
  props.store.subscribe(render);
  let initNum = props.store.getState().count.number
  const [spacing, setSpacing] = useState(1);
  const classes = useStyles();
  const showCount = useRef(null);

  function defType(e){
    const typeAction = e.currentTarget.dataset.type;
    props.store.dispatch({type: `count/${typeAction}`});
  }

  function render(e){
    const state = props.store.getState();
    if (showCount.current !== null) showCount.current.innerText = state.count.number
  }

  render();

  return (
    <Grid container className={classes.root} spacing={spacing}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        	<Grid>
        		<Box component="span" mt={2} mb={2} display='inline-block' ref={showCount}>
        			{initNum}
        		</Box>
        	</Grid>
        </Grid>
        <Grid container justify="center" spacing={spacing}>
        	{[{name: '+', func: 'increment'}, {name: '-', func: 'decrease'}, {name: 'Increment if odd', func: 'incrementOdd'}, {name: 'Async increment', func: 'asyncIncrement'}].map((value) => (
                <Grid key={value.name} item>
                	<Button variant="contained" data-type={value.func} onClick={ defType }>{value.name}</Button>
				</Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}