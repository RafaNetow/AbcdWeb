import React from 'react'
import AppBar from './AppBar/AppBar.jsx'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		margin: 0
	}
}
class AdminComponents extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar />
				Admin
			</div>
		)
	}
}
export default withStyles(styles)(AdminComponents)
