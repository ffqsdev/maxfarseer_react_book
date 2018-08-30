import React, { Component } from 'react'
import {connect} from 'react-redux'

import User from '../components/User'
import {login} from '../actions/UserActions'


class UserContainer extends Component {

    render() {
        const {user, login} = this.props
        
        return (
            <User 
                name={user.name}
                surname={user.surname}
                isFetching={user.isFetching}
                error={user.error}
                handleLogin={login}/>
        )
    }

}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
