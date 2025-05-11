import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Benefits from "../../components/benefits";
import Image1 from "../../public/img/apps/gbox/1.jpg";
import Image2 from "../../public/img/apps/gbox/2.jpg";
import Logo from "../../public/img/apps/gbox/gbox-icon.png";
import {
  EyeIcon,
  BellIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  DocumentPlusIcon,
  VideoCameraIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import SectionTitle from "../../components/sectionTitle";
import Image from "next/image";

const benefitOne = {
  title: "Gbox: A Native Gmail Experience Designed for Mac",
  image: Image1,
  imageClasses: "rounded-lg",
  imageWidth: 800,
  bullets: [
    {
      title: "Instant Inbox Previews",
      desc: "Hover over the dock icon to see your latest unread emails without opening the app.",
      icon: <EyeIcon />,
    },
    {
      title: "Smart Alerts",
      desc: "Get intelligent, non-intrusive notifications that adapt to your workflow.",
      icon: <BellIcon />,
    },
    {
      title: "Optimized for macOS",
      desc: "Built to feel native on macOS with smooth animations and keyboard shortcuts.",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "Privacy First",
      desc: "Your Gmail data stays secure with end-to-end encryption and no third-party tracking.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Supercharge Your Inbox with Gbox Tools",
  image: Image2,
  imageClasses: "rounded-lg",
  imageWidth: 800,
  bullets: [
    {
      title: "Seamless Multi-Account Access",
      desc: "Manage all your Gmail accounts in one unified workspace—no switching tabs.",
      icon: <Squares2X2Icon />,
    },
    {
      title: "Quick Compose Widget",
      desc: "Start drafting emails from anywhere with a mini compose window on your desktop.",
      icon: <DocumentPlusIcon />,
    },
    {
      title: "Chat & Meet Integration",
      desc: "Access Google Chat and Meet directly inside the app—no browser needed.",
      icon: <VideoCameraIcon />,
    },
    {
      title: "Theme Switcher",
      desc: "Choose your look with instant toggles for light, dark, or system themes.",
      icon: <SwatchIcon />,
    },
  ],
};

const GboxPage = () => {
  return (
    <>
      <Head>
        <title>Gbox for Mails</title>
        <meta name="description" content="Gbox for Mails" />
        <link rel="icon" href=".././img/logo.png" />
      </Head>

      <Navbar />

      <SectionTitle
        pretitle={
          <Image
            width={60}
            height="auto"
            src={Logo}
            alt="Gbox"
            className="object-cover"
          />
        }
        title="Gbox for Mails"
      >
        Seamless Gmail access, right on your Mac.
      </SectionTitle>

      <Benefits data={benefitOne} imgPos="right" />
      <Benefits data={benefitTwo} />

      <Footer />
    </>
  );
};

export default GboxPage;
