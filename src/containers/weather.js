import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { success, error } from '../actions/weather';
import Weather from '../components/weather';


const getWeather = (city) => {
    const api_key = 'c672fbe76cffd25080d1be5b21bd63fe';
    return async (dispatch) => {
        try {
            const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key;
            const response = await fetch(url);
            const data = await response.json();
            return dispatch(success(data));
        } catch (err) {
            console.log(err);
            return dispatch(error());
        }
    }
}

const mapStateToProps = state => ({
    weather: state.weather.info,
    state: state.weather.state
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        onFetchClick: (city) => getWeather(city)
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);
