import React, { Component, Fragment } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    padding: 0
  },
})


export class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Material with redux</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container maxWidth="lg" className={classes.container}>
          <Box my={2}>
            <MaterialTable>

            </MaterialTable>
          </Box>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App);
