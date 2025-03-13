import '../styles/detailsProduct/Product_details.css';
import Product_header from "../components/Product_header.jsx";
import Description from '../components/Description';
import AccordeonSizes from "../components/AccordeonSizes.jsx";
import AccordeonDelivery from "../components/AccordeonDelivery.jsx";
import GaleryDetailsProduct from "../components/GaleryDetailsProduct.jsx";

export default function ProductDetails() {
    return (
        <>
            <div className="container">
                <div className="container-gallery">
                    <GaleryDetailsProduct/>
                </div>

                <div className="description-container">
                    <Product_header />
                    <Description />
                    <AccordeonSizes />
                    <AccordeonDelivery />
                </div>
            </div>
        </>
    )
}