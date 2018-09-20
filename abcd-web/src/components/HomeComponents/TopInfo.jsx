import React from 'react'
import AppBar from './AppBar/AppBar.jsx'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
const styles = {
	root: {
		margin: 0
	}
}
class TopInfo extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				
			</div>
		)
	}
}
export default withStyles(styles)(TopInfo)
