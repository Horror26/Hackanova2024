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
