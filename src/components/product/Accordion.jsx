import '../../styles/Accordion.css';
import { FaChevronUp } from "react-icons/fa";
import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h2 className="accordion-title">{title}</h2>
                <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    <FaChevronUp />
                </div>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}
