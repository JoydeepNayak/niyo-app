import reducer from './dashboard.reducer';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            { "allMovies": [], "apiKey": "b9bd48a6", "movieList": {}, "notificationMsg": "", "searchedMovie": {} }
        )
    })

    it('should handle UN_MOUNT_MOVIE_LIST', () => {
        expect(
            reducer([], {
                type: 'UN_MOUNT_MOVIE_LIST'
            })
        ).toEqual(
            {
                allMovies: [],
                movieList: {},
                apiKey: 'b9bd48a6',
                notificationMsg: '',
                searchedMovie: {}
            }
        )
    })
    it('should handle NETWORK_ERROR', () => {
        expect(
            reducer([], {
                type: 'NETWORK_ERROR',
                payload: 'notificationMsg'
            })
        ).toEqual(
            {
                notificationMsg: 'notificationMsg'
            }
        )
    })
    it('should handle MOVIE_RECORD_MISSING', () => {
        expect(
            reducer([], {
                type: 'MOVIE_RECORD_MISSING',
                payload: 'notificationMsg'
            })
        ).toEqual(
            {
                notificationMsg: 'notificationMsg'
            }
        )
    })
    it('should handle FETCH_MOVIE_LIST', () => {
        expect(
            reducer([], {
                type: 'FETCH_MOVIE_LIST',
                payload: { search: [], totalLength: 185 }
            })
        ).toEqual(
            {
                movieList: { search: [], totalLength: 185 },
                notificationMsg: '',
                allMovies: undefined
              }
        )
    })
})