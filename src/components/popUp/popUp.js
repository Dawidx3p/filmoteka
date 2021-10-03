import React, { useState } from 'react';
import './popUp.css';
import Comments from '../Comments/Comments';
function PopUp(props) {
    let genres = '';
    const [comment, setComment] = useState('');
    if(props.clicked){
        for(let genre = 0; genre < props.currentFilm.genres.length; genre++){
            if(genre===0){
                genres = genres + props.currentFilm.genres[genre];
            }else{
                genres = genres + ', ' + props.currentFilm.genres[genre];
            }
        }
        if(props.currentFilm.plotOutline){
            return(
                <div className="vid" >
                    <div className="popup">
                        <img alt={props.currentFilm.title.title} src={props.currentFilm.title.image.url}/>
                        <div>
                            <h1>{props.currentFilm.title.title}</h1>
                            <h4>Rok: {props.currentFilm.title.year}</h4>
                            <p>{genres}</p>
                            <p>{props.currentFilm.plotOutline.text}</p>
                            <div className="comments">
                                <h2>Comments</h2>
                                <Comments comments={props.comments[props.currentFilm.title.id]}/>
                                <div className="addComment">
                                <div className="img inline" style={{backgroundImage: 'url("' + props.user.picture + '")' }}></div>
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    console.log(props.comments, props.currentFilm.title.id);
                                    props.addComment(props.currentFilm.title.id, props.user, comment);
                                    setComment('');
                                }}>
                                    
                                    <input className="addComment inline" value={comment} type="text" onChange={(event) => {setComment(event.target.value)}}></input>
                                    <input type="submit"></input>
                                </form>
                            </div>
                            </div>
                            <button onClick={() => props.toggleClick()}>exit</button>
                        </div>
                        
                    </div>
                </div>
            );
        }else{
            return(
                <div className="vid" >
                    <div className="popup">
                        <img alt={props.currentFilm.title.title} src={props.currentFilm.title.image.url}/>
                        <div>
                            <h1>{props.currentFilm.title.title}</h1>
                            <h4>Rok: {props.currentFilm.title.year}</h4>
                            <p>{genres}</p>
                            <div className="comments">
                                <h2>Comments</h2>
                                <Comments comments={props.comments[props.currentFilm.title.id]}/>
                                <div className="addComment">
                            <div className="img inline" style={{backgroundImage: 'url("' + props.user.picture + '")' }}></div>
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    console.log(props.comments, props.currentFilm.title.id);
                                    props.addComment(props.currentFilm.title.id, props.user, comment);
                                    setComment('');
                                }}>
                                    
                                    <input className="addComment inline" type="text" id="comment" value={comment} onChange={(event) => {setComment(event.target.value)}}></input>
                                    <input type="submit"></input>
                                </form>
                            </div>
                            </div>
                            <button onClick={() => props.toggleClick()}>exit</button>
                        </div>
                        
                    </div>
                </div>
            );
        }
        
    }else{
        return(
            <div></div>
        )
    }
    
}

export default PopUp;