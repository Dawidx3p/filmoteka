import './Card.css';
import React from 'react';
import {getOverview} from '../../util/imdb';

function Card(props) {
    const background = `url('${props.film.title.image.url}')`;
    if(props.id <= 4){
        return(
            <div className="Card" style={{backgroundImage: background}}>
                <div className="background" onClick={() => {
                    getOverview(props.film.title.id)
                    .then(object => {
                        props.changeCurrentFilm(object);
                        props.toggleClick();
                    })
                    }}>
                        
                </div>
            </div>
        )
    }else{
        return(
            <div className="Card">
                <div className="small" onClick={() => {
                    getOverview(props.film.title.id)
                    .then(object => {
                        props.changeCurrentFilm(object);
                        props.toggleClick();
                    })
                    }}>
                        <h3>{props.film.title.title}</h3>
                </div>
            </div>
        )
    }
        
    }
    

export default Card;