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
            <form>
                <p>Author: <input id="author" onChange={this.changeText} type="text" value={author}/></p>
                <p>Text: <textarea id="text" onChange={this.changeText} value={text}></textarea></p>
                <p>Big Text: <textarea id="bigText" onChange={this.changeText} value={bigText}></textarea></p>
                <p>Confirm rules: <input onChange={this.changeConfirm} type="checkbox"/></p>
                <button onClick={this.addNewsItem} disabled={!this.validate()}>alert input</button>
            </form>
        )
    }
}

export default Add
