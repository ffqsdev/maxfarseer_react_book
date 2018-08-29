import React, { Component } from 'react'
import './App.css'

import Timer from '../components/timer/Timer'
import News from '../components/news/News'
import Add from '../components/add/Add'

import myNews from '../data/newsData'


class App extends Component {
    state = {
        news: myNews
    }

    addNews = (data) => {
        const nextNews = [data, ...this.state.news]
        this.setState({news: nextNews})
    }

    render() {
        return (
            <div className="App">
                <Timer/>
                <Add addFunc={this.addNews}/>
                <h2>News:</h2>
                <News data={this.state.news}/>
            </div>
        )
    }
}

export default App
