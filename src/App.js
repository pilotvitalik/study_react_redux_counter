import React, { Component } from 'react';
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
  const [spacing, setSpacing] = React.useState(1);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={spacing}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        	<Grid>
        		<Box component="span" mt={2} mb={2} display='inline-block'>
        			1
        		</Box>
        	</Grid>
        </Grid>
        <Grid container justify="center" spacing={spacing}>
        	{['+', '-', 'Increment if odd', 'Async increment'].map((value) => (
                <Grid key={value} item>
                	<Button variant="contained">{value}</Button>
				</Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}