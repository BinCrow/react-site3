import React from 'react'

function YoutubeItem(props) {
  return (
    <li>
      <a href="/">
        <img src={props.video.snippet.thumbnails.medium.url}
        alt="props.video.snippet.title"
      />
      <p>{props.video.snippet.title}</p>
      </a>
    </li>
  )
}

export default YoutubeItem