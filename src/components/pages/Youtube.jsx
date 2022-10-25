import React, { useEffect, useState } from "react"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Contents from "../layout/Contents"
import Title from "../layout/Title"
import Contact from "../layout/Contact"
import YoutubeList from "../includes/YoutubeList"
import YoutubeSearch from "../includes/YoutubeSearch"

function Youtube() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyBa0gAVLGMaRhlcqBEiymbNh1kXiXOzTbs`, requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  }

  useEffect (() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=박효신&key=AIzaSyBa0gAVLGMaRhlcqBEiymbNh1kXiXOzTbs", requestOptions)
    .then(response => response.json())
    .then(result => {
      setVideos(result.items);
    })
    .catch(error => console.log('error', error));

  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference"]} />
        <section className="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeList videos={videos} />
            </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Youtube