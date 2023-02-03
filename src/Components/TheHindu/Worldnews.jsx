import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Worldnews = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=News&from=2023-01-30&sortBy=popularity&apiKey=90cf0be35c884eba94506e489e88cde1&id=${id}
        `);
        const data = await response.json();
        setNews(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h3>{news.title}</h3>
      <div style={{ boxShadow: "0 0 10px black", padding: "10px", margin: "10px", width: "39%", display: "contents", borderRadius: "52px" }} >
        <img src={news.urlToImage} width="250px" height="250px"/> 
        <h2 style={{ color: "orangered" }}>{id}</h2>
        <h1>Description</h1>
        <h3>{news.publishedAt}</h3>
        <p>{news.title}</p>
      </div>
    </div>
  );
};

export default Worldnews;


