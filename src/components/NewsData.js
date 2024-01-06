import React, { useEffect, useState } from 'react';
import { getNews } from '../Service/getNews';
import moment from 'moment';

export default function NewsData() {
  const [newsData, setNewsData] = useState([]);

  const getAllNews = async () => {
    try {
      let data = await getNews();
      setNewsData(data.data.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
      // Handle error as needed, e.g., setNewsData([]) or display an error message.
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  console.log(newsData)

  return (
    <div className='main'>
      <h1>News AI Application</h1>

      <div className="main-grid">
        {newsData?.map((news) => (
            <div className="news-grid">
              <img className="img" src={news?.urlToImage} alt={news?.title} />

              <p className="title">{news?.title}</p>

              <p className="content">{news?.content}</p>
              <p className="author">Author: {news?.author}</p>
              <p>{moment(news?.publishedAt).startOf('hour').fromNow()}</p>

              <a href={news.url} target="_blank" rel="noreferrer">Read More..</a>
            </div>
        ))}
      </div>
    </div>
  );
}
