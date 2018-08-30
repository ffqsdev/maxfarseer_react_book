import React, {Component} from 'react'


class Add extends Component {
    state = {
        form: {
            author: "",
            text: "",
            bigText: "",
            confirm: false
        }
    }

    addNewsItem = (e) => {
        e.preventDefault()
        const {author, text, bigText} = this.state.form
        const id = +new Date()
        this.props.addFunc({id, author, text, bigText})
    }

    changeText = (e) => {
        var form = {...this.state.form}
        const {id, value} = e.currentTarget
        form[id] = value
        this.setState({form})
    }

    changeConfirm = (e) => {
        var form = {...this.state.form}
        form.confirm = e.currentTarget.checked
        this.setState({form})
    }

    validate = () => {
        const {author, text, bigText, confirm} = this.state.form

        if (author.trim() && text.trim() && bigText.trim() && confirm) {
            return true
        }
        return false
    }

    render() {
        const {author, text, bigText} = this.state.form

        return (
            <form className="add__form">
                <p>
                    <span className="label">Author: </span>
                    <input id="author" onChange={this.changeText} type="text" value={author}/></p>
                <p>
                    <span className="label">Text: </span>
                    <textarea id="text" onChange={this.changeText} value={text}></textarea></p>
                <p>
                    <span className="label">Big Text: </span>
                    <textarea id="bigText" onChange={this.changeText} value={bigText}></textarea></p>
                <p>
                    <span className="label">Confirm rules: </span>
                    <input onChange={this.changeConfirm} type="checkbox"/></p>
                <button onClick={this.addNewsItem} disabled={!this.validate()}>add news</button>
            </form>
        )
    }
}

export default Add
