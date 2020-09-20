import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './movieDetails.action';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH_MOVIE_LIST when fetching movie has been done', () => {
        fetchMock.getOnce('https://www.omdbapi.com/?apikey=b9bd48a6&i=b9bd48a6', {
            body: { payload: {} },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions =  [ { payload: { payload: {} }, type: 'FETCH_SEARCHED_MOVIE_DETAILS' } ]
        const store = mockStore({ payload: {} })

        return store.dispatch(actions.fetchMovieDetail('b9bd48a6', 'b9bd48a6')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

})