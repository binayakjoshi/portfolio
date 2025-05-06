export interface Project {
  name: string;
  date: string;
  description: string;
  source: string;
  live?: string;
  projectId: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
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
      "React (Hooks, Context API) & Tailwind CSS for front-end",
      "Node.js for server-side logic",
      "Netlify deployment & CI/CD",
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
      "Caching layer in MongoDB for repeated queries",
      "Metadata enrichment via Spotify Web API",
      "Interactive React UI with drag-and-drop support",
    ],
    techStack: [
      "React & React Router",
      "Node.js & Express for API gateway",
      "Flask microservice in Python 3.10",
      "Librosa & NumPy for audio analysis",
      "Scikit-learn KNN model",
      "MongoDB Atlas for caching",
      "Spotify Web API integration",
      "Material UI components",
    ],
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
