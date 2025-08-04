export type Project = {
  name: string;
  date: string;
  description: string;
  source: string;
  live?: string;
  projectId: string;
  features: string[];
  techStack: string[];
};

export const projects: Project[] = [
  {
    name: "Furever",
    date: "July 2025",
    description:
      "Furever is comprehensive pet care web application with geo services and nlp assist, designed to simplify every aspect of pet care from creating and updating detailed pet profiles to tracking vaccination with email reminders. It integrates geolocation service to help pet owner find nearby veterinarians, book appointments and post for a lost and found pet or even for an adoption.",
    source: "https://github.com/binayakjoshi/furever",
    projectId: "furever",
    features: [
      "Mangae Pet Profiles with vaccinations",
      "Post for adoption and get notified vid email when a user shows an interest",
      "Stay Connected with the Pet forum community for users to interact",
      "Report Lost Pet and recieve alerts via email",
      "Secured with Google OAuth for easy sign-in",
      "Vaccination Reminders through email",
      "View nearby vet hospital with openstreetmap integration",
      "Get customer support via NLP Assistant",
      "Schedule Veterinary Appointments:",
    ],
    techStack: [
      "MongoDB Atlas & Mongoose ORM for Database",
      "Express.js with JWT authentication and oauth",
      "NextJS, tsc for frontend",
      "OpenStreetMap for Geo Services",
      "Diagflow from google for NLP assistant",
      "Next.js built-in router + React Hook Form for form validation",
    ],
    live: "https://furever-lemon.vercel.app",
  },
  {
    name: "Pop N'Buy",
    date: "September 2024",
    description:
      "Pop N'Buy is a full-featured e-commerce platform that connects vendors and customers in a seamless shopping experience. I did this project to test my new learnt NodeJS and React skills. Here vendors can register accounts, list products with images and detailed descriptions, and manage inventory levels in real time. Customers browse the catalog, add items to a cart, and complete purchases. ",
    source: "https://github.com/binayakjoshi/PopNBuy",
    live: "https://popnbuy.netlify.app/",
    projectId: "popnbuy",
    features: [
      "Role-based authentication: vendor and customer flows",
      "Product CRUD with image upload and validation",
      "Real-time inventory tracking and stock alerts",
      "Shopping cart management with session persistence",
      "Responsive UI with mobile-first design",
    ],
    techStack: [
      "MongoDB Atlas & Mongoose ORM for Database",
      "Express.js with JWT authentication",
      "React (Hooks, Context API) front-end",
      "Node.js for server-side logic",
      "Netlify deployment",
    ],
  },
  {
    name: "Audio Atlas",
    date: "January 2025",
    description:
      " This is a school project for my Machine Learning Class. Audio Atlas is a content-based music recommendation system that analyzes audio features of uploaded tracks and suggests similar songs from a curated dataset. Audio processing runs in a Flask microservice, extracting MFCCs, chroma, and spectral features using Librosa. The recommendation engine applies a K-Nearest Neighbors algorithm with caching of results. The React frontend provides drag-and-drop upload and displays enriched metadata fetched via the Spotify Web API.",
    source: "https://github.com/binayakjoshi/AudioAtlas",
    projectId: "audioatlas",
    features: [
      "Audio feature extraction: MFCC, chroma, spectral centroid, rolloff",
      "File upload handling with size validation and progress UI",
      "KNN-based similarity search with fast indexing",
      "Metadata enrichment via Spotify Web API",
      "Interactive React UI with drag-and-drop support",
    ],
    techStack: [
      "React & Typescript",
      "Node.js & Express for API gateway",
      "Flask microservice in Python 3.10",
      "Librosa & NumPy for audio analysis",
      "Scikit-learn KNN model",
      "Spotify Web API integration",
      "Material UI components",
    ],
  },
  {
    name: "Share Food",
    date: "May 2025",
    description:
      "Share Food is a learning demo application built with Next.js App Router following a Udemy course. It showcases Next.js’s file-system routing, Server & Client Components, and simple in-memory data handling. Use it to explore basic nextjs flow and nested layouts in the App Router.",
    source: "https://github.com/binayakjoshi/share-food",
    projectId: "share-food",
    features: [
      "Post and browse food and its recipes",
      "No external database required—data is held in memory or local mock files for demo purposes.",
      "Responsive design for mobile and desktop",
      "Demonstrates data fetching in Server Components and interactivity in Client Components.",
    ],
    techStack: ["React", "Typescript", "NextJS", "Node.js", "SQLite"],
  },
  {
    name: "Readly",
    date: "January 2024",
    description:
      "Readly is also a semester end project, a minimalist bookstore web app built on a Java backend with a Tomcat server and MariaDB database. Users register and log in to browse a catalog of books, add titles to a shopping cart, and finalize purchases. An admin dashboard enables inventory management, including stock levels and order history. The UI leverages Bootstrap for a clean, responsive design.",
    source: "https://github.com/binayakjoshi/readly",
    projectId: "readly",
    features: [
      "User registration/login with hashed passwords",
      "Book catalog with search, filter, and pagination",
      "Shopping cart and checkout workflow",
      "Admin panel for inventory and order management",
      "Order history and user profile pages",
      "Server-side form validation and error handling",
    ],
    techStack: [
      "Java 11 & Servlets (JSP, JSTL)",
      "Apache Tomcat 9",
      "Hibernate ORM & MariaDB",
      "Bootstrap 5 & CSS grid",
      "Servlet filters for security",
      "JUnit for unit testing",
    ],
  },
];
