import React from 'react'
import Article from './Article'
import { useParams } from "react-router-dom";
import data from "../JSON/data.json";
import YouTube from 'react-youtube';


const Detail = () => {
  const params = useParams();
  const foundArticle = data[params.id - 1];
  return (
    <div className="container text-center">
      <div className='detailPage'>
        <h2 className='detailTitle'>{foundArticle.title}</h2>
        <p className='detailContent'>{foundArticle.content}</p>
        <div class="you">
          {foundArticle.youtube && <iframe class="youtube_ifreme" width="560" height="315" src={foundArticle.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
          {foundArticle.soundcloud && <iframe class="soundcloud" width="100%" height="315" src={foundArticle.soundcloud +"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}></iframe>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Detail