import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(){
        super();
        this.state = {
            articles:[],
            loading:false
        }
    }
    async componentDidMount() {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=672b157a42e14ceea4f559fbacb3ed96";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
    
    render() {
        return (
            <div className="container my-3">
            <h2>NewsDaily-Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.title?element.description.slice(0,85):"0"} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
                
    
            </div>
                
            </div>
        )
    }
}

export default News
