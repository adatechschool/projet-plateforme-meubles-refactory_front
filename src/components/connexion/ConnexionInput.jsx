import '../../styles/ConnexionInput.css'

function ConnexionInput({title, placeholder}){
    return (
        <div>
            <div>
                <p className="subtitle-identifiant">{title}</p>
                <input className="input-identifiant" placeholder={placeholder} />
                </div>
        </div>
    )
}

export default ConnexionInput