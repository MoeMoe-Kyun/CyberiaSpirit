import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../App.css';

const Webrings = () => {
    /*
    <div id='touhou-ring'>
            <script type="text/javascript" src="https://glassplanet.neocities.org/webring/touhou/onionring-variables.js"></script>
            <script type="text/javascript" src="https://glassplanet.neocities.org/webring/touhou/widget/widget-hifuu.js"></script>
    </div>
    */
    
    return (
        <>

        <Navbar />

        <h1>Webrings</h1>
        <p> There are many in the world that are fascinated by Gensoko and 
            it's inhabitants. Their dedication to chronicling the events
            and people in Gensokyo is truly astounding, and deserves
            to be honored.
        </p>
        
        <div className="webwall">
        <a href="https://koishi.uk/index.html">
            <img className="webwallimage" src="https://koishi.uk/media/buttons/own.gif"></img>
        </a>
        <a href="https://bishoujopalace.neocities.org/">
            <img className="webwallimage" src="https://bishoujopalace.neocities.org/WG/ezgif.com-animated-gif-maker1.gif"></img>
        </a>

        </div>
 
        <Footer />

        </>
    )
}

export default Webrings