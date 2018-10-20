/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Head from '../components/Head';
import { ParallaxProvider} from 'react-scroll-parallax';
import CircleImage from '../components/CircleImage';
import { Grid } from '@material-ui/core';
import ImageGallery from '../components/ImageGallery';

const styles = theme => ({
  root: {
    width: '100%',
  },
  next: {
    background: '#e0f2f1',
  },
  imgBloc: {
    textAlign: 'center'
  },
  imgContainer: {
    paddingTop: '100px',
    paddingBottom: '50px'
  },
  name: {
    fontSize: '25px',
    marginBottom: '20px'
  },
  lastName: {
    color: '#e57373'
  },
  gallery: {
    background: '#546e7a'
  }
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Head />
        <div className={classes.next} style={{ height: '100%'}}>
          <Grid className={classes.imgContainer} container alignItems="center">
            <Grid className={classes.imgBloc} item xs={12} md={6} justify="center" > 
              <div className={classes.name}>
                Joël <span className={classes.lastName}>Guibert</span>
              </div>
              <CircleImage src="/static/joel.jpg" />
            </Grid>
            <Grid className={classes.imgBloc} item xs={12} md={6} justify="center">
              <div className={classes.name}>
                Christine <span className={classes.lastName}>Nguyen</span>
              </div>
              <CircleImage src="/static/christine.jpg" />
            </Grid> 
          </Grid>
          <Grid className={classes.gallery} container alignItems="center">
            <h2>Gallerie de photos</h2>
            <ImageGallery />  
          </Grid>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
