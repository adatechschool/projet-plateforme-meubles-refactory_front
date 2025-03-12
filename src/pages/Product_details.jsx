import Product_header from "../components/Product_header.jsx";
import Description from '../components/Description';
import './Product_details.css';

export default function ProductDetails() {
    return (
        <div className="description-container">
            <Product_header />
        <Description />
        </div>
    )
}