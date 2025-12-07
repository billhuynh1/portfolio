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
    "I love building products end-to-end from idea to deployment. I created TFTdle, a daily Tactician-guessing game played by 100+ users, and Yaps, an AI-powered study platform. I’ve also worked on NSF-funded wireless sensor research, where I won Best Paper at IEEE PICOM.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "Python",
    "Postgres",
    "AWS (EC2, Lambda, S3, API Gateway, CloudFront)",
    "Docker",
    "Spring Boot",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "mailto:billhuynh012@gmail.com",
        icon: Icons.email,

        navbar: true,
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
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Awarded <strong>Best Paper</strong> at{" "}
            <strong>IEEE PICOM 2025</strong> for research in wireless sensor
            network optimization.
          </li>
          <li>
            Improved network coverage efficiency by 40% through an optimized
            algorithm combining geometric and computational methods.
          </li>
          <li>
            Evaluated AI approaches including genetic algorithms, binary ant
            colony optimization, and MARL through extensive performance testing.
          </li>
          <li>
            Collaborated with faculty and peers on 1,000+ simulations and
            participated in a cross-functional research team, contributing
            weekly code reviews and algorithm deep dives.
          </li>
        </ul>
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
      featured: true,
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
      video: "/portfolio_demos/yaps_upload_demo.mp4",
      // Detail page fields
      tagline:
        "Transforms uploaded lectures/educational media into podcasts with flashcards, using spaced repetition for efficient learning. Gamified review keeps users engaged while reinforcing key concepts.",
      demoUrl: "",
      githubUrl: "https://github.com/billhuynh1/Yaps",
      problem:
        "Students spend hours rewatching long lectures to study with only a small portion of the content actually matters. Traditional note-taking is slow, transcripts are hard to digest, and reviewing entire videos for one concept becomes frustrating. I wanted to solve that by turning dense lectures into something fast, memorable, and easy to revisit, like a podcast.\n\n Instead of generating generic flashcards, Yaps embeds both the transcript chapters and flashcard text into vector space and ranks similarity between them, allowing students to review cards that directly relate to the part of the lecture they're hearing.",
      features: [
        "Upload Zoom transcripts, MP4, or MP3 files",
        "Automatic audio/video compression for faster processing",
        "Built-in transcription when a transcript is not provided",
        "AI-generated summaries for quick lecture review",
        "Flashcard creation for spaced-repetition studying",
        "AI-personalized flashcards matched to chapters using semantic embeddings",
        "Text-to-speech conversion to create listenable podcast-style summaries",
        "Dashboard to revisit past uploads, summaries, and generated flashcards",
        "File hashing to prevent duplicate uploads and redundant processing",
        "Gamified learning with XP, ranks, and progress tracking to motivate engagement",
      ],
      screenshots: [
        {
          url: "/portfolio_demos/yaps_upload_demo.mp4",
          caption:
            "Upload a lecture and Yaps automatically converts it into a clean podcast with chapter-aligned flashcards and AI summaries.",
          type: "video",
        },
        {
          url: "/portfolio_demos/yaps_demo.mp4",
          caption:
            "Listen with TTS audio, lyric syncing, and seek by clicking on segments!",
          type: "video",
        },
        {
          url: "/portfolio_demos/yaps_review_demo.mp4",
          caption: "Review flashcards from the chapter you just listened to!",
          type: "video",
        },
      ],
      technical:
        "Built with Next.js, Supabase, and Drizzle ORM. Implemented an end-to-end processing pipeline using ffmpeg for media compression, Whisper for transcription, and GPT for summarization + flashcard creation. Generates embeddings to map chapters to flashcards using cosine similarity. Storage + CDN optimization for hosting long video/audio. Designed for mobile-first UI with responsive layout.",
      learnings:
        "This project taught me the importance of cost optimization when working with AI APIs. My initial implementation sent every file directly to OpenAI for transcription, which became expensive quickly. Adding compression and deduplication reduced API costs by 45%.\n\nI learned how to work with vector embeddings and cosine similarity search, understanding that semantic matching requires careful prompt engineering and threshold tuning. Initially, my flashcard-to-chapter mapping was too strict, missing relevant connections. Adjusting the similarity threshold and experimenting with different embedding models significantly improved accuracy.\n\nIf I were to rebuild this, I'd implement a queue system for processing uploads from day one instead of handling everything synchronously. I'd also add more granular error handling for failed transcriptions and implement retry logic with exponential backoff. Additionally, I'd explore using local whisper models for transcription to reduce dependency on external APIs and lower costs further.",
      results:
        "Yaps turns full lectures into something a student can learn from in minutes, not hours. Chapters, flashcards, summaries, and TTS audio are generated automatically, so studying feels focused instead of overwhelming. Seeing a raw upload transform into a structured podcast with flashcards matched to each chapter is the moment everything comes together, and that's the experience I built for.",
    },
    {
      title: "TFTdle",
      href: "/projects/tftdle",
      dates: "August 2024 - October 2024",
      featured: true,
      active: true,
      description:
        "A daily Teamfight Tactics guessing game where users test their knowledge and track guesses. Features an automated pipeline that scrapes data for each patch and resets the backend daily, supporting 100+ daily active users.",
      technologies: [
        "React",
        "Typescript",
        "Java",
        "Spring Boot",
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
      video: "/portfolio_demos/tftdle_classic_demo.mp4",

      // Detail page fields
      tagline:
        "A daily Teamfight Tactics guessing game where users test their knowledge and track guesses. Features an automated pipeline that scrapes data for each patch and resets the backend daily, supporting 100+ daily active users.",
      demoUrl: "https://tft-dle.com",
      githubUrl: "https://github.com/billhuynh1/TFTdle",
      problem:
        "Teamfight Tactics players love testing their knowledge, but most stat and comp tools only show data, they don’t make it fun. There wasn’t a fun way to challenge TFT knowledge daily, track guesses, or compete with friends. I wanted to build an engaging interactive experience for gamers, not just another wiki site.",
      features: [
        "Daily rotating characters puzzle with guessing feedback",
        "Guesses track traits, origins, costs, items, and set appearances",
        "Classic Mode: Guess the daily champion",
        "Real-time feedback on guesses with visual indicators",
        "Finisher Mode: Guess the Chibi's finisher",
        "Little Legend Mode: Guess the splash art of the little legend",
        "Trait Mode: Guess the trait based on the description",
        "Follow up questions on three of the modes",
        "Automatic data scraping every patch using Python & BeautifulSoup",
        "Backend reset scheduler that rolls over the daily champion",
        "Session storage so players can return and see past guesses",
        "Dockerized backend + AWS deployment for scalability",
      ],
      screenshots: [
        {
          url: "/portfolio_demos/tftdle_classic_demo.mp4",
          caption: "Classic mode",
          type: "video",
        },
        {
          url: "/portfolio_demos/tftdle_finisher_demo.mp4",
          caption: "Finisher mode",
          type: "video",
        },
        {
          url: "/portfolio_demos/tft_littlelegend_demo.mp4",
          caption: "Little Legend mode",
          type: "video",
        },
        {
          url: "https://pub-9bf0a7287bec472591e68aaa2f5b0779.r2.dev/portfolio_demos/tftdle_traits_demo.mp4",
          caption: "Trait mode",
          type: "video",
        },
        {
          url: "https://pub-9bf0a7287bec472591e68aaa2f5b0779.r2.dev/portfolio_demos/tftdle_misc_demo.mp4",
          caption: "Misc: Patch notes, how to play, etc.",
          type: "video",
        },
      ],
      technical:
        "TFTdle uses a React + TypeScript frontend and a Spring Boot backend backed by PostgreSQL. The game data is scraped automatically each patch using Python + BeautifulSoup, then processed and stored. A scheduled backend job rotates the champion daily and clears previous guesses. The service is containerized with Docker and deployed on AWS, handling 100+ daily players.",
      learnings:
        "I learned how to architect a game system that updates itself without manual involvement. Working with daily resets, scraping, and persistence taught me the value of reliability in backend systems. I also gained experience designing UI that feels simple even when the logic behind guess evaluation is complex.",
      results:
        "Successfully launched and maintained a production application serving 100+ daily users. Built an automated data pipeline that has handled multiple TFT patch updates without manual intervention, demonstrating the reliability of the scraping and reset system.\n\nThe project runs continuously on AWS with minimal maintenance required, validating the architecture decisions around automation and deployment. Positive reception in the TFT community with users regularly sharing their daily scores and requesting new features.\n\nGained practical experience managing a live application with real users, including handling bug reports, monitoring performance, and deploying updates without downtime.",
    },
    {
      title:
        "Senior Design Project: Portable Urban Air Filtration System (PUFS)",
      href: "",
      dates: "November 2023 - April 2024",
      featured: false,
      active: true,
      description: "...",
      technologies: ["Raspberry PI Zero", "Python", "GUIzero", "Jira"],
      links: [],
      image: "/sacstate.svg",
      video: "",
      tagline: "",
      demoUrl: "",
      githubUrl: "",
      problem: "",
      features: [],
      screenshots: [],
      technical: "",
      learnings: "",
      results: "",
    },
    {
      title: "Olympic Medal Prediction using Machine Learning",
      href: "",
      dates: "July 2022 - August 2022",
      featured: false,
      active: true,
      description:
        "Built a machine learning model to predict the number of medals countries will win in the next Olympics. Cleaned and preprocessed historical Olympic data, engineered relevant features, and trained regression models to forecast medal counts based on factors like GDP, population, and past performance.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      links: [],
      image: "/machinelearning.png",
      video: "",
      tagline: "",
      demoUrl: "",
      githubUrl: "",
      problem: "",
      features: [],
      screenshots: [],
      technical: "",
      learnings: "",
      results: "",
    },
  ],
  hackathons: [
    {
      title: "Calhacks 2023",
      dates: "October 2023",
      location: "San Francisco, CA",
      description:
        "Developed a mobile app that maps your past activities, provides one-tap mood tracking, and uses AI to answer questions about your experiences and habits.",
      image: "/calhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
