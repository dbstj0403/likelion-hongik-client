import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { CommentIcon } from "../icons/CommentIcon";
import { IPost } from "../../interfaces/post";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

export function PostItem(post: IPost) {
  const isMobile = useMediaQuery("( max-width: 390px )");
  const navigate = useNavigate();
  const curDate = post.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY.MM.DD");

  const onClickHandler = () => {
    navigate(`/post/${post.postId}`);
  };
  return (
    <Item onClick={onClickHandler}>
      <Left>
        <User>
          <img src={post.author.profileImage ? post.author.profileImage : ""} alt="user-profile" />
          <div>
            <UserName>{post.author.nickname}</UserName>
            <UploadDate>{date}</UploadDate>
          </div>
        </User>
        {post.thumbNailImage && isMobile && (
          <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
        )}
        <Content>
          <Title>{post.title}</Title>
          <p>{post.body}</p>
        </Content>
        <Bottom>
          <Icon>
            <HeartIcon />
            <span>{post.likeCount}</span>
          </Icon>
          <Icon>
            <CommentIcon />
            <span>{post.commentCount}</span>
          </Icon>
        </Bottom>
      </Left>
      {post.thumbNailImage && !isMobile && (
        <img src={post.thumbNailImage ? post.thumbNailImage : ""} alt="post-thumbnail" />
      )}
    </Item>
  );
}

const Item = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    border-radius: 12px;
  }
  @media (max-width: 390px) {
    display: block;
    img {
      width: 90px;
      height: 90px;
      margin-bottom: 20px;
    }
  }
  &:last-child {
    border: none;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
  @media (max-width: 390px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

const UploadDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  opacity: 0.98;
  @media (max-width: 390px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

const Content = styled.div`
  padding-left: 42px;
  width: 35.9896vw;
  margin-bottom: 20px;
  p {
    display: inline-block;
    white-space: nowrap;
    width: 691px;
    height: 46px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.32px;
    color: #ffffff;
    opacity: 0.98;
    margin: 0;
  }
  @media (max-width: 390px) {
    width: 100%;
    padding-left: 0;
    p {
      width: 100%;
      font-size: 12px;
      line-height: 20px;
      height: auto;
    }
  }
`;

const Title = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 691px;
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;
  color: #ffffff;
  opacity: 0.98;
  margin-bottom: 12px;
  @media (max-width: 390px) {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Bottom = styled.div`
  padding-left: 42px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  @media (max-width: 390px) {
    padding-left: 1.67px;
  }
`;

const Icon = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);
  img {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 390px) {
    img {
      width: 14px;
      height: 14px;
    }
  }
`;
