import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';

import {Link} from "react-router-dom";

const Journals = () => {
    return (
        <>
    
        <Navbar />

        <h1>Journals</h1>
        <p> In the late 20th century, Yukari sought the expertise of globally recognised mathematicians to learn about outside mathematics. 
            To this end, she asked Lady Patchouli to create a small library of the most important and interesting mathematical ideas. Then,
            together with Keine Kamishirasawa and Koakuma, four compendiums were created; each compendium detailing the current knowledge of
            mathematical analysis, combinatorics and discrete mathematics, geometry and statistics within Gensokyo.
        </p>

        <p>
            Four mathematicians were then escorted through the Great Hakurei Barrier. Each was to, over the span of several years, bring new mathematical
            ideas and discuss them with the leading mathematicians in Gensokyo. In return, they would be given private rooms with every amenity, as well as 
            the opportunity to reside in Gensokyo when their deaths were near. These four were: Paul Erdős, John Forbes Nash Jr., Andrey Kolmogorov and
            Alonzo Church.
        </p>

        <p>
            Documented below are some of the tales and theorems these four great men discussed during their time in the Land of Illusions. A special thank
            you should be given to Marisa, Patchouli and the rest of those within the Scarlet Devil Mansion for not only translating the discussions into
            Japanese, but also helping Kolmogorov improve his spoken English.
        </p>

        <div className="linkbox">
            <Link className="journallink" to="/Journals/KolmogorovsAxioms">Kolmogorov's Axioms and the foundations of probability</Link>
        </div>
    
        </>
    )
}

export default Journals