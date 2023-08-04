import "./App.scss";
import Social from "./Layout/Social";
import Footer from "./components/Footer/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import BGBottomDesktop from "./images/bg-pattern-bottom-desktop.svg";
import BGBottomMobile from "./images/bg-pattern-bottom-mobile.svg";
import BGTopDesktop from "./images/bg-pattern-top-desktop.svg";
import BGTopMobile from "./images/bg-pattern-top-mobile.svg";

function App() {
  const media = useMediaQuery("only screen and (max-width: 940px)");
  return (
    <>
      {media ? (
        <>
          <img
            src={BGTopMobile}
            alt="Background Top Mobile"
            className="bg-top"
          />
          <img
            src={BGBottomMobile}
            alt="Background Bottom Mobile"
            className="bg-bottom"
          />
        </>
      ) : (
        <>
          <img
            src={BGTopDesktop}
            alt="Background Top Desktop"
            className="bg-top"
          />
          <img
            src={BGBottomDesktop}
            alt="Background Bottom Desktop"
            className="bg-bottom"
          />
        </>
      )}
      <Social />
      <Footer />
    </>
  );
}

export default App;
