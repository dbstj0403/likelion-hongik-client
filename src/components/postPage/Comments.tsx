import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { IComment, IReply } from "../../interfaces/comments";
import { Input } from "./InputForm";
import { Row, Column } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { Replies } from "./Replies";
import { LikeButton } from "./LikeButton";
import { WHITE_1, WHITE_2 } from "../../styles/theme";
import useMediaQuery from "../../hooks/useMediaQuery";

export function Comments(props: IComment) {
  const isPC = useMediaQuery("(min-width: 992px)");
  const [isShowReplyInput, setShowReplyInput] = useState(false);
  const onClickReplyButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowReplyInput(!isShowReplyInput);
  };
  const curDate = props.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm");

  return (
    <>
      {isPC ? (
        <Column gap="32px">
          <Row gap="16px">
            <Profile />
            <Column gap="32px">
              <Column gap="4px">
                <UserId fontSize={16}>{props.author?.nickname || `AhhyunKim`}</UserId>
                <Date fontSize={14}>{date || `2022.11.30`}</Date>
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
                return <Replies key={idx} {...reply} />;
              })
            : null}
          {isShowReplyInput && <Input pid={props.commentId} username={props.author?.nickname}></Input>}
          <Hairline />
        </Column>
      ) : (
        <Column gap="20px">
          <Row gap="12px">
            <Profile />
            <Column>
              <UserId fontSize={14}>{props.author?.nickname || `AhhyunKim`}</UserId>
              <Date fontSize={12}>{date || `2022.11.30`}</Date>
            </Column>
          </Row>
          <Column gap="20px">
            {props?.body ||
              `헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?`}
            <Row gap="12px">
              <LikeButton likes={props.likeCount} />
              <ReplyButton className="replyOption" onClick={onClickReplyButton}>
                댓글 달기
              </ReplyButton>
            </Row>
          </Column>
          {props.replies
            ? props.replies.map((reply: IReply, idx: number) => {
                return <Replies key={idx} {...reply} />;
              })
            : null}
          {isShowReplyInput && <Input pid={props.commentId} username={props.author?.nickname}></Input>}
          <Hairline />
        </Column>
      )}
    </>
  );
}

const UserId = styled.div<{ fontSize: number }>`
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  line-height: 19px;
  letter-spacing: -0.32px;
`;

const Date = styled.div<{ fontSize: number }>`
  color: ${WHITE_2};
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
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