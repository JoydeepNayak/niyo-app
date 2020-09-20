import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MovieDetails from "./movieDetails";

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore({
    DashBoardReducer: {
        allMovies: [],
        movieList: {},
        apiKey: 'b9bd48a6',
        notificationMsg: '',
        searchedMovie: {}
    }
});

var wrapper;
const props = {
    fetchMovieDetail: jest.fn(),
    match: {
        params: {
            id: 'abcd'
        }
    }
};
beforeEach(() => {
    wrapper = shallow(<Provider store={store}>
        <MovieDetails {...props} />
    </Provider>);
});
describe('<MovieDetails />', () => {
    it('should check `componentDidMount()`', () => {
        const instance = wrapper.instance();
        expect(instance).toBeDefined();
    });
});