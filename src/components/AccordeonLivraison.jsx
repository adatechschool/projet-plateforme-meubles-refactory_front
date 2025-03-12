import {useState} from "react";
import '../styles/details/accordeonDelivery.css';
import { FaChevronUp } from "react-icons/fa";

export default function AccordeonDelivery() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordeon() {
        // Ici on change le statut de 'isOpen' quand on clique
        setIsOpen(!isOpen)
        console.log(state);
    }

    return (
        <>
            {/*HTML pour le composant livraison accordéon*/}
            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordeon}>
                    <h2 id="accordion-title">
                        Livraison
                    </h2>
                    {/*Icône qui va changer selon l'état*/}
                    <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                        <FaChevronUp />
                    </div>
                </div>

                {/*Le contenu de la livraison*/}
                {isOpen && (
                    <div className="accordion-content">
                        <p>Vous pouvez vous faire livrer par Colissimo ou en Point Relay.</p>
                    </div>
                )}
            </div>
        </>
    );
}