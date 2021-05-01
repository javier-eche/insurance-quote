
import Header from "../UI/Header";
import Hero from "../UI/Hero";

function Home(): JSX.Element{

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="home-content-hero">
          <Hero />
        </div>
        <div className="home-content-form"></div>
      </div>
    </div>
  );
  
}

export default Home;