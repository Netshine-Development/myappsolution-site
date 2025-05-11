import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";

const PrivacyPolicyPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="./img/logo.png" />
      </Head>

      {query?.nav === "1" && <Navbar />}

      <div
        className={`container relative flex flex-wrap items-center justify-between w-3/4 mx-auto lg:justify-between ${
          query?.nav !== "1" && "py-10"
        }`}
      >
        <article className="w-full">
          <h1 className="text-5xl mb-7">Privacy Policy</h1>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              https://myapp.solutions is owned by My App Solutions
            </p>
            <p>
              We have adopted this Privacy Policy, which determines how we are
              processing the information collected by My App Solutions, and also
              provides the reasons why we must collect certain personal data
              about you. Therefore, you must read this Privacy Policy before
              using My App Solutions website/products.
            </p>
            <p>
              We take care of your personal data and undertake to guarantee its
              confidentiality and security. If you have additional questions or
              require more information about our Privacy Policy, do not hesitate
              to contact us.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Consent</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Information we collect</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">How we use your information</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc list-inside ml-10">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Log Files</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              My App Solutions follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and are a part of hosting services' analytics. The
              information collected by log files includes internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analysing
              trends, administer the site, track user's movement on the website,
              and gather demographic information.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">
            Google DoubleClick DART Cookie
          </h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              Google is one of the third-party vendors on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to www.website.com and other sites on the
              internet. However, visitors may choose to decline the use of DART
              cookies by visiting the Google ad and content network Privacy
              Policy at the following URL –
              <Link
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                style={{ borderBottom: "1px solid #fff" }}
              >
                https://policies.google.com/technologies/ads
              </Link>
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">
            Advertising Partners Privacy Policies
          </h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of My App Solutions.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on My App Solutions, which
              are sent directly to users' browser. They automatically receive
              your IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>
            <p>
              Note that My App Solutions has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Third-Party Privacy Policies</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              My App Solutions Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">GDPR Data Protection Rights</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Children's Information</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              My App Solutions does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">
            Changes to This Privacy Policy
          </h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately after they
              are posted on this page.
            </p>
          </span>
        </article>

        <article className="w-full">
          <h2 className="text-3xl mb-2 mt-12">Contact information</h2>
          <span className="text-lg flex flex-col space-y-4">
            <p>
              If you would like to contact us to understand more about this
              Policy or wish to contact us concerning any matter relating to
              individual rights and your Personal Information, you may send an
              email to support@myapp.solutions.
            </p>
          </span>
        </article>
      </div>

      {query?.nav === "1" && <Footer />}
    </>
  );
};

export default PrivacyPolicyPage;
