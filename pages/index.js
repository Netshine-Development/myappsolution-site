import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Head>
        <title>My App Solutions</title>
        <meta
          name="description"
          content="My App Solutions delivers custom software, mobile apps, and IT solutions to help businesses grow through innovation, performance, and digital transformation."
        />
        <link rel="icon" href="./img/logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="My App Solution"
        title="Solutions that My App Solution provides"
      >
        At My App Solutions, we offer a comprehensive range of IT services
        designed to meet the evolving needs of modern businesses. Our solutions
        include custom software development, mobile and web application design,
        cloud integration, UI/UX design, and enterprise IT consulting. We also
        specialize in API development, system automation, and digital product
        strategy to help you streamline operations, improve user engagement, and
        accelerate time to market. Whether you're building from scratch or
        optimizing existing systems, our team delivers scalable, secure, and
        results-driven solutions tailored to your goals.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
