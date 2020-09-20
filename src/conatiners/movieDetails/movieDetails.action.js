export const fetchMovieDetail = (apiKey, IMDB_ID) => (dispatch) => {

    return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${IMDB_ID}`)
        .then(response => response.json())
        .then(json => {
            if (json.Response === 'False') {
                dispatch({ payload: 'Record Not Found', type: 'MOVIE_RECORD_MISSING' })
            }
            else {
                dispatch({ payload: json, type: 'FETCH_SEARCHED_MOVIE_DETAILS' })
            }
        }
        )
        .catch(error => dispatch({ payload: 'oops ,Somthing went wrong,Please try agin later', type: 'NETWORK_ERROR' }));
}
export const unMountMovieList = () => (dispatch) => {
    dispatch({
        type: 'UN_MOUNT_MOVIE_LIST'
    })
}