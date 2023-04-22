import {useState, useEffect } from "react";
import axios from 'axios'
function App() {
  const [news,setNews] = useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1635948001be4baabdc412fdd6c983ff")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  },[])
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val)=>{
              return (
                <div className="col my-3">
                  <div className="card" style={{width: "18rem"}}>
                    <img src={val.urlToImage} className="card-img-top" alt="..."></img>
                      <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.description}</p>
                        <a href={val.url} className="btn btn-primary">View Detail</a>
                      </div>
                  </div>
               </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
} 

export default App