import {
  Route,
} from 'react-router-dom';
import { withStyles, withWidth } from '@material-ui/core';
import classNames from 'classnames';
import * as React from 'react';
import DashBoard from '../dashboard/dashBoard';
import MovieDetails from '../movieDetails/movieDetails';
import styles from './home.style';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    const { classes } = this.props;
    const mainClassCss = classNames(
      classes.content,
      this.state.open ? classes.contentOpen : classes.contentClose,
    );
    return (
      <div style={{
        display: 'flex',
        flexGrow: 1,
        // height: '97vh',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <main className={mainClassCss}>
          <div className={classes.toolbar} />
          <div style={{ marginTop: '60px' }}>
            {/* <Switch> */}
              <Route exact path="/" component={DashBoard} key="AppHome" />
              <Route exact path={`/movieDetails/:id`} component={MovieDetails} key="AppHome" />
            {/* </Switch> */}
          </div>
        </main>
      </div >
    );
  }

}
export default ((withWidth()(withStyles(styles)(HomePage))));
// export default withRouter((withWidth()(withStyles(styles)(HomePage))));
