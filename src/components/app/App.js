import React, { Component } from 'react'

import News from '../../components/news/News'
import Add from '../../components/add/Add'
import PageContainer from '../../containers/PageContainer'
import UserContainer from '../../containers/UserContainer'

import './App.css'


export default class App extends Component {
    state = {
        news: null,
        isLoading: true
    }

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews

        if(Array.isArray(state.news)) {
            nextFilteredNews = [...state.news]

            nextFilteredNews.forEach((item, index) => {
                if(item.bigText.toLowerCase().indexOf("pubg") !== 1) {
                    item.bigText = "SPAM"
                }
            })

            return {news: nextFilteredNews}
        }

        return null
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('/data/newsData.json')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState({news: data, isLoading: false})
                })
                .catch((error) => {
                    this.setState({isLoading: false})
                })
            }, 2000)
    }

    addNews = (data) => {
        const nextNews = [data, ...this.state.news]
        this.setState({news: nextNews})
    }

    render() {
        const {news, isLoading} = this.state

        return (
            <div className="App">
                <UserContainer/>
                <PageContainer/>

                <h2>Create new News</h2>
                <Add addFunc={this.addNews}/>
                <h2>News:</h2>
                {isLoading && <p>Loading...</p>}
                {Array.isArray(news) && <News data={news}/>}
            </div>
        )
    }
}
