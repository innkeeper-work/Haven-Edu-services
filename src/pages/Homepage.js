//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
// import { OurPartners } from "../components/OurPartners";
import { CardOneBg } from "../components/styles/stylcomponents";
import { CardOneText } from "../components/styles/stylcomponents";
import { SectionTwoCardBg } from "../components/styles/stylcomponents";
import { Container } from "../components/styles/stylcomponents";
import { SummerCamp } from "../components/styles/stylcomponents";
// import { GamesSectionButton } from "../components/styles/stylcomponents";
import { StatSection } from "../components/styles/stylcomponents";
import { Testimonials } from "../components/Cards";
import { Blog } from "../components/Cards";
// import { SectionTwoRowBg } from "../components/styles/stylcomponents";
import Footer from "../components/Footer";

// Images
import robotics from "../images/robotics.jpg";
import language from "../images/language.jpg";
import coding from "../images/coding.jpg";
import games from "../images/games.png";

const Home = () => {
  return (
    <>
      <NavbarSection />
      {/* <OurPartners /> */}
      <HeroSection />
      <HomeSectionOne />

      <RequestforBooking />
      {/* <PlayGames /> */}
      <SummerCampSection />
      <Statistics />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

const HomeSectionOne = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <CardOneBg className="card mb-5">
            <img src={robotics} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Robotics</h5>
            </div>
          </CardOneBg>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <CardOneBg className="card mb-5">
            <img src={language} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Language</h5>
            </div>
          </CardOneBg>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <CardOneBg className="card mb-5">
            <img src={coding} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Coding</h5>
            </div>
          </CardOneBg>
        </div>
      </div>
    </div>
  );
};

const RequestforBooking = () => {
  return (
    <SectionTwoCardBg className="text-center my-2">
      <div className="card-body d-flex justify-content-center">
        <Container className="bg-light rounded d-flex justify-content-center py-2">
          <p className="card-text mx-3 my-auto">Request for Booking</p>
          <a
            href="#"
            className="btn mx-3"
            style={{ backgroundColor: "#724598", color: "#ffffff" }}
          >
            Call to Action
          </a>
        </Container>
      </div>
    </SectionTwoCardBg>
  );
};

// const PlayGames = () => {
//   return (
//     <div class="card mb-3">
//       <img src={games} class="card-img-top" alt="..." />
//       <GamesSectionButton className="carousel-caption">
//         <a href="#" className="btn btn-dark">
//           Go somewhere
//         </a>
//       </GamesSectionButton>
//     </div>
//   );
// };

const SummerCampSection = () => {
  return (
    <SummerCamp className="my-5 pt-4">
      <div className="card-body col-lg-6 ms-lg-5">
        <h5 className="card-title">Summer Camp</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content. Some quick example text to build on the card title and
          make up the bulk of the card's content. Some quick example text to
          build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href="#"
          class="btn"
          style={{ backgroundColor: "#724598", color: "#ffffff" }}
        >
          Call to Action
        </a>
      </div>

      {/* <div className="card mb-5">
        <img src={robotics} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <a href="#" class="d-flex justify-content-end">
            Read More
          </a>
        </div>
      </div> */}
    </SummerCamp>
  );
};

const Statistics = () => {
  return (
    <StatSection className="card-group pt-3">
      <div className="col">
        <div className="card-body text-center">
          <h5 className="card-title ">12</h5>
          <p className="card-text">Partner Schools</p>
        </div>
      </div>
      <div className="col">
        <div className="card-body text-center">
          <h5 className="card-title">3</h5>
          <p className="card-text">Languages Taught</p>
        </div>
      </div>
      <div className="col">
        <div className="card-body text-center">
          <h5 className="card-title">5</h5>
          <p className="card-text">Summer Camps</p>
        </div>
      </div>
    </StatSection>
  );
};

export default Home;
