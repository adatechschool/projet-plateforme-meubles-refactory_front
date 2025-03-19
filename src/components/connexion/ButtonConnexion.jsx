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
    return (
        <div className="connexion-actions">
            <div className="remember-container">
                <label>
                    <input type="checkbox" />
                    Se souvenir de moi
                </label>
                <a className='forgot-password' href="#">Mot de passe oublié</a>
            </div>

            <button onClick={handleLogin}className="connexion-button">Valider</button>

            <div className="already-account">
                <p>J'ai déjà un compte, <a className='link-connexion' href="#">connexion</a></p>
            </div>
        </div>
    );
}

export default ButtonConnexion;
