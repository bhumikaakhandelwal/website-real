export const activityCategories = [
  {
    title: "Hackathons",
    description:
      "Team-based challenges centered on real-world problem statements and prototype building.",
  },
  {
    title: "Workshops and Technical Learning Activities",
    description:
      "Opportunities to explore tools, technologies, and technical learning.",
  },
  {
    title: "Panel Discussions",
    description:
      "Engineers share insights into how real systems are built and maintained.",
  },
  {
    title: "Industry Field Visits",
    description: "Students get direct exposure to R&D teams.",
  },
  {
    title: "Conference Participation",
    description:
      "Opportunities connected to developer and AI conferences.",
  },
] as const;

export type ActivityCategory = (typeof activityCategories)[number]["title"];
