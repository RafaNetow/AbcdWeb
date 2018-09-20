import React from 'react'
import AppBar from './AppBar/AppBar.jsx'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		margin: 0
	}
}
class ProfileTeachersComponent extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<AppBar />
				ProfileTeachers
			</div>
		)
	}
}
export default withStyles(styles)(ProfileTeachersComponent)
