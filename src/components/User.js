import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class User extends Component {
    renderTemplate = () => {
        const {name, surname, error, isFetching} = this.props

        if (isFetching) {
            return <p>Load user...</p>
        }
        if (error) {
            return <p>Error: {error}</p>
        }
        if (name && surname) {
            return <h2>You name: {name} {surname}</h2>
        } else {
            return <button onClick={this.props.handleLogin}>Login</button>
        }
    }

    render() {
        console.log("render user")
        return (
            <div className="user__info">{this.renderTemplate()}</div>
        )
    }
}

User.propTypes ={
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired
}
