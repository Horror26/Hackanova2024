export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Community",
    route: "/community",
  },
  {
    label: "Quiz",
    route: "/quiz",
  },
  {
    label: "Profile",
    route: "/profile",
  },
];

export const defaultValues = {
  dob: new Date(),
  position: "",
  username: "",
  photo: "/assets/images/logo.svg",
  gender: "Male",
  career: "Banking",
  married: "Married",
  relationship: "Single",
};

export const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

export const career = [
  { id: 1, name: "Banking" },
  { id: 2, name: "Healthcare" },
  { id: 3, name: "Software Developers" },
];

export const married = [
  { id: 1, name: "Married" },
  { id: 2, name: "Unmarried" },
];

export const relationship = [
  { id: 1, name: "Single" },
  { id: 2, name: "Couple" },
];

export const questions = [
  {
    id: 1,
    question:
      "How do you handle criticism or feedback from your peers or superiors?",
    options: [
      "I try to understand their perspective and use it as an opportunity for growth.",
      "I maintain a composed demeanor and take the feedback in stride, even if I may not agree with it.",
      "I appreciate constructive criticism as it helps me improve and strive for excellence.",
      "I often feel demotivated and defeated by criticism, finding it hard to see the value in it.",
    ],
    map: [
      "Empathetic",
      "Professional/Pretend",
      "Positive/Assertive",
      "Depressed",
    ],
  },
  {
    id: 2,
    question:
      "What steps will you take to maintain your professional demeanor in stressful situations?",
    options: [
      "I focus on problem-solving and maintain a calm and collected attitude to navigate through challenges.",
      "I put on a professional facade, even if I'm feeling overwhelmed internally.",
      "I remind myself of my capabilities and stay confident in my abilities to handle the situation.",
      "I find it difficult to maintain professionalism when stressed, often feeling like I'm on the verge of breaking down.",
    ],
    map: [
      "Empathetic",
      "Professional/Pretend",
      "Positive/Assertive",
      "Depressed",
    ],
  },
  {
    id: 3,
    question:
      "How do you feel while imagining your future for yourself right now?",
    options: [
      "I feel hopeful and excited about the possibilities that lie ahead.",
      "I envision a successful future but sometimes wonder if it's all just a facade.",
      "I have a clear vision of my goals and feel confident in my ability to achieve them.",
      "I struggle to see a positive future for myself, often feeling overwhelmed by uncertainty and doubt.",
    ],
    map: [
      "Empathetic",
      "Professional/Pretend",
      "Positive/Assertive",
      "Depressed",
    ],
  },
];
