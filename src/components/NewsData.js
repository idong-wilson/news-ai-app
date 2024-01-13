import React, { useEffect, useState } from 'react';
import { getNews } from '../Service/getNews';
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function NewsData() {
  const [newsData, setNewsData] = useState([]);
  const alanKey = `273febb50bff3ebf6ffb7bf93a4207d32e956eca572e1d8b807a3e2338fdd0dc/stage`
  const [selectOption, setSelectOption] = useState('')
  const [loading, setLoading] = useState(true);

  const getAllNews = async () => {
    try {
      let data = await getNews(selectOption);
      setNewsData(data.data.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
      
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  }

  const selectCategory = (event) => {
      setSelectOption(event.target.value)
  }

  useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: (commandData) => {
          setSelectOption(commandData.data)
        }
    });
  }, []);

  useEffect(() => {
    getAllNews();
  }, [selectOption]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='main'>
      <h1>News AI Application</h1>

      <div className="dropdown">
        <label for="category">Select a Category:</label>

        <select 
          className="dropdown-container" 
          name="category" 
          id="category"
          onChange={selectCategory}
          value={selectOption}
        >
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <div className="main-grid">
        {newsData?.map((news) => (
          <div key={news.url} className="news-grid">
            <img className="img" src={news?.urlToImage} alt={news?.title} />
            <p className="title">{news?.title}</p>
            <p className="content">{news?.content} <span><a href={news.url} target="_blank" rel="noreferrer">Read More..</a></span></p>
            
            <div className="info">
                <p>{moment(news?.publishedAt).startOf('hour').fromNow()}</p>
                <p>|</p>
                <p className="author">{news?.author}</p>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
