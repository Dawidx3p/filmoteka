import './App.css';
import React, { useState } from 'react';
import MojaLista from './mojalista';
import PopUp from './components/popUp/popUp';

function App() {
  const [comments, setComments] = useState({});
  const [currentFilm, setCurrentFilm] = useState({});
  const [clicked, setClicked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});



  function toggleClick(){ setClicked(!clicked)};

  function changeCurrentFilm(film){ setCurrentFilm(film)};

  function addComment(id, user, comment){
    console.log(comment);
    if(comments[id]===undefined){
      setComments(prevState => ({
        ...prevState, 
        [id]: [{id, user, comment}] }));
    }else{
      setComments(prevState => ({
        ...prevState, 
        [id]: [...prevState[id], {id, user, comment}] }));
    }
    
  };

  if(isAuthenticated){
    return(
      <div className="App">
        <h1>Filmxteka</h1>
        <nav>
          <ul>
            <li>Strona główna</li>
            <li>Seriale i programy</li>
            <li>Filmy</li>
            <li>Moja lista</li>
          </ul>
        </nav>
        <MojaLista toggleClick={toggleClick} changeCurrentFilm={changeCurrentFilm}/>
        <PopUp user={user} addComment={addComment} clicked={clicked} currentFilm={currentFilm} toggleClick={toggleClick} comments={comments}/>
        <button onClick={() => setIsAuthenticated(false)}>
      Log Out
    </button>
      </div>
    )
  } else {
    
    return (
      <div className="LogIn">
      <h1>Filmxteka</h1>
          <button className='submit' onClick={() => setIsAuthenticated(true)}>Zaloguj</button>;
      </div>
    )
  } 
}

export default App;
