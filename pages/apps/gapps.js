import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Benefits from "../../components/benefits";
import Image1 from "../../public/img/apps/gbox/1.jpg";
import Image2 from "../../public/img/apps/gbox/2.jpg";
import Image3 from "../../public/img/apps/gdrive/3.png";
import Image4 from "../../public/img/apps/gdrive/4.png";
import Logo from "../../public/img/apps/gbox/gbox-icon.png";
import Logo2 from "../../public/img/apps/gdrive/gdrive-icon.png";
import {
  EyeIcon,
  BellIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  DocumentPlusIcon,
  VideoCameraIcon,
  SwatchIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import SectionTitle from "../../components/sectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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

const benefitThree = {
  title: "Gbox: A Native Google Drive Experience Designed for Mac",
  image: Image3,
  imageClasses: "rounded-lg",
  imageWidth: 800,
  bullets: [
    {
      title: "Instant File Previews",
      desc: "Hover over the dock icon to see your recent files and folders without opening the app.",
      icon: <EyeIcon />,
    },
    {
      title: "Smart Sync Notifications",
      desc: "Get intelligent alerts about file sync status and sharing updates that matter to you.",
      icon: <BellIcon />,
    },
    {
      title: "Optimized for macOS",
      desc: "Built to feel native on macOS with smooth animations and Finder integration.",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "Privacy First",
      desc: "Your Google Drive data stays secure with end-to-end encryption and no third-party tracking.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

const benefitFour = {
  title: "Supercharge Your File Management with Gbox Tools",
  image: Image4,
  imageClasses: "rounded-lg",
  imageWidth: 800,
  bullets: [
    {
      title: "Seamless Multi-Account Access",
      desc: "Manage all your Google Drive accounts in one unified workspace—no switching tabs.",
      icon: <Squares2X2Icon />,
    },
    {
      title: "Quick Upload Widget",
      desc: "Upload files and folders from anywhere with a mini upload window on your desktop.",
      icon: <DocumentPlusIcon />,
    },
    {
      title: "Docs & Sheets Integration",
      desc: "Access Google Docs, Sheets, and Slides directly inside the app—no browser needed.",
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
  const [showButton, setShowButton] = useState(true);
  const googleDriveRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (googleDriveRef.current) {
        const rect = googleDriveRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8; // Hide when section is 80% into viewport

        if (isVisible) {
          setShowButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Google Apps</title>
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

      {/* Divider */}
      <div className="relative my-16">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-500 font-medium">
            ✨ Another Amazing App ✨
          </span>
        </div>
      </div>

      <div ref={googleDriveRef}>
        <SectionTitle
          pretitle={
            <Image
              width={60}
              height="auto"
              src={Logo2}
              alt="GDrive"
              className="object-cover"
            />
          }
          title="Google Drive"
        >
          Seamless Google Drive access, right on your Mac.
        </SectionTitle>

        <Benefits data={benefitThree} imgPos="right" />
        <Benefits data={benefitFour} />
      </div>

      {/* Floating Next App Button */}
      {showButton && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => {
              googleDriveRef.current?.scrollIntoView({
                behavior: 'smooth'
              });
              setShowButton(false);
            }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium"
          >
            <span>Next App</span>
            <ArrowDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default GboxPage;
