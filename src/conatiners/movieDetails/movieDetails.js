/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Grid, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { fetchMovieDetail, unMountMovieList } from './movieDetails.action';
import CardContent from '@material-ui/core/CardContent';
import styles from './movieDetails.style';
class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reDirect: false
        }
        this.handleExpandClick = this.handleExpandClick.bind(this);
    };
    componentDidMount() {
        const { apiKey, match } = this.props;
        const { params } = match;
        if (params.id) {
            this.props.fetchMovieDetail(apiKey, params.id);
        }
    }
    componentWillUnmount() {
        this.props.unMountMovieList();
    }
    handleExpandClick() {
        this.setState({ expanded: true });
    }


    render() {
        const { searchedMovie, classes } = this.props;
        const { reDirect } = this.state;
        if (reDirect) {
            return (<Redirect to={'/'} />);
        }
        return (
            <Grid container justify={'center'} >
                <Grid item xs={11} sm={9} md={6} >
                    {Object.keys(searchedMovie).length > 0 ?
                        <Card >
                            <CardHeader

                                title={searchedMovie.Title}
                                subheader={searchedMovie.Year}
                            />
                            <CardMedia
                                className={classes.media}
                                image={searchedMovie.Poster}
                                title={searchedMovie.Title}
                            />
                            <CardContent>
                                <Grid container >
                                    <Grid item xs={12}>
                                        <b> Actors :</b><Typography paragraph>{searchedMovie.Actors}</Typography>
                                        <b>Director :</b><Typography paragraph>{searchedMovie.Director}</Typography>
                                        <b>Production :</b><Typography paragraph>{searchedMovie.Production}</Typography>
                                        <b>Genre :</b><Typography paragraph>{searchedMovie.Genre}</Typography>
                                        <b>imdbRating:</b><Typography paragraph>{searchedMovie.imdbRating}</Typography>

                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {searchedMovie.Plot}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card> : <Typography paragraph>
                            Record not Found
                            </Typography>}
                    <br />
                    <Button variant="contained" color="secondary" onClick={() => { this.setState({ reDirect: true }) }}>
                        Back
      </Button>
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = ({
    DashBoardReducer
}) => ({
    apiKey: DashBoardReducer.apiKey,
    searchedMovie: DashBoardReducer.searchedMovie
});
export default connect(mapStateToProps, { fetchMovieDetail, unMountMovieList })(withStyles(styles)(MovieDetails));