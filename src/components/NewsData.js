import React, { useEffect, useState } from 'react'
import { getNews } from '../Service/getNews'

export default function NewsData() {
  const [newsData, setNewsData] = useState([])
  const getAllNews = async () => {
    let data = await getNews();
    setNewsData(data?.data.articles)
  }

  useEffect(() => {
    getAllNews()
  }, [])
  
  return (
    <div className='main'>
      <h1>News AI Application</h1>

      {newsData?.map((news) => {
        return (
          <div>{news?.title}</div>
        )
      })}
    </div>
  )
}
