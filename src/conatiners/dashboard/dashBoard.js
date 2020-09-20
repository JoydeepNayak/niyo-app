/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchMovieList, fetchMovieListNextCycle, addToFavourites } from './dashboard.action';
import { Button, Grid, withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FavouriteIcon from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './dashboard.style';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedMovieName: '',
            page: 1,
            redirect: false,
            filterType: 'all',
        }
        this.searchForMovie = this.searchForMovie.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    };
    handleScroll() {
        const { movieList, apiKey } = this.props;
        const { searchedMovieName, page } = this.state;
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight - 1 && movieList.totalResults > page * 10) {
            this.props.fetchMovieListNextCycle(apiKey, searchedMovieName, page + 1, this.state.filterType);
            this.setState({ page: page + 1 })
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    changeInput(event) {
        this.setState({ searchedMovieName: event.target.value.trim() });
    }

    searchForMovie() {
        const { apiKey } = this.props;
        const { searchedMovieName } = this.state;
        if (searchedMovieName) {
            this.props.fetchMovieList(apiKey, searchedMovieName, this.state.filterType);
        }
    }

    movieDetails(movie) {
        this.setState({ redirect: true, selectedMovie: movie });
    }

    changeFilterType = (event) => {
        if (event.target.value !== this.state.filterType) {
            this.setState({ filterType: event.target.value })
        }
    }

    updateFavourites = (cardDetails) => {
        console.log(cardDetails)
        this.props.addToFavourites(cardDetails);
    }

    render() {
        const { redirect, selectedMovie } = this.state;
        const { classes, allMovies, notificationMsg } = this.props;
        if (redirect && selectedMovie) {
            return (<Redirect to={`/movieDetails/${selectedMovie.imdbID}`} />)
        }
        const filterDetails = [{ key: 'all', value: 'All' }, { key: 'movies', value: 'Movies' }, { key: 'series', value: 'Series' }, { key: 'episods', value: 'Episods' }];
        return (
            <Grid container justify={'center'} >
                <Grid item xs={12}>
                    <Grid container justify={'center'}>
                        <Grid item xs={11} sm={8} md={6}>
                            <div className={classes.search}>
                                <div>
                                    <div className={classes.searchIcon}>
                                        &nbsp;
                                    <SearchIcon />
                                    </div>
                                    <InputBase
                                        id="search-input"
                                        onBlur={this.changeInput.bind(this)}
                                        placeholder="Search for Movie Name"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <select name="type" id="selectType" onChange={this.changeFilterType}>
                                    {filterDetails.map((item) => (
                                        <option key={item.key} value={item.key}>{item.value}</option>
                                    ))}
                                </select>
                            </div>

                        </Grid>

                        <Grid item xs={10} sm={3} md={2}>
                            <Button variant="contained" color="secondary" onClick={this.searchForMovie}>Search</Button>
                        </Grid>
                    </Grid>
                    <br />
                    {notificationMsg && <Grid item xs={11} sm={8} md={10}><Typography variant="body2" component="p" className={classes.typography} >{notificationMsg}</Typography></Grid>}

                    <Grid container >
                        {allMovies.length > 0 && allMovies.map((movie, index) => {
                            return (
                            <Grid item xs={11} sm={6} md={4} className={classes.paddingForCard} key={index}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        title={movie.Title}
                                        subheader={movie.Year}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={movie.Poster}
                                        title={movie.Title}
                                        onClick={this.movieDetails.bind(this, movie)}
                                    />
                                </Card>
                            </Grid>
                            )
                        })}

                    </Grid>
                </Grid>
                <div className="scrollDiv"></div>
            </Grid>
        );
    }
}

const mapStateToProps = ({
    DashBoardReducer
}) => ({
    apiKey: DashBoardReducer.apiKey,
    allMovies: DashBoardReducer.allMovies,
    movieList: DashBoardReducer.movieList,
    notificationMsg: DashBoardReducer.notificationMsg,
    favourite: DashBoardReducer.favourites
});
export default connect(mapStateToProps, { addToFavourites, fetchMovieList, fetchMovieListNextCycle })(withStyles(styles)(DashBoard));