
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Parallax, Background } from 'react-parallax';
import Timer from './Timer';




const styles = theme => ({
  root: {
    width: '100%',
    fontFamily: `'Oswald', sans-serif`,

  },
  labelBLoc: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  christineLabel: {
    display: 'inline-block',
  },
  joelLabel: {
    display: 'inline-block',
  },
  circle: {
    background: '#e57373',
    width: '100px',
    color: '#FFF',
    height: '100px',
    textAlign: 'center',
    fontSize: '63px',
    fontWeight: 'normal',
    lineHeight: '1.5em',
    borderRadius: '100px',
    margin: '0px',
    top: '-15px',
    display: 'inline-block',
    position: 'relative',
    marginRight: '10px',
    marginLeft: '10px',
  },
  names: {
    listStyle: 'none',
    display: 'inline',
    fontSize: '100px',
    padding: '0px',
    color: '#FFF',
    fontWeight: 300,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: '40px',
  },
  dates: {
    textAlign: 'center',
    fontSize: '30px',
    color: '#FFF',
  },
  place: {
    marginTop: '50px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '20px',
    color: '#FFF',
    '&:hover': {
      color: '#cfd8dc',
    }
  },
  day: {
    fontSize: '50px',
    display: 'inline-block',
    borderBottom: '2px solid #e57373'
  }
});

class Head extends React.Component {
  
  constructor(props) {
    super(props);
    this.address = {
      street: '28 rue de groix',
      cp: 29360,
      city: 'Chloars Carnoët',
    }
  }
  goToMap() {
    const urlEncoded = encodeURI(`${this.address.street} ${this.address.cp} ${this.address.city}`)
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${urlEncoded}`,
      '_blank'
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className="hero-container">
          <Parallax
            blur={4}
            bgImage={'/static/mer.jpg'}
            bgImageAlt="the cat"
            strength={100}
           >
            <div className={classes.labelBLoc}>
              <div>
                <div className={classes.title}>
                <span />
                  Nous nous marrions !
                <span/>
                </div>
                <ul className={classes.names}>
                  <li className={classes.christineLabel}>Christine</li>
                  <li className={classes.circle}> & </li>
                  <li className={classes.joelLabel}>Joël</li>
                </ul>
                <div className={classes.dates}>
                  <div>
                  24   <span className={classes.day}>Aout</span>   2019
                  </div>
                  <div>
                    15h00
                  </div>
                  <div>
                    <Timer />
                  </div>
                </div>
                <div className={classes.place} onClick={() => this.goToMap()}>
                  <div>{this.address.street}</div>
                  <div>{this.address.cp} {this.address.city}</div>
                </div>
              </div>
            </div>
            <div style={{ height: '400px' }} />
          </Parallax>
        </div>
      </div>
    );
  }
}

Head.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Head);
