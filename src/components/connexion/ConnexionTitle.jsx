import '../../styles/ConnexionTitle.css'


function ConnectionTitle(){
    return (
        <div className="title-container">
            <h2 className="connexion-title">bonjour, bienvenue sur <span className='titre'>Möbel</span></h2>
            <p  className="border-bottom-h2"></p>
            <p className="paragraph-text">Connectez-vous ou créez un compte afin de  bénéficier de nos offres exclusives.</p>
        </div>
    );
}

export default ConnectionTitle