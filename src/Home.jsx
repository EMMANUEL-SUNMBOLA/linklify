import Illustration from "./Illustration";
import Button from "./Button";
import Section from "./Sections";

function Home() {
  return (
    <>
      <main>
        <div className="container-main">
          <h1 className="branding">
            <span>Link</span>-Lify
          </h1>

          <div className="about ">
            <p>Everything about you all in one place</p>
            <p>
              Share your portfolio, socials, projects, and more — all with one
              simple link.
            </p>
            <p>
              Whether you're a creator, freelancer, or brand, Link-Lify puts
              your digital world in one beautiful space.
            </p>
          </div>

          <div className="form">
            <input type="text" placeholder="linklify/username" className="" />
            <Button text="Get yours" />
          </div>
        </div>

        <Illustration text="images/connected-connect-svgrepo-com.svg" />
      </main>

      <Section
        heading={"Create and Customize your Linklify page in minutes"}
        image={"images/genetic-algorithm-svgrepo-com.svg"}
        descr={
          "Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert."
        }
        btn={"Get Started"}
        headColor="boldpurple"
        sectionBg="lightpurple"
        pColor="boldpurple"
        btnBg="boldpurple"
      />
      <Section
        heading={
          "Share your Linktree from your Instagram, TikTok, Twitter and other bios"
        }
        image={"images/qr-code-svgrepo-com.svg"}
        descr={
          "Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online."
        }
        btn={"Get Started"}
        headColor=""
        sectionBg="redwine"
        btnBg="lightpurple"
      />
    </>
  );
}

export default Home;
