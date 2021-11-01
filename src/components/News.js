import React,{useEffect, useState}from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props) => {

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const UpdateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(50)
        props.setProgress(75)
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `NewsDaily-${capitalizeFirstLetter(props.category)}`;
        UpdateNews()
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=672b157a42e14ceea4f559fbacb3ed96&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
        

        
    }
   
    

    
        return (
            <>
                
                    <h1 className="text-center" style={{ margin: '35px',marginTop:"90px" }}>NewsDaily-Top <span style={{ color: "red" }}>{capitalizeFirstLetter(props.category)}</span> Headlines</h1>
                    {loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !==totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">

                    <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}


                    </div>
                </div>
                    </InfiniteScroll>
                
               
            </>
        )
    
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: "general",

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

}

export default News
