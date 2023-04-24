  import { useState, useEffect } from "react";
  import axios from 'axios';
  import Head from "./Head";
  
  function Home() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    useEffect(() => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1635948001be4baabdc412fdd6c983ff&page=${currentPage}`)
        .then((res) => {
          console.log(res.data.articles);
          setNews(res.data.articles);
          setTotalPages(Math.ceil(res.data.totalResults / 12));
        });
    }, [currentPage]);
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    return (
      <>
        <div><Head /></div>
        <div className="container my-4 fw-bold">
          <h3><u>TOP HEADLINES</u></h3>
        </div>
        <div className="container my-5" style={{ minHeight: "100vh" }}>
          <div className="row text-center">
            {news.slice((currentPage - 1) * 12, currentPage * 12).map((val) => {
              return (
                <div className="col my-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={val.urlToImage} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <a href={val.url} className="btn btn-primary" target="blank">View Detail</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between my-4">
            <button
              className="btn btn-primary"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  