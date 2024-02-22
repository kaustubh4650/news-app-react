import React from 'react'
import "../App.css"


const NewsItem = (props)=>{

    let {title , description, imageUrl , newsUrl, date, source} = props;
    return (
      <div>  
        <div className="card mb-5" style= {{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg"} className="card-img-top " alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...<span style={{marginTop : "10px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span></h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'> On {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }


export default NewsItem