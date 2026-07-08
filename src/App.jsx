import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewPostPage from "./pages/ViewPostPage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "@/components/ui/sonner";
import LogInPage from "./pages/LogInPage";
import MemberProfile from "./components/MemberProfile";
import MemberPopUpMenu from "./components/MemberPopUpMenu";
import MemberPopUpNotification from "./components/MemberPopUpNotification";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AdminLogInPage from "./pages/AdminLogInPage";
import ArticleManagementPage from "./pages/ArticleManagementPage";
import ArticleCreatePage from "./components/ArticleCreatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post/:postId" element={<ViewPostPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/membership" element={<MemberProfile />} />
        <Route path="/membership/menu" element={<MemberPopUpMenu />} />
        <Route path="/membership/notification" element={<MemberPopUpNotification />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/admin/login" element={<AdminLogInPage />} />
        <Route path="/admin/article/mgt" element={<ArticleManagementPage />} />
        <Route path="/admin/article/create" element={<ArticleCreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="bottom-right" closeButton richColors />
    </BrowserRouter>
  );
}

export default App;
