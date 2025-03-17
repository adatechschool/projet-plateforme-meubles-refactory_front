import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';


// fetch('https://dummyjson.com/products')
//     .then((response) => {
//    return response.json()
//     })
//     response.then((result) => {
//         console.log(result)
// })



function CardList(){

    const [products, setProducts] = useState([])
  

    useEffect(() => {
       
       
        const fetchData = async () => {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
    
        setProducts(data)
      
       
    };
    fetchData();
    }, []);
//fetchData();

console.log("liste de produits", products);

    return (
     
        <div className='center-cards'>
        <div className="container-all-cards">
        { products.map((product) => (
        <Card key={product.id} product={product}/>)
       )}
        
       
        </div> 
        </div>  
    )
    
}
export default CardList