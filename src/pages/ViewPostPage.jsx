import ViewComments from "@/components/ViewComments.jsx";
import NavBar from "../components/NavBar.jsx";
import ViewContent from "../components/ViewContent.jsx";
import ViewFooter from "../components/ViewFooter.jsx";

function ViewPostPage() {
  return (
    <section className="min-h-screen bg-white">
      <NavBar />
      <hr className="my-0 border-t border-gray-300" />
      <ViewContent />
      <ViewFooter />
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <ViewComments />
      </div>
    </section>
  );
}

export default ViewPostPage;
