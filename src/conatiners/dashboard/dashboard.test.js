import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DashBoard from "./dashBoard";

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
beforeEach(() => {
    wrapper = mount(<Provider store={store}>
        <DashBoard />
    </Provider>);
});
describe('<DashBoard />', () => {

    it('calls DashBoard', () => {
        expect(wrapper).toBeDefined();
    });
    it('calls DashBoard Serach input', () => {
        wrapper.find("#search-input").at(0).simulate('blur', { target: { value: '2012' } });
        const instance = wrapper.find("DashBoard").instance();
        expect(instance.state.searchedMovieName).toBe('');
    });
    it('call search Button', () => {
        const instance = wrapper.find("DashBoard").instance();
        instance.setState({ searchedMovieName: '2012' });
        expect(instance.state.searchedMovieName).toBe('2012')
    });

});