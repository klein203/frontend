import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { success, error } from '../actions/weather'
import Weather from '../components/weather'


const getWeather = () => {
    console.log("----------------------===123----------")
    return async (dispatch, getState) => {
        try {
            console.log("----------------------===124----------")
            console.log(getState())
            const response = await fetch(
                "http://www.weather.com.cn/data/sk/101280101.html"
            )
            const data = await response.json()
            dispatch(success(data.info))
        } catch {
            dispatch(error())
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

