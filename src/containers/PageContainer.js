import React, { Component } from 'react'
import {connect} from 'react-redux'

import Page from '../components/Page'
import {getPhotos} from '../actions/PageActions'


class PageContainer extends Component {

    render() {
        const {page, getPhotos} = this.props

        return (
            <Page
                year={page.year}
                photos={page.photos}
                isFetching={page.isFetching}
                error={page.error}
                fetchPhotosByYear={getPhotos}/>
        )
    }

}

const mapStateToProps = store => {
    return {
        page: store.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: year => dispatch(getPhotos(year)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)
