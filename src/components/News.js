import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
    constructor(){
        super();
        this.state = {
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount() {
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=672b157a42e14ceea4f559fbacb3ed96&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }
    handleNextClick= async ()=>{
        
        
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=672b157a42e14ceea4f559fbacb3ed96&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState(
                {articles: parsedData.articles,
                page: this.state.page +1,
                loading:false
        })
        
       
    }
    handlePrevClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=672b157a42e14ceea4f559fbacb3ed96&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            {articles: parsedData.articles,
            page: this.state.page - 1,
            loading:false
    })
    }
    
    render() {
        return (
            <>
            <div className="container my-3">
            <h1 className="text-center">NewsDaily-Top Headlines</h1>
           {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
                
    
            </div>
                
            </div>
            <div className="container my-4 d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-lg btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-lg btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </>
        )
    }
}

export default News
