import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bill Huynh",
  initials: "BH",
  url: "https://dillion.io",
  location: "Milpitas, CA",
  locationLink: "https://www.google.com/maps/place/milpitas",
  description:
    "Full Stack Software Engineer. I love building things and have a passion for learning.",
  summary:
    "I build and ship full-stack applications. My most notable projects include TFTdle, a daily Teamfight Tactics guessing game with 100+ daily users, and Yaps, a gamified AI-powered learning platform. I have conducted NSF-funded research in wireless sensor networks (winning Best Paper at an IEEE conference), attended CalHacks, and deploy production systems using TypeScript, Next.js, React, Supabase, Docker, and AWS.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "AWS",
    "Docker",
    "Spring Boot",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "billhuynh012@gmail.com",
    tel: "8319981614",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/billhuynh1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/billdhuynh",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Texas A&M Univerity, Kingsville",
      badges: [],
      href: "https://www.tamuk.edu/",
      location: "Kingsville, TX",
      title: "Applied AI Researcher",
      logoUrl: "/tamuk.png",
      start: "May 2023",
      end: "August 2023",
      description: (
        <>
          Awarded <strong>Best Paper</strong> at{" "}
          <strong>IEEE PICOM 2025</strong> for research in wireless sensor
          network optimization. Improved network coverage efficiency by 40%
          through an optimized algorithm combining geometric and computational
          methods. Evaluated AI approaches including genetic algorithms, binary
          ant colony optimization, and MARL via extensive performance testing.
          Collaborated with faculty and peers on 1,000+ simulations and
          participated in a cross-functional team, delivering weekly code
          reviews and algorithm deep dives to refine methodologies.
        </>
      ),
    },
  ],
  education: [
    {
      school: "California State University, Sacramento",
      href: "https://www.csus.edu/",
      degree: "Bachelor's of Science in Computer Engineering",
      logoUrl: "/sacstate.svg",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Yaps",
      href: "/projects/yaps",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Transforms uploaded lectures/educational media into podcasts with flashcards, using spaced repetition for efficient learning. Gamified review keeps users engaged while reinforcing key concepts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "AWS",
        "OpenAI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/billhuynh1/Yaps",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "TFTdle",
      href: "/projects/tftdle",
      dates: "August 2024 - October 2024",
      active: true,
      description:
        "A daily Teamfight Tactics guessing game where users test their knowledge and track guesses. Features an automated pipeline that scrapes data for each patch and resets the backend daily, supporting 100+ daily active users.",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Python",
        "BeautifulSoup",
      ],
      links: [
        {
          type: "Website",
          href: "https://tft-dle.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/billhuynh1/TFTdle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title:
        "Senior Design Project: Portable Urban Air Filtration System (PUFS)",
      href: "/projects/pufs",
      dates: "November 2023 - April 2024",
      active: true,
      description:
        "Collaborated with a team of four to build an IoT portable air filtration system to for individuals living in urban areas with high pollution, monitoring and purifying indoor air quality in real-time using integrated sensors for CO2 levels and VOCs",
      technologies: ["Raspberry PI Zero", "Python", "GUIzero", "Jira"],
      links: [],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Calhacks 2023",
      dates: "October 2023",
      location: "San Francisco, CA",
      description:
        "Developed a mobile app that maps your past activities, provides one-tap mood tracking, and uses AI to answer questions about your experiences and habits.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
