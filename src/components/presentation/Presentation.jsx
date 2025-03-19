import team from "./../../assets/team.jpg"

import './../../styles/Presentation.css'

function Presentation() {
    return (
      <div className="content">
        <h1>Qui sommes nous ?</h1>
        <h2 className="team-name">Refactory</h2>
        <div className="presentation-container">
          <img src={team} className="team-logo"></img>
          <div className="presentation-text">
            <p><strong>Refactory</strong> est une équipe dynamique de 8 développeurs passionnés, en pleine formation à <strong>Ada Tech School</strong>, une école innovante spécialisée dans le développement web et mobile. Notre équipe est constituée de talents divers, qui travaillent ensemble pour créer des sites web, des applications et des logiciels adaptés aux besoins des utilisateurs, tout en mettant l'accent sur la qualité du code et les meilleures pratiques de développement.</p> 
            <h3 className="h3-style">Ada Tech School : Une formation d'exception</h3>
            <p>Nous suivons une formation <strong>fullstack généraliste</strong> de 9 mois, suivie de 12 mois en alternance, à <strong>Ada Tech School</strong>, une école inclusive et Montessori dédiée à l'apprentissage du développement. Ada Tech School offre une approche personnalisée de l'apprentissage, qui place l'humain au cœur de la pédagogie. Grâce à cette méthode, chaque développeur progresse à son rythme, tout en étant soutenu par des formateurs et coachs professionnels. </p>
            <ul className="formation-list">La formation met un accent particulier sur des valeurs telles que :
              <li><strong>Clean code</strong> et bonnes pratiques de développement</li>
              <li><strong>Accessibilité</strong> et <strong>inclusivité</strong></li>
              <li><strong>Méthodes agiles</strong> et gestion de projet</li>
              <li><strong>Savoir-être</strong>, travail en équipe et communication non violente</li>
              <li><strong>Responsabilité environnementale</strong> et approche éco-friendly</li>
            </ul>
            <p>Cette pédagogie nous permet d'acquérir des compétences techniques solides tout en cultivant des valeurs humaines essentielles pour une collaboration réussie et une approche éthique du développement.</p>
            <h3 className="h3-style">Notre équipe</h3>
            <ul className="name-list">Chacun de nous apporte ses compétences uniques et sa passion pour le développement. Voici les membres de <strong>Refactory</strong> :
              <li>Team A : Stella, Giau, Ludovic, Gwenaëlle</li>
              <li>Team B : Marie, Ange, Majda, Lauriane</li>
            </ul>
            <p>Chaque membre de notre équipe travaille sur des projets variés, que ce soit pour la création de sites web intuitifs, d'applications mobiles ou de logiciels sur mesure. Grâce à nos différentes compétences et à notre engagement envers l'excellence, nous mettons tout en œuvre pour livrer des produits de qualité, tout en respectant les délais et en nous assurant de l’accessibilité et de la performance.
            Nous sommes constamment <strong>en apprentissage</strong>, prêts à relever de nouveaux défis et à collaborer avec des entreprises et organisations pour créer des <strong>solutions innovantes</strong> et adaptées aux besoins du marché.</p>
          </div>
        </div>
      </div>
    )
}

export default Presentation;