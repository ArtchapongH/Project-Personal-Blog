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
import ViewComments from "./components/ViewComments";
import CategoryManagementPage from "./pages/CategoryManagementPage";
import CategoryCreatePage from "./pages/CategoryCreatePage";
import ProfilePage from "./pages/ProfilePage";
import NotificationPage from "./pages/NotificationPage";
import AdminResetPasswordPage from "./pages/AdminResetPasswordPage";
import NavBarLogIn from "./components/NavBarLogIn";
import MemberPopUpMenuNoti from "./components/MemberPopUpMenuNoti";

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
        <Route path="/membership/menu/noti" element={<MemberPopUpMenuNoti />} />
        
        
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/admin/login" element={<AdminLogInPage />} />
        <Route path="/admin/article/mgt" element={<ArticleManagementPage />} />
        <Route path="/admin/article/create" element={<ArticleCreatePage />} />

        <Route path="/admin/category/mgt" element={<CategoryManagementPage />} />
        <Route path="/admin/category/create" element={<CategoryCreatePage />} />

        <Route path="/admin/profile" element={<ProfilePage />} />
        <Route path="/admin/notification" element={<NotificationPage />} />
        <Route path="/admin/reset" element={<AdminResetPasswordPage />} />

        <Route path="/navbar/login" element={<NavBarLogIn />} />
        <Route path="/comment" element={<ViewComments />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="bottom-right" closeButton richColors />
    </BrowserRouter>
  );
}

export default App;
