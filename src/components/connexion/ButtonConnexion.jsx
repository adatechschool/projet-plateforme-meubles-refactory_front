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

            <button className="connexion-button">Valider</button>

            <div className="already-account">
                <p>J'ai déjà un compte, <a className='link-connexion' href="#">connexion</a></p>
            </div>
        </div>
    );
}

export default ButtonConnexion;
