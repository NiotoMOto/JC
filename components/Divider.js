import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: 'block',
    borderBottom: '1.5px red solid',
    width: '100%'
  }
}

const Divider = ({ classes }) => (
  <div className={classes.root} />
)

export default withStyles(styles)(Divider);