import { useState } from "react";
import '../../styles/ButtonConnexion.css';
import { Link, useNavigate } from "react-router-dom";
const handleLogin = async () => {

    const email = "john.doe@example.com";
    const password = "securepassword";

    try {
        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Connexion réussie !");
            console.log("Token reçu :", data.token);
            localStorage.setItem("token", data.token); // Optionnel : stocker le token
        } else {
            console.error("Erreur :", data.message);
        }
    } catch (error) {
        console.error("Erreur lors de la requête :", error);
    }
};

import '../../styles/ButtonConnexion.css'

function ButtonConnexion() {
    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Connexion réussie !");
                console.log("Token reçu :", data.token);
                localStorage.setItem("token", data.token); 
                
                navigate("/");
            } else {
                console.error("Erreur :", data.message);
            }
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    };

    return (
        <div className="connexion-container">
           
            <div className="connexion-inputs">
                <div className="input-group">
                    <label className="input-title">Email ou nom d'utilisateur</label>
                    <input
                        type="email"
                        placeholder="Entrez votre email ou votre nom d’utilisateur"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label className="input-title">Mot de passe</label>
                    <input
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className="connexion-actions">
                <div className="remember-container">
                    <label>
                        <input type="checkbox" />
                        Se souvenir de moi
                    </label>
                    <a className='forgot-password' href="#">Mot de passe oublié</a>
                </div>

                <button onClick={handleLogin} className="connexion-button">Valider</button>

                <div className="already-account">
                    <p className="text">Je n'ai pas de compte, <Link className='link-connexion' to="/inscription">inscription</Link></p>
                </div>
            </div>
        </div>
    );
}

export default ButtonConnexion;
