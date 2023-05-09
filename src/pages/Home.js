import Nav from "../components/Nav";
import o from "../images/O.png";
import logo from "../images/evolutive-signe-noir.png";
import underline from "../images/underline.png";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Nav />

      <div className="home">
        <header className="home-header">
          <h1>
            Tr
            <img src={o} alt="" />
            mbi <br />
            Selector
          </h1>

          <h2>
            <div className="title-container">
              <img src={logo} alt="wsh" />
              <p>
                Reconnait le plus de collaborateurs en <span>1 min !</span>
              </p>
            </div>
          </h2>
          <button className="primary-button" onClick={handleClick}>
            Play
          </button>
        </header>
        <div className="marquee">
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
          <p>play</p>
        </div>
      </div>
    </>
  );
};

export default Home;
