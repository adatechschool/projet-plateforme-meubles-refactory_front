import { useState, useEffect } from 'react';

function Tableau() {

    const [products, setProducts] = useState([])
  
    useEffect(() => {
   
    const fetchData = async () => {
    const response = await fetch('http://localhost:3000/getAllCategorieOfProducts');
    const data = await response.json();

    setProducts(data)
   
};
fetchData();
}, []);

  return (
    <div className="bg-gray-100 text-gray-900 " >
    <div className="flex h-screen">

    <div className="bg-gray-200 text-slate-900 w-80 p-6">
       <h2 className=" font-poppins justify-center text-xl font-bold mb-6 mt-10 px-3">Tableau de bord</h2>
           {/*<li className = "list-none" ><a href="#" className="text-l flex items-center py-5 px-3 hover:bg-blue-400 rounded-lg"><i className="font-popins fas fa-tachometer-alt mr-3"></i> Tableau de bord</a></li>*/}
           <li className = "list-none"><a href="#" className="text-l flex items-center py-2 px-3 hover:text-lime-600"><i className="font-poppins fa-solid fa-user mr-3"></i> Clients</a></li>
           <li className = "list-none"><a href="#" className="text-l flex items-center py-2 px-3 hover: text-lime-600"><i className="font-poppins  fa-solid  fas fa-cogs mr-3"></i><strong>Gestion des produits</strong></a></li>
           <li className = "list-none"><a href="#" className="text-l flex items-center py-2 px-3 hover:text-lime-600"><i className="font-poppins fa-solid fa-box mr-3"></i> Commandes</a></li>
           <li className = "list-none"><a href="#" className="text-l flex items-center py-2 px-3 hover:text-lime-600"><i className="font-poppins fa-solid fa-right-from-bracket mr-3"></i> Retour à la boustique</a></li>
       <div className="mt-6">
       <button onclick="logout()" className="rounded-3xl font-popins text-l w-full bg-rose-700 hover:scale-105 hover:shadow-lg text-white px-4 py-2 shadow-md"> 
           Déconnexion
       </button>
       </div>
    </div>


    <div className="overflow-hidden rounded-lg shadow-lg bg-white  w-full p-4 flex justify-center">
    <div className="w-[80%] ">
    <h2 className="font-poppins text-2xl font-bold mb-6 border-b-2 border-gray-400 pb-3">Gestion des produits</h2>
    <table className="w-full table-auto border-collapse justify-center border border-gray-300 rounded-2xl">
        <thead className="bg-black text-white text-lg">
        <tr>

            <th className="font-poppins py-3 px-4 text-left  ">ID</th>
            <th className="font-poppins py-3 px-4 text-left ">NOM</th>
            <th className="font-poppins py-3 px-4 text-left ">PRIX</th>
            <th className="font-poppins py-3 px-4 text-left ">CATEGORIE</th>
            <th className="font-poppins py-3 px-4 text-left ">COULEUR</th>
            <th className="font-poppins py-3 px-4 text-left flex justify-center ">ACTIONS</th>

        </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">

        { products.map((product) => (
            <tr className="hover:bg-gray-100 transition duration-200">

                <td className="font-poppins py-3 px-4">{product.id}</td>
                <td className="font-poppins py-3 px-4">{product.name}</td>
                <td className="font-poppins py-3 px-4">{product.price}€</td>
                <td className="font-poppins py-3 px-4">{product.categories_name}</td>
                <td className="font-poppins py-3 px-4">{product.colors_name}</td>
                
                <td className="py-3 px-4 flex space-x-1 justify-center">
                    <a href="#>" className="font-poppins bg-lime-600 hover:scale-105 hover:shadow-lg text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
                        ✏️ 
                    </a>
                    <a href="#>" className="font-poppins bg-rose-700 hover:scale-105 hover:shadow-lg text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-950 transition duration-200" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cette collecte ?');">
                        🗑️
                    </a>
                </td>
            </tr>
        ))}

        </tbody>
    </table>
</div>
</div>
</div>
</div>
  );
}
export default Tableau;