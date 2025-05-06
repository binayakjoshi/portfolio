export interface Project {
  name: string;
  date: string;
  description: string;
  source: string;
  live?: string;
  routeId: string;
}

export const projects: Project[] = [
  {
    name: "Pop N'Buy",
    date: "September 2024",
    description:
      "A website for vendors to add their products, and customers can view, add to cart, or buy them. The app uses the MERN stack to manage the entire workflow, from product creation to order placement.",
    source: "https://github.com/binayakjoshi/PopNBuy",
    live: "https://popnbuy.netlify.app/",
    routeId: "popnbuy",
  },
  {
    name: "Audio Atlas",
    date: "January 2025",
    description:
      "A content-based music recommendation system where users can upload an audio file, and the app suggests similar songs using ML-based feature extraction and KNN for recommendations. Built using the MERN stack, Flask, and Spotify API for metadata enrichment.",
    source: "https://github.com/binayakjoshi/AudioAtlas",
    routeId: "audioatlas",
  },
  {
    name: "Readly",
    date: "January 2024",
    description:
      "A simple bookstore application with minimalistic UI built using Java Servlets, Tomcat server, and MariaDB. Users can browse books, add them to their cart and place order.The app handles user authentication, inventory management.",
    source: "https://github.com/binayakjoshi/readly",
    routeId: "readly",
  },
];
