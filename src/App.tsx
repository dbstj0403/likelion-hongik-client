import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CommunityPage } from "./pages/CommunityPage";
import { LoginDetailPage } from "./pages/LoginPage/LoginDetailPage";
import { CompletePage } from "./pages/LoginPage/CompletePage";
import { InfoEditPage } from "./pages/MyPage/InfoEditPage";
import { PostPage } from "./pages/PostPage";
import { MainPage } from "./pages/MainPage";
import { RecruitPage } from "./pages/RecruitPage";
import { WritingPage } from "./pages/WritingPage";
import GlobalStyle from "./styles/GlobalStyle";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MyPage } from "./pages/MyPage/Mypage";
import { MyPostPage } from "./pages/MyPage/MyPostPage";
import { MyReplyPage } from "./pages/MyPage/MyReplyPage";
import { MyLikePage } from "./pages/MyPage/MyLikePage";
import RouteChangeTracker from "./RouteChangeTracker";
import Ing from "./components/loginPage/Ing";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
            <Route path="/ing" element={<Ing />} />
            {/**아래는 미사용 페이지
             * 각 페이지 내부 컴포넌트 주석 처리
             */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/detail" element={<LoginDetailPage />} />
            <Route path="/login/complete" element={<CompletePage />} />
            <Route path="/community/:categoryName" element={<CommunityPage />} />
            <Route path="/community/post/:id" element={<PostPage />} />
            <Route path="/community/post/edit/:id" element={<WritingPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/myPage/post" element={<MyPostPage />} />
            <Route path="/myPage/reply" element={<MyReplyPage />} />
            <Route path="/myPage/like" element={<MyLikePage />} />
            <Route path="/myPage/edit" element={<InfoEditPage />} />
            <Route path="/write/" element={<WritingPage />} />
            <Route path="/ing" element={<Ing />} />
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
