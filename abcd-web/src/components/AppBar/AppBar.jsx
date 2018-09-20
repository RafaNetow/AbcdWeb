import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
const styles = {
	root: {
		flexGrow: 1,
	},
	appbar:{
		padding:'0.8em'
	}, 
	grow:{
		paddingTop:'8px'
	}
};

class MenuAppBar extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.appbar}>
					<Grid container>
						<Grid item xs={2}>
							<Typography variant="display1" color="inherit" className={classes.grow}>
								ABCD
							</Typography>
						</Grid>
						<Grid item xs={6}>

						</Grid>
						<Grid item xs={4}>
							<Toolbar style={{paddingRight:0}}>
								<Button color='inherit'>Home</Button>
								<Button color="inherit">Events</Button>
								<Button color="inherit">Teachers</Button>
								<Button color="inherit">About Us</Button>
							</Toolbar>
						</Grid>
					</Grid>
				</AppBar>
			</div>
		);
	}
}

MenuAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);