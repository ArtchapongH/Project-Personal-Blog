import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ArticleSection from "../components/ArticleSection.jsx";
import Footer from "../components/Footer.jsx";

import SearchResultBox from "@/components/SearchResultBox.jsx";
import SignUpPage from "../pages/SignUpPage.jsx"
import LogInPage from "./LogInPage.jsx";

function LandingPage() {
  return (
    <section>
      <NavBar />

      {/*
      <LogInPage />
      <SignUpPage />
      <SearchResultBox />
      */}
      
      <hr className="my-0 border-t border-gray-300" />
      <HeroSection />
      <ArticleSection />
      <Footer />
      
    </section>
  );
}

export default LandingPage;
