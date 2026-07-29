import NavBarLogIn from "../components/NavBarLogIn.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ArticleSection from "../components/ArticleSection.jsx";
import Footer from "../components/Footer.jsx";

function LandingPage() {
  return (
    <section>
      <NavBarLogIn />
      <hr className="my-0 border-t border-gray-300" />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </section>
  );
}

export default LandingPage;
