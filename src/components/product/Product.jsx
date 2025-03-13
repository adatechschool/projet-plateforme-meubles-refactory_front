import Accordion from "../components/product/Accordion.jsx";
import Footer from "../components/general/Footer.jsx";
import Banner from "../components/general/Banner.jsx";

export default function Product() {
    return (
        <div>
            <Banner />
            <Accordion title="Description">
                Description du produit
            </Accordion>
            <Accordion title="Dimensions">
                Dimension
            </Accordion>
            <Accordion title="Livraison">
                Livraison
            </Accordion>
            <Footer />
        </div>
    );
}