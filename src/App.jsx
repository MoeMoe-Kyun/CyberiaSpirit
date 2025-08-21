import { useState } from 'react'

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Link } from 'react-router-dom';

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  // In reality, JSX returned by the React components 
  // is compiled into Javascript

  // Using a root element is not the only working option.
  // An array of components is also a valid solution:

  // We could use a div element for our root element, but
  // instead we can use fragments - wrapping with an empty element

  /*
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  */

  // <button type="button"><Link to={"/About"}>Let's all love Lain {counter} </Link></button>
  
  /*
  Deep within old hell exists a great hall called the Yuriad. Commissioned by Yukari Yakumo herself, the Yuriad is a secret meeting place for 
        all talented musicians and mathematicians within Gensokyo. Built during the Great War, the hall has hosted some of the greatest minds from
        the world outside, including Philip Glass, John von Neumann and - at the request of Meiling
  */

  /*
  <p>
    The Cyberia was originally a popular nightclub located in Shibuya, known among the youth for its relaxed age verification and techno music.   
    Shutdown in the late naughties, the venue's soul lived on in the hearts of men, awaiting a new home.
  </p>
  */
    
  return (
    <>
      <Navbar />
      
      <div className="content">
      <h1> The Cyberia's Spirit </h1>

      <a className="centerimgelink" href="https://wallhaven.cc/w/l3lx7r">
            <img className="centerimage" src="src/assets/lainsadsmall.png"></img>
      </a>
      </div>

      <Footer />
    </>
  )
}

export default App