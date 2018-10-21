import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    height: '100%',
  },
  formBlock: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Confirm extends React.Component {
  static async getInitialProps({ query: { name, firstName } }) {
    return { name, firstName };
  }

  render() {
    const { name, classes, firstName } = this.props;
    return (
      <Grid container justify="center" alignContent="center" alignItems="center" className={classes.root}>
        <Grid item xs={12} className={classes.formBlock}>
          <TextField
            id="standard-uncontrolled"
            label="Nom"
            defaultValue="foo"
            value={name}
            margin="normal"
          />
          </Grid>
          <Grid item xs={12} className={classes.formBlock}>
           <TextField
            id="standard-uncontrolled"
            label="Prénom"
            defaultValue="foo"
            value={firstName}
            margin="normal"
          />
          <Grid item xs={12} className={classes.formBlock}>
            <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
              Je confirme
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Confirm);
