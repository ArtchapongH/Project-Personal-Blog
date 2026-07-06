import NavBar from "../components/NavBar.jsx";
import ViewContent from "../components/ViewContent.jsx";
import ViewFooter from "../components/ViewFooter.jsx";

function ViewPostPage() {
  return (
    <section>
      <NavBar />
      <hr className="my-0 border-t border-gray-300" />
      <ViewContent />
      <ViewFooter />
    </section>
  );
}

export default ViewPostPage;
