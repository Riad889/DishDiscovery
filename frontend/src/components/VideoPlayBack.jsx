import React from "react";


const VideoPlayBack = ({ videoLink }) => {
  return (
    <iframe
    style={{ width: '100%', height: '100vh' }} 
    src={videoLink}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen // Ensure allowfullscreen attribute is included
  ></iframe>
  );
};

export default VideoPlayBack;
