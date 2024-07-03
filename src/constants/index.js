import {
  therapyChild,
  therapyCouples,
  therapyFamily,
  therapyGroup,
  therapyIndividual,
  testimonialCouple,
  testimonialFamily,
  testimonialGroup,
  testimonialMan1,
  testimonialMan2,
  testimonialWoman1,
  testimonialWoman2,
  therapyGroup1,
  testimonialWoman3,
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
    key: 1,
    icon: checkmark,
    title: "Personalized Care",
    description:
      "At Harmony Mental Health Clinic, we tailor our therapy services to your unique needs, ensuring you receive the most effective and compassionate care. We help you achieve your mental wellness goals.",
  },
  {
    key: 2,
    icon: checkmark,
    title: "Experienced Therapists",
    description:
      "Our team of licensed professionals brings a wealth of experience and specialized training to provide the highest quality mental health care. They are dedicated to supporting you with empathy and expertise.",
  },
  {
    key: 3,
    icon: checkmark,
    title: "Safe Environment",
    description:
      "We offer a welcoming, confidential space where you can explore your thoughts and feelings without judgment. Our clinic is designed to be a sanctuary for your mental health journey.",
  },
  {
    key: 4,
    icon: checkmark,
    title: "Diverse Therapies",
    description:
      "From individual therapy to couples, family, and group sessions, we provide a wide range of services to support your mental wellness. Whatever your needs, we have the right therapy for you.",
  },
  {
    key: 5,
    icon: checkmark,
    title: "Holistic Approach",
    description:
      "We believe in treating the whole person, incorporating various therapeutic techniques to promote overall well-being. Our holistic methods address all aspects of your mental health.",
  },
  {
    key: 6,
    icon: checkmark,
    title: "Accessible & Convenient",
    description:
      "Located in a central area with flexible scheduling options, we make it easy for you to prioritize your mental health. We aim to remove barriers to accessing the care you need.",
  },

  {
    key: 7,
    icon: checkmark,
    title: "Proven Results",
    description:
      "Our clients' success stories and testimonials reflect our commitment to helping you achieve lasting positive change. We take pride in the transformative impact of our therapies.",
  },
  {
    key: 8,
    icon: checkmark,
    title: "Ongoing Support",
    description:
      "We are dedicated to providing continuous support, helping you develop the skills and resilience needed for a healthier, happier life. Our care doesn’t end when you leave our office.",
  },
];

// Testimonials

export const TESTIMONIALS = [
  {
    key: 1,
    icon: quotes,
    therapy: "Group Therapy",
    img: testimonialGroup,
    name: "Lisa M.",
    quote:
      "Group therapy at Harmony provided me with a sense of community and understanding. Sharing my experiences with others who faced similar challenges was incredibly comforting and empowering. I no longer feel alone in my struggles and have developed meaningful connections that continue to support me.",
  },
  {
    key: 2,
    icon: quotes,
    therapy: "Individual Therapy",
    img: testimonialMan1,
    name: "David E.",
    quote:
      "Thanks to Harmony Mental Health Clinic, I've found peace and balance in my life. The supportive environment and caring therapists made all the difference. I feel more confident and equipped to handle my anxiety and stress.",
  },
  {
    key: 3,
    icon: quotes,
    therapy: "Individual Therapy",
    img: testimonialWoman1,
    name: "Michelle S.",
    quote:
      "My therapist at Harmony has been a tremendous support in helping me overcome my past traumas. I feel heard, understood, and guided through every step of my healing journey. I am finally able to move forward with my life.",
  },
  {
    key: 4,
    icon: quotes,
    therapy: "Adolescent Therapy",
    img: testimonialWoman2,
    name: "Karen G.",
    quote:
      "The therapists at Harmony are amazing. They helped my teenage son navigate his emotions and build healthy coping skills. He has become more confident and better equipped to handle his feelings. I am grateful for the positive impact Harmony has had on our family.",
  },
  {
    key: 5,
    icon: quotes,
    therapy: "Couples Therapy",
    img: testimonialCouple,
    name: "Javier and Isabelle ",
    quote:
      "Couples therapy at Harmony saved our marriage. The sessions helped us communicate better and understand each other more deeply. We have resolved long-standing issues and feel more connected than ever before. Harmony gave us the tools to strengthen our relationship.",
  },
  {
    key: 6,
    icon: quotes,
    therapy: "Family Therapy",
    img: testimonialFamily,
    name: "Janssen Family",
    quote:
      "Our family dynamic has improved significantly thanks to the family therapy sessions at Harmony. We learned how to communicate better and understand each other's perspectives. The change has been remarkable, and we are now closer and more supportive of one another.",
  },
  {
    key: 7,
    icon: quotes,
    therapy: "Individual Therapy",
    img: testimonialMan2,
    name: "James T.",
    quote:
      "The individual therapy I received at Harmony has truly transformed my life. The compassionate and professional approach of my therapist helped me gain insight into my behaviors and develop healthier coping mechanisms. I now feel more empowered and in control.",
  },
  {
    key: 8,
    therapy: "Group Therapy",
    img: therapyGroup1,
    name: "Alexandra B.",
    quote:
      "Joining the group therapy sessions at Harmony was one of the best decisions I've made. The shared experiences and mutual support have been incredibly healing. It's comforting to know I'm not alone and to have a community that understands and supports each other.",
  },
  {
    key: 9,
    therapy: "Individual Therapy",
    img: testimonialWoman3,
    name: "Emily A.",
    quote:
      "Harmony Mental Health Clinic has been a game-changer for me. The compassionate support and practical advice from my therapist have helped me navigate a very challenging time in my life. I've grown so much emotionally and feel more optimistic about the future.",
  },
];
