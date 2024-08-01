import { Image } from "./image";

export const Data = {
  social_media: [
    {
      icon: "github",
      url: "https://github.com/auliaahc",
      label: "GitHub",
    },
    {
      icon: "linkedin",
      url: "https://linkedin.com/in/auliaheppycs",
      label: "LinkedIn",
    },
    {
      icon: "book",
      url: "https://drive.google.com/drive/folders/1_xKwkXM8QNRqPkIikxxXMVl2HXJ1VEPM",
      label: "Portfolio",
    },
  ],
  projects: [
    {
      title: "Recything",
      description: "Recything is a mobile application that enables users to report the condition of waste around them. It also features recycling missions where users can earn points and rewards based on their recycling activities.",
      image: Image.recything,
    },
    {
      title: "Coffee Spot",
      description: "Coffee Spot is an app designed to provide information about cafes in the city of Malang. It includes reviews, search functionality, and customer service options to help users find the perfect spot for their coffee cravings.",
      image: Image.coffee_spot,
    },
  ],
};