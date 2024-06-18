import React from 'react'
import Article from './Article'
import { useParams } from "react-router-dom";
import data from "../JSON/data.json";
import YouTube from 'react-youtube';


const Detail = () => {
    const params = useParams();
    const foundArticle = data[params.id-1];
  return (
    <div>
        <h2 className='detailTitle'>{foundArticle.title}</h2>
        <p className='detailContent'>{foundArticle.content}</p>
        <div class="youtube">
        <YouTube className='iframe' containerClassName="youtube" videoId={foundArticle.youtube}/>
        </div>
    </div>
  )
}

export default Detail