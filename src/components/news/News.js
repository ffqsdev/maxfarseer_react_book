import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import NewsItem from './news_item/NewsItem'


class News extends Component {

    render() {
        const {data} = this.props

        return (
            <Fragment>
                <div className="news-box">
                    {this.renderNews()}
                </div>
                {data.length ? <h2>Общее количество новостей: {data.length}</h2> : null}
            </Fragment>
        )
    }

    renderNews = () => {
        const { data } = this.props
        let newsTemplate = null

        if (data.length) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <NewsItem key={item.id} data={item}/>
                )
            })
        } else {
            newsTemplate = (<p>Not news</p>)
        }

        return newsTemplate
    }
}

News.propTypes = {
    data: PropTypes.array.isRequired
}

export default News
