import React, { Component, Fragment } from 'react';
import { addRow, deleteRow, loadData, updateRow } from './actions';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    padding: 0
  },
});


export class App extends Component {
  componentDidMount() {
    this.props.loadData(this.props.page);
  }

  render() {
    const { classes } = this.props;
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
            <MaterialTable
              title="Table"
              columns={this.props.columns}
              data={this.props.rows}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    resolve(this.props.addRow(newData));
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    resolve(
                      this.props.deleteRow(oldData.id)
                    );
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    resolve(this.props.updateRow(newData));
                  })
              }}
            >
            </MaterialTable>
            <Button
              color="primary"
              variant="contained"
              onClick={event => this.props.loadData(this.props.page)}
            >
              Load more data
            </Button>
          </Box>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  columns: state.table.columns,
  rows: state.table.rows,
  page: state.table.page,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: (page) => dispatch(loadData(page)),
  addRow: (data) => dispatch(addRow(data)),
  deleteRow: (id) => dispatch(deleteRow(id)),
  updateRow: (data) => dispatch(updateRow(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
