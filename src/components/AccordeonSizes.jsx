import {useState} from "react";
import '../styles/details/accordeonSizes.css';
import { FaChevronUp } from "react-icons/fa";

export default function AccordeonSizes() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordeon() {
        // Ici on change le statut de 'isOpen' quand on clique
        setIsOpen(!isOpen)
        console.log(state);
    }

    return (
        <>
            {/*HTML pour le composant dimensions accordéon*/}
            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordeon}>
                    <h2 id="accordion-title">
                        Dimensions
                    </h2>
                    {/*Icône qui va changer selon l'état*/}
                    <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                        <FaChevronUp />
                    </div>
                </div>

                {/*Le contenu des dimensions*/}
                {isOpen && (
                    <div className="accordion-content">
                        <p><strong>Largeur : </strong>68 cm</p>
                        <p><strong>Profondeur : </strong>82 cm</p>
                        <p><strong>Hauteur : </strong>100 cm</p>
                        <p><strong>Larg. assise : </strong>56 cm</p>
                        <p><strong>Prof. assise : </strong>50 cm</p>
                        <p><strong>Haut. assise : </strong>42 cm</p>
                    </div>
                )}
            </div>
        </>
    );
}