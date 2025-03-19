import { useState } from "react";
import '../../styles/ButtonInscription.css';
import { Link, useNavigate } from "react-router-dom";

function ButtonInscription() {
    const navigate = useNavigate(); 

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adress, setAdress] = useState("");

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:3000/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstname, lastname, email, password, adress })
            });

            const data = await response.json(); // ✅ Ajout de await

            if (response.ok) {
                console.log("Inscription réussie !");
                console.log("Token reçu :", data.token);
                localStorage.setItem("token", data.token);
                
                // ✅ Redirection uniquement si l'inscription réussit
                navigate("/connexion");
            } else {
                console.error("Erreur :", data.message);
            }
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    };

    return (
        <div className="inscription-container">
            <div className="inscription-inputs">
                <div className="input-group">
                    <label className="input-title">Prénom</label>
                    <input
                        type="text"
                        placeholder="Entrez votre prénom"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label className="input-title">Nom</label>
                    <input
                        type="text"
                        placeholder="Entrez votre nom"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>

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

                <div className="input-group">
                    <label className="input-title">Adresse</label>
                    <input
                        type="text"
                        placeholder="Entrez votre adresse"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </div>
            </div>

            <div className="inscription-actions">
                <button onClick={handleSignup} className="inscription-button">S'inscrire</button>

                <div className="already-account">
                    <p>J'ai déjà un compte, <Link className='link-connexion' to="/connexion">connexion</Link></p>
                </div>
            </div>
        </div>
    );
}

export default ButtonInscription;
