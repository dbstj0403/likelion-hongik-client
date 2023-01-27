import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BLACK_1, BLACK_2 } from "../../styles/theme";
import { Logo } from "../icons/Logo";
import { LogoMobile } from "../icons/LogoMobile";
import { Menu } from "../icons/Menu";
import { ProfileButton } from "./ProfileButton";
import { Column, Row } from "./Wrapper";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nowTagState } from "../../states/atoms";
import { useNavigate } from "react-router-dom";
import { userInfoState } from "../../states/user";
import useAutoLogin from "../../hooks/useAutoLogin";
import useMediaQuery from "../../hooks/useMediaQuery";
import { isLoggedInState } from "../../states";
import { MenuClose } from "../icons/MenuClose";

export function Header() {
  useAutoLogin();
  const isPC = useMediaQuery("(min-width: 992px)");
  const navigate = useNavigate();
  const setNowTag = useSetRecoilState<string>(nowTagState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isMenu, setMenu] = useState(false);

  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenu(!isMenu);
  };

  const onClickHeaderButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.name;
    if (page === "community/post") {
      setNowTag("notice");
    }
    navigate(`/${page}`);
  };

  useEffect(() => {
    const token = userInfo.accessToken;
    if (token) {
      navigate("/");
      localStorage.setItem("likelion-hongik-accessToken", token);
      setIsLoggedIn(true);
      // TODO 받은 token으로 유저 정보 GET API
      setUserInfo({ userId: 1, profileImageSrc: "", username: "장영준", accessToken: token });
    }
  });

  const NavPC = () => {
    return (
      <Wrapper>
        <Logo />
        <Row gap="60px" alignItems="center">
          <HeaderButton onClick={onClickHeaderButton} name="recruit">
            지원하기
          </HeaderButton>
          <HeaderButton onClick={onClickHeaderButton} name="community/post">
            커뮤니티
          </HeaderButton>
          <ProfileButton />
        </Row>
      </Wrapper>
    );
  };

  const NavMobile = () => {
    return (
      <>
        <MobileWrapper isMenu={isMenu}>
          <LogoMobile />
          <Row alignItems="center">
            {!isMenu && <ProfileButton />}
            <MenuButton onClick={onClickMenu}>{isMenu ? <MenuClose /> : <Menu />}</MenuButton>
          </Row>
        </MobileWrapper>
        {isMenu && (
          <ToggleWrapper>
            <HeaderMobileButton onClick={onClickHeaderButton} name="">
              홈
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="recruit">
              지원하기
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="community/post">
              커뮤니티
            </HeaderMobileButton>
            <HeaderMobileButton onClick={onClickHeaderButton} name="login">
              로그인
            </HeaderMobileButton>
          </ToggleWrapper>
        )}
      </>
    );
  };

  return <div>{isPC ? <NavPC /> : <NavMobile />}</div>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 340px;

  position: fixed;
  z-index: 1;
  background-color: ${BLACK_1};
`;

const HeaderButton = styled.button`
  font-size: 1.25rem;
  color: white;
`;

const MobileWrapper = styled.div<{ isMenu: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  background-color: ${(props) => (props.isMenu ? "#333333" : BLACK_1)};
  z-index: 2;
`;

const HeaderMobileButton = styled.button`
  font-size: 1.25rem;
  padding: 16px 0;
  color: white;
`;

const MenuButton = styled.button``;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  padding: 82px 20px 40px 20px;
  position: fixed;
  z-index: 1;
  background-color: #333333;
`;