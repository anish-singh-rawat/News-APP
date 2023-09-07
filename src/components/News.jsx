import React from 'react'

export default function News({item}) {
    return (
        <div className="col-sm-3 mt-4">
            <div className="card" >
                {
                    item.urlToImage &&  <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                }
               
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} className="btn btn-warning" target='_blank'>Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
