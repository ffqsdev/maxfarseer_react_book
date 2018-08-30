import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Page extends Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText
        this.props.fetchPhotosByYear(year)
    }

    componentDidMount() {
        const {year, fetchPhotosByYear} = this.props
        fetchPhotosByYear(year)
    }

    renderTemplate = () => {
        const {photos, isFetching, error} = this.props
        if (error) {
            return <p>Error: {error}</p>
        }
        if (isFetching) {
            return <p>Loading...</p>
        } else {
            return photos.map((entry, index) => (
                <img key={entry.id} src={entry.sizes[0].url} alt=""/>
            ))
        }

    }

    renderButtons = () => {
        const years = [2018, 2017, 2016, 2015, 2014, 2013]

        return years.map((item, index) => {
            return (
                <button key={index} onClick={this.onBtnClick}>{item}</button>
            )
        })
    }

    render() {
        const {year, photos} = this.props

        console.log("render page")
        return(
            <div className="page__box">
                <div className="page__box select_year">
                    {this.renderButtons()}
                </div>
                <h3>Year: {year}</h3>
                {this.renderTemplate()}
                {!photos.length && <p>You not have photos</p>}
            </div>
        )
    }
}

Page.propTypes = {
    photos: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchPhotosByYear: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}
