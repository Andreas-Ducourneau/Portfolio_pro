import React from "react";
import {
  MdHowToReg,
  MdOutlineChangeCircle,
  MdOutlineRule,
} from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Ce qui résume mes" heading="Soft Skills" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdHowToReg />}
            title="Rigueur"
            desc="Je tiens toujours à m'engager avec beaucoup de rigueur dans tous mes projets. "
          />
          <ServicesSectionItem
            icon={<MdOutlineRule />}
            title="Pragmatisme"
            desc="Lors de mes différentes tâches je m'organise toujours avec pragmatisme. "
          />
          <ServicesSectionItem
            icon={<MdOutlineChangeCircle />}
            title="Changement"
            desc="Lorsqu'un j'interviens dans un projet je me tiens prêt aux changements et à mon adaptabilité. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
