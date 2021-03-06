import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import oim from "../assets/images/Andréas2.jpg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import { Github, LinkedIn } from "../assets/data/AllSvgs";
import PText from "./PText";
import Pdf from "../assets/data/ANDREASCV.pdf";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
    }
  }
  .ButtonDown {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
    p {
      color: white;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 70px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
        svg {
          fill: white;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const Line = styled.div`
  width: 2px;
  margin-left: 25px;
  height: 10rem;
  background-color: #ffffff;
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Salut, je m'appelle</span>
            <span className="hero__name">Andréas Ducourneau</span>
          </h1>
          <div className="hero__img">
            <img src={oim} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Etudiant ingénieur Informatique en cinquième année à CESI
              Bordeaux, je recherche un contrat de professionnalisation dans le
              domaine du développement.
            </PText>
            <a className="ButtonDown" href={Pdf}>
              Curriculum Vitae
            </a>
          </div>
          <div className="hero__social">
            <div className="hero__social__text">
              <ul>
                <li>
                  <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://github.com/Andreas-Ducourneau" }}
                  >
                    <Github width={35} height={35} />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{
                      pathname:
                        "https://www.linkedin.com/in/andr%C3%A9as-ducourneau-4b479219a/",
                    }}
                  >
                    <LinkedIn width={30} height={30} />
                  </NavLink>
                </li>
                <Line />
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
