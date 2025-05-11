import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";

const TermsAndConditionsPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions" />
        <link rel="icon" href="./img/logo.png" />
      </Head>

      {query?.nav === "1" && <Navbar />}

      <div
        className={`container relative flex flex-wrap items-center justify-between w-3/4 mx-auto lg:justify-between ${
          query?.nav !== "1" && "py-20"
        }`}
      >
        <article className="w-full">
          <h1 className="text-5xl mb-7">Terms and Conditions</h1>
          <span className="text-lg flex flex-col space-y-4">
            <p>Welcome to My App Solutions Solutions!</p>
            <p>
              These terms and conditions outline the rules and regulations for
              the use of My App Solutions's Website, located at
              https://myapp.solutions.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use My App Solutions if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Use License</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              Permission is granted to temporarily download one copy of the
              materials on My App Solutions's Website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license, you may
              not:
            </p>
            <ul className="list-disc list-inside ml-10">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <li>
                attempt to reverse engineer any software contained on HHH
                Technologies's Website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
            <p>
              This will let My App Solutions terminate upon violations of any of
              these restrictions. Upon termination, your viewing right will also
              be terminated and you should destroy any downloaded materials in
              your possession whether it is printed or electronic format. These
              Terms of Service have been created with the help of the Terms Of
              Service Generator.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Disclaimer</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              All the materials on My App Solutions Website are provided "as
              is". My App Solutions makes no warranties, may it be expressed or
              implied, therefore negates all other warranties. Furthermore, HHH
              Technologies does not make any representations concerning the
              accuracy or reliability of the use of the materials on its Website
              or otherwise relating to such materials or any sites linked to
              this Website.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Limitations</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              My App Solutions or its suppliers will not be hold accountable for
              any damages that will arise with the use or inability to use the
              materials on My App Solutions Website, even if My App Solutions or
              an authorize representative of this Website has been notified,
              orally or written, of the possibility of such damage. Some
              jurisdiction does not allow limitations on implied warranties or
              limitations of liability for incidental damages, these limitations
              may not apply to you.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Revisions and Errata</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              The materials appearing on My App Solutions Website may include
              technical, typographical, or photographic errors. My App Solutions
              will not promise that any of the materials in this Website are
              accurate, complete, or current. My App Solutions may change the
              materials contained on its Website at any time without notice. HHH
              Technologies does not make any commitment to update the materials.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Links</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              My App Solutions has not reviewed all of the sites linked to its
              Website and is not responsible for the contents of any such linked
              site. The presence of any link does not imply endorsement by HHH
              Technologies of the site. The use of any linked website is at the
              user’s own risk.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">
            Site Terms of Use Modifications
          </h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              My App Solutions may revise these Terms of Use for its Website at
              any time without prior notice. By using this Website, you are
              agreeing to be bound by the current version of these Terms and
              Conditions of Use.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Your Privacy</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              Please read our{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                style={{ borderBottom: "1px solid #fff" }}
              >
                Privacy Policy.
              </Link>
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Governing Law</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              Any claim related to My App Solutions's Website shall be governed
              by the laws of in without regards to its conflict of law
              provisions.
            </p>
          </span>
        </article>
      </div>

      {query?.nav === "1" && <Footer />}
    </>
  );
};

export default TermsAndConditionsPage;
