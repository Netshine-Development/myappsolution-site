import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  AdjustmentsHorizontalIcon,
  CircleStackIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Custom Software Development",
  desc: "We design and develop custom software solutions tailored to your business needs—helping you automate processes, improve efficiency, and drive growth. From concept to deployment, our team ensures scalable, secure, and high-performance applications built to last.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Tailored Solutions",
      desc: "Built specifically for your workflows, processes, and goals.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Scalable Architecture",
      desc: "Designed to grow with your business and handle increased demand.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Full-Cycle Development",
      desc: "From planning and design to deployment and maintenance.",
      icon: <ChartBarSquareIcon/>,
    },
  ],
};

const benefitTwo = {
  title: "Mobile App Development",
  desc: "We create high-quality mobile applications for iOS and Android that deliver seamless user experiences and real business value. Whether you're launching a new product or extending your platform to mobile, we build apps that are fast, intuitive, and built to perform.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Cross-Platform Expertise",
      "desc": "Build once and deploy on both iOS and Android using modern frameworks.",
      icon: <CircleStackIcon />,
    },
    {
      title: "User-Centered Design",
      desc: "Intuitive interfaces that keep users engaged and coming back.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Performance & Security",
      desc: "Optimized for speed, scalability, and data protection.",
      icon: <FlagIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
