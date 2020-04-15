import React from 'react'

class Weather extends React.Component {
    render() {
        const { weather, state, onClickFetch } = this.props

        return (
            <div>
                {state === "success" ? <p>城市：{weather.city}，风向：{weather.WD}</p> : ''}
                <button onClick={onClickFetch}>获取天气</button>
            </div>
        )
    }
}

export default Weather