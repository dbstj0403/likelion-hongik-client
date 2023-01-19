import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { IReply, Replies } from "./Replies";
import { LikeButton } from "./LikeButton";
import React, { useState } from "react";
import { Input } from "./InputFrom";
import { IComment } from "./CommentsList";
import moment from "moment";
import { WHITE_1, WHITE_2 } from "../../styles/theme";

// interface 관리
/** 댓글 좋아요 기능
 * Like 테이블 안에, Comment에 좋아요를 누른 user_id가 추가된다.
 * 배열로 받아와 해당 배열의 원소 갯수를 세면 그게 좋아요 개수
 */

export function Comments(props: IComment) {
  const [isShowReplyInput, setShowReplyInput] = useState(false);
  const onClickReplyButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowReplyInput(!isShowReplyInput);
    e.preventDefault();
  };
  const curDate = props.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm");

  return (
    <>
      <Column gap="32px">
        <Row gap="16px">
          <Profile />
          <Column gap="32px">
            <Column gap="4px">
              <UserId>{props.author?.nickname || `AhhyunKim`}</UserId>
              <Date>{date || `2022.11.30`}</Date>
            </Column>
            {props?.body ||
              `헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?`}
            <Row gap="12px">
              <LikeButton likes={props.likeCount} />
              <ReplyButton className="replyOption" onClick={onClickReplyButton}>
                댓글 달기
              </ReplyButton>
            </Row>
          </Column>
        </Row>
        {props.replies
          ? props.replies.map((reply: IReply, idx: number) => {
              console.log(reply);
              return <Replies key={idx} {...reply} />;
            })
          : null}
        {isShowReplyInput && <Input pid={props.id} username={props.author?.nickname}></Input>}
        <Hairline />
      </Column>
    </>
  );
}

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

const ReplyButton = styled.button`
  height: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${WHITE_1};
`;

const Hairline = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
