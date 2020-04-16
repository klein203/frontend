import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { success, error } from '../actions/weather'
import Weather from '../components/weather'


const getWeather = (city) => {
    const api_key = 'c672fbe76cffd25080d1be5b21bd63fe';
    return async (dispatch) => {
        try {
            const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key;
            const response = await fetch(url);                
                // , {
                //     method: 'GET',
                //     headers: {
                //         'Access-Control-Allow-Origin': '*',
                //         'Context-type': 'application/json; charset=utf-8'
                //     },
                //     // mode: 'no-cors'
                // }
            const data = await response.json();
            console.log(dispatch);            
            dispatch(success(data));
        } catch (err) {
            console.log(err);
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
        onFetchClick: (city) => getWeather(city)
    }, dispatch)
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)

