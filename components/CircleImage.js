
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
  },
  image: {
    borderRadius: '50%',
    border: '10px solid #FFF',
  }
});

class CirleImage extends React.Component {

  render() {
    const { classes, src } = this.props;

    return (
      <div className={classes.root}>
        <img className={classes.image} src={src} width="300px" />
      </div>
    );
  }
}

CirleImage.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
};

export default withStyles(styles)(CirleImage);
