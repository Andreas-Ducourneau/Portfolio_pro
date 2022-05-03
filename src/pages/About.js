import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import AboutImg from "../assets/images/Andréas4.jpg";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import Pdf from "../assets/data/ANDREASCV.pdf";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .ButtonDown {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Salut, je m'appelle <span>Andréas Ducourneau</span>
              </p>
              <h2 className="about__heading">Etudiant en dernière année de cycle d'Ingénieur</h2>
              <div className="about__info">
                <PText>
                  Actuellement en 4ème année au CESI de Bordeaux en spécialité informatique, 
                  je suis à la recherche d'un contrat de professionnalisation dans le domaine 
                  du management, mais également de la programmation d'application. 
                  <br /> <br />
                  A la suite de mes différents stages précisés dans mon curriculum vitae j'ai eu 
                  l'occasion de travailler en équipe la plupart du temps en méthodologie Agile pour 
                  permettre la confrontation des idées et aboutir ensemble à un consensus et donc à 
                  la résolution des problèmes proposés tout en bâtissant un solide socle de compétences 
                  en informatique et également en management.
                  <br /> <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a className="ButtonDown" href={Pdf} target= "_blank">Download CV</a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Expériences</h1>

              <AboutInfoItem
                title="Ingénieur Concepteur Développeur – Back-End"
                items={["Développement d’un nouveau module pour la réalisation des visites de postes techniques du patrimoine RTE "]}
              />
              <AboutInfoItem
                title="Chef de Projet Junior"
                items={["Conception et développement de l'application DeepDive qui présente des corrélations entre les facteurs environnementaux et les défauts sur les pales des éoliennes"]}
              />
              <AboutInfoItem
                title="Full Stack Développeur"
                items={["Développer de nouveaux outils pour l'analyse des sites de parcs éoliens et la visualisation des données"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Compétences</h1>

              <AboutInfoItem
                title="Programmation"
                items={["C#", "C", "Java", "C++", "Unreal Engine"]}
              />
              <AboutInfoItem
                title="Web"
                items={["HTML", "CSS", "PHP", "REACT", "ANGULAR"]}
              />
              <AboutInfoItem
                title="System / BDD"
                items={["Linux", "Windows", "MySQL", "PostgreSQL"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Formation</h1>

              <AboutInfoItem
                title="2020-2023"
                items={["Cycle Ingénieur spécialité informatique | Bac +5"]}
              />
              <AboutInfoItem
                title="2018-2020"
                items={[
                  " Cycle préparatoire en informatique - Pédagogie Active | Bac +2",
                ]}
              />
              <AboutInfoItem
                title="2018"
                items={["Lycée Jules Supervielle - Oloron St-Marie"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
