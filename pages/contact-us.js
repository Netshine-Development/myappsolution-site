import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import Cta from "../components/cta";
import { useEffect } from "react";

const ContactUsPage = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.dialog === '1')
      location.href =
        "mailto:support@myapp.solutions?subject=Customer%20Support%20Request";
  }, [query]);

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="./img/logo.png" />
      </Head>

      <Navbar />

      <div className="container relative flex flex-wrap items-center justify-between w-3/4 mx-auto lg:justify-between">
        <Cta />
      </div>

      <Footer />
    </>
  );
};

export default ContactUsPage;
