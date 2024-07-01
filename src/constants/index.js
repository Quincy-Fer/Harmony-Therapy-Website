import {
  therapyChild,
  therapyCouples,
  therapyFamily,
  therapyGroup,
  therapyIndividual,
} from "../assets/images";

import { checkmark, quotes } from "../assets/icons";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#about", key: "about", label: "About Us" },
  { href: "#therapies", key: "therapies", label: "Therapies" },
  { href: "#testimonial", key: "testimonial", label: "Clients" },
  { href: "#team", key: "team", label: "Our Team" },
  { href: "#contact", key: "contact", label: "Contact" },
];

// Therapies

export const THERAPIES = [
  {
    title: "Individual Therapy",
    description:
      "One-on-one sessions to help you manage stress, anxiety, depression, and more. We offer personalized care to help you tackle life's challenges",
    imgURL: therapyIndividual,
  },
  {
    title: "Couples Therapy",
    description:
      "Enhance your relationship with improved communication and conflict resolution. Grow together into the person you want to be.",
    imgURL: therapyCouples,
  },
  {
    title: "Family Therapy",
    description:
      "Build healthier family dynamics and improve communication. Create a stronger, more harmonious family unit.",
    imgURL: therapyFamily,
  },
  {
    title: "Group Therapy",
    description:
      "Share experiences and learn from others in a supportive group setting. Find friendship and support in others.",
    imgURL: therapyGroup,
  },

  {
    title: "Child and Adolescent Therapy",
    description:
      "Specialized care for young individuals facing emotional and behavioral challenges. Improve your mental health.",
    imgURL: therapyChild,
  },
];

//Benefits

export const BENEFITS = [
  {
    icon: checkmark,
    title: "Personalized Care",
    description: "Tailored therapy to meet your unique needs.",
  },
  {
    icon: checkmark,
    title: "Experienced Therapists",
    description: "Experienced therapists dedicated to your care.",
  },
  {
    icon: checkmark,
    title: "Safe Environment",
    description: "A welcoming space to explore your feelings.",
  },
  {
    icon: checkmark,
    title: "Diverse Therapies",
    description:
      "From individual to family therapy, we cover all aspects of mental health.",
  },
  {
    icon: checkmark,
    title: "Holistic Approach",
    description: "Comprehensive care that addresses all facets of mental health",
  },
  {
    icon: checkmark,
    title: "Accessible and Convenient",
    description: "Central location with flexible scheduling.",
  },

  {
    icon: checkmark,
    title: "Proven Results",
    description: "Hear from those we've helped.",
  },
  {
    icon: checkmark,
    title: "Ongoing Support",
    description: "Continuous care for lasting positive change.",
  },
];
