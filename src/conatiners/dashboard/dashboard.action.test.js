import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './dashboard.action';
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_MOVIE_LIST when fetching movie has been done', () => {
        fetchMock.getOnce('https://www.omdbapi.com/?apikey=b9bd48a6&s=2042&page=1', {
            body: { payload: {} },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [{ payload: { payload: {} }, type: 'FETCH_MOVIE_LIST' }]
        const store = mockStore({ payload: {} })

        return store.dispatch(actions.fetchMovieList('b9bd48a6', '2042')).then(() => {
           
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
    it('creates FETCH_MOVIE_LIST_MORE when fetching movie has been done', () => {
        fetchMock.getOnce('https://www.omdbapi.com/?apikey=b9bd48a6&s=2042&page=2', {
            body: { payload: {} },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [{ payload: { payload: {} }, type: 'FETCH_MOVIE_LIST_MORE' }]
        const store = mockStore({ payload: {} })

        return store.dispatch(actions.fetchMovieListNextCycle('b9bd48a6', '2042', '2')).then(() => {
            
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
})
