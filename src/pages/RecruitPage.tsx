import { Header } from "./../components/elements/Header";
import styled from "styled-components";
import { BLACK_1 } from "./../styles/theme";
import { WHITE_1 } from "./../styles/theme";
import { RecruitBackImg } from "./../components/icons/RecruitBackImg";
import { Footer } from "../components/elements/Footer";
import { RecruitInfo } from "../components/recruitPage/RecruitInfo";
import { Curriculum } from "../components/recruitPage/Curriculum";
import { Part } from "../components/recruitPage/Part";
import { Requirement } from "../components/recruitPage/Requirement";
import { QnA } from "../components/recruitPage/QnA";
import { Tip } from "../components/recruitPage/Tip";

export function RecruitPage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Wrapper style={{ height: "700px" }}>
          <RecruitBackImg />
        </Wrapper>
      </Wrapper>
      <RecruitInfo />
      <Wrapper style={{ height: "4225px" }}>
        <Curriculum />
        <Part />
        <Requirement />
        <QnA />
        <Tip />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background-color: ${BLACK_1};
  z-index: 1;
  color: ${WHITE_1};
`;
