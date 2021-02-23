import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import Title from "./Title";
import Views from "./Views";
import Buttons from "./Buttons";
import Comments from "./Comments";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video embedUrl = {video.embedUrl} title = {video.title} />
      <Title title = {video.title} />
      <Views views = {video.views} createdAt = {video.createdAt}/>
      <Buttons upvotes = {video.upvotes} downvotes = {video.downvotes}/>
      <Comments comments = {video.comments} />
      
    </div>
  );
}

export default App;


























