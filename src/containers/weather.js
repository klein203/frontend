import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { success, error } from '../actions/weather'
import Weather from '../components/weather'


const getWeather = () => {
    const city = 'shanghai';
    const api_key = 'c672fbe76cffd25080d1be5b21bd63fe';
    return async (dispatch, getState) => {
        try {
            const response = await fetch(
                "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key
                // , {
                //     method: 'GET',
                //     headers: {
                //         'Access-Control-Allow-Origin': '*',
                //         'Context-type': 'application/json; charset=utf-8'
                //     },
                //     // mode: 'no-cors'
                // }
            );
            const data = await response.json();
            dispatch(success(data));
        } catch (e) {
            console.log(e);
            dispatch(error());
        }
    }
}

const mapStateToProps = state => ({
    weather: state.weather.info,
    state: state.weather.state
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        onFetchClick: () => getWeather()
    }, dispatch)
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)

