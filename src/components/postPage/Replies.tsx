import styled from "styled-components";
import { Column, Row } from "../elements/Wrapper";
import { BLACK_2, WHITE_2 } from "../../styles/theme";
import { Profile } from "../icons/Profile";
import { CommentArrow } from "../icons/CommentArrow";
import { LikeButton } from "./LikeButton";
import { IReply } from "../../interfaces/comments";
import moment from "moment";
import useMediaQuery from "../../hooks/useMediaQuery";
import { CommentArrowSmall } from "../icons/CommentArrowSmall";
// interface 관리

export function Replies(reply: IReply) {
  const curDate = reply.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss");
  const isPC = useMediaQuery("(min-width: 992px)");

  return (
    <>
      <Row>
        {isPC ? <CommentArrow /> : <CommentArrowSmall />}
        <Wrapper>
          <Profile />
          <TextContainer>
            <Column gap="4px">
              <UserId>{reply?.author?.nickname || `AhhyunKim`}</UserId>
              <Date>{date || `2022.11.30`}</Date>
            </Column>
            {reply?.body ||
              `헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견
          있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?`}
            <LikeButton likes={reply?.likeCount} />
          </TextContainer>
        </Wrapper>
      </Row>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${BLACK_2};
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* or 144% */

  letter-spacing: -0.32px;

  color: #ffffffb8;
`;

const UserId = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
`;

const Date = styled.div`
  color: ${WHITE_2};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
`;