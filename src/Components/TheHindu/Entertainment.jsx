import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footes";
import "./Entertainment.css"
const Entertainment = () => {
  const style1={fontSize: "18px",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "start",
    textAlign: "justify", 
    margin: "0",
    // fontSize: "large"
  }
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const res = await fetch(
        "https://zany-erin-lion-hose.cyclic.app/posts"
      );
      const data = await res.json();
      console.log(data[0])
      setNews(data[0].articles);
      setLoading(false);
    };
    fetchNews();
  }, []);


  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="title">Entertainments</h1>
        <ul
        style={{
          margin: "50px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
        >
          {news.map((article) => (
            <div
              style={{
                boxShadow: "0 0 10px black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <div key={article.title}>
                <Link to={`/Entertainment/${article.id}`}>
                  <img
                    src={article.urlToImage}
                    alt=""
                    style={{
                      objectFit: "cover",
                      width: "377px",
                      height: "226px",
                    }}
                  />{" "}
                </Link>
                <p style={{textAlign:"initial",fontStyle: "italic"}}>{article.author}</p>
                <p style={{ textAlign: "start" }}>{article.publishedAt}</p>
                <h2>{article.title}</h2>
                <h3 style={style1}>
                  {article.description}
                </h3>
                <button className="my-button">
                  <a href={article.url}>More details</a>
                </button>
                {/* <Link to={`/newsdetails`}>
                   
                  </Link> */}
              </div>
            </div>
          ))}

        </ul>
        </div>
      )}
        <Footer/>
    </div>
  );
};

export default Entertainment;
