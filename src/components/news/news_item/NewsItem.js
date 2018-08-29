import React, {Component} from 'react'
import PropTypes from 'prop-types'


class NewsItem extends Component {
    state = {
        visible: false,
    }

    handleReadMoreClick = (e) => {
        e.preventDefault()
        this.setState({visible: true})
    }

    render() {
        const {author, text, bigText} = this.props.data
        const {visible} = this.state

        return (
            <div className="news-item">
                <p className="name">{author}</p>
                <p className="text">{text}</p>
                {
                    !visible && <a onClick={this.handleReadMoreClick} className="readmore" href="#!">More</a>
                }
                {
                    visible && <p className="big-text">{bigText}</p>
                }
            </div>
        )
    }
}

NewsItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
}

export default NewsItem
