import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import LandingFinal from "./pages/LandingFinal";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let Description = "";

    switch (pathname) {
      case "/":
        title = "";
        Description = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (Description) {
      const DescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (DescriptionTag) {
        DescriptionTag.content = Description;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingFinal />} />
    </Routes>
  );
}
export default App;
