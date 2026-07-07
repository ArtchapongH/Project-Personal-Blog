import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewPostPage from "./pages/ViewPostPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post/:postId" element={<ViewPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="bottom-right" closeButton richColors />
    </BrowserRouter>
  );
}

export default App;
