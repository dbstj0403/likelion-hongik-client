import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FileUploader } from "../FileUploader";
import { nickState, majorState } from "../../../states/index";
import { NickEdit } from "./NickEdit";
import { MajorEdit } from "./MajorEdit";

export function BasicEdit() {
  const [nickname, setNickname] = useRecoilState(nickState);
  const [major, setMajor] = useRecoilState(majorState);

  const onSubmitNickname = (form: { nickname: string }) => {
    console.log(form);
    setNickname(form.nickname);
  };

  const onSubmitMajor = (form: { major: string }) => {
    console.log(form);
    setMajor(form.major);
  };

  return (
    <>
      <EditTitle>기본 정보 변경</EditTitle>
      <div style={{ display: "flex" }}>
        <FileUploader />
        <BasicInfo>
          <Major>{major}</Major>
          <Names>{nickname}</Names>
        </BasicInfo>
      </div>
      <NickEdit onSubmit={onSubmitNickname} />
      <MajorEdit onSubmit={onSubmitMajor} />
    </>
  );
}

const EditTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  margin-bottom: 40px;
`;

const BasicInfo = styled.div`
  margin-left: 20px;
  margin-top: 31px;
`;

const Major = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19.36px;
  color: #c8c8c8;
`;

const Names = styled.div`
  font-weight: 700;
  margin-top: 12px;
  font-size: 24px;
`;
