import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
  const letterCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // document.title = `${letterCapitalize(props.category)} - NewsMonkey`;

  const updateNews =  async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=538d852f7e174039bdf3b1cbd667eb94&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
 useEffect(() => {
  updateNews();
 },[])
 



  const fetchMoreData = async () => {

    setPage(page + 1) 

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=538d852f7e174039bdf3b1cbd667eb94&page=${page + 1}&pageSize=${props.pageSize}`;
    // setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // setLoading(false)

  };

    return (
      < >
        <h1 className="text-center" style={{marginTop:'60px', marginBottom:'30px'}}>NewsMonkey - Top {letterCapitalize(props.category)} Headlines</h1>
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }


News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: PropTypes.string,
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News