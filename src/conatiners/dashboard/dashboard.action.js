
export const fetchMovieList = (apiKey, movieName, type) => (dispatch) => {
      dispatch({type: 'CLEAR_MOVIE_DETAILS'})
      return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&page=1${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(json => {
                  if (json.Response === 'False') {
                        dispatch({ payload: 'Record Not Found', type: 'MOVIE_RECORD_MISSING' })
                  }
                  else {
                        dispatch({ payload: json, type: 'FETCH_MOVIE_LIST' })
                  }
            }
            )
            .catch(error => dispatch({ payload: 'oops ,Somthing went wrong,Please try agin later', type: 'NETWORK_ERROR' }));
}

export const fetchMovieListNextCycle = (apiKey, movieName, page, type) => (dispatch) => {
      return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}${type !== 'all' ? `&type=${type}` : ''}&page=${page}`)
            .then(response => response.json())
            .then(json => {
                  if (json.Response === 'False') {
                        dispatch({ payload: 'Record Not Found', type: 'MOVIE_RECORD_MISSING' })
                  }
                  else {
                        dispatch({ payload: json, type: 'FETCH_MOVIE_LIST_MORE' })
                  }
            }
            )
            .catch(error => dispatch({ payload: 'oops ,Somthing went wrong,Please try agin later', type: 'NETWORK_ERROR' }));
}

export const addToFavourites = (movie) => (dispatch) => {
      return dispatch({ payload: movie, type: 'ADD_TO_FAVOURITES' })
}

export const removeFromFavourites = (movie) => (dispatch) => {
      return dispatch({ payload: movie, type: 'REMOVE_FROM_FAVOURITES' })
}

