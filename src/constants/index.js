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
    key: 1,
    title: "Individual Therapy",
    description:
      "Individual therapy provides a one-on-one, confidential setting where you can explore your thoughts and feelings. Our therapists use evidence-based approaches to help you manage stress, anxiety, depression, and other personal challenges.",
    imgURL: therapyIndividual,
    alt: "Man being helped in individual therapy session",
  },
  {
    key: 2,
    title: "Couples Therapy",
    description:
      "Relationships can be a source of joy and support, but they can also face difficult times. Our couples therapy sessions are designed to help partners improve communication, resolve conflicts, and strengthen their bond. We provide a neutral and supportive environment to help you and your partner navigate your relationship's unique challenges.",
    imgURL: therapyCouples,
    alt: "Couple being helped in couple therapy session",
  },
  {
    key: 3,
    title: "Family Therapy",
    description:
      "Family therapy aims to improve communication and relationships within the family unit. Whether you are dealing with conflicts, parenting issues, or life transitions, our therapists work with families to develop healthy communication patterns and stronger connections.",
    imgURL: therapyFamily,
    alt: "Family being helped in family therapy session",
  },
  {
    key: 4,
    title: "Group Therapy",
    description:
      "Group therapy offers a supportive environment where you can share your experiences and learn from others facing similar challenges. Our groups are facilitated by experienced therapists and cover a range of topics, including anxiety, depression, grief, and addiction.",
    imgURL: therapyGroup,
    alt: "Group being helped in group therapy session",
  },

  {
    key: 5,
    title: "Child and Adolescent Therapy",
    description:
      "Children and teens face unique challenges that require specialized care. Our therapists are skilled in working with young people to address issues such as anxiety, depression, behavioral problems, and trauma. We use age-appropriate techniques to help them build resilience and healthy coping skills.",
    imgURL: therapyChild,
    alt: "Adolescent being helped in therapy",
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
    description:
      "Comprehensive care that addresses all facets of mental health",
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
