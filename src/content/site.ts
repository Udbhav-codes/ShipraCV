/**
 * SITE CONTENT
 * ------------------------------------------------------------------
 * Everything personal on the site lives in this file. Edit the values
 * below; no component needs to change.
 *
 * Fields marked "OPTIONAL" are hidden until they contain a value, so
 * nothing is ever published as fact before it has been supplied.
 */

export const profile = {
  name: "Shipra Tiwari",
  positioning: "English Literature Graduate | Content & Communications",
  location: "Prayagraj, Uttar Pradesh, India",
  availability: "Prayagraj, India · Open to opportunities",
  email: "shipratiwari282004@gmail.com",
  /** Shown on screen. */
  phoneDisplay: "+91 8318455633",
  /** Used for the tel: link — digits and a leading + only. */
  phoneHref: "+918318455633",
  /** OPTIONAL — full URL, e.g. "https://www.linkedin.com/in/your-name". Hidden while empty. */
  linkedin: "",
};

/**
 * PORTRAIT
 * Replace public/portrait.jpg with a new photograph (same file name) or
 * change `src` below. If the file is missing, a typographic ST monogram
 * is shown instead, so the layout never breaks.
 */
export const portrait = {
  src: "portrait.jpg",
  alt: "Shipra Tiwari smiling, seated at a wooden table in front of a blue panelled wall.",
  caption: "Shipra Tiwari — Prayagraj",
  /** CSS object-position, to keep her face framed when the photo is cropped. */
  focus: "50% 22%",
};

export const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Selected Work", to: "/#work" },
  { label: "Approach", to: "/#approach" },
  { label: "Contact", to: "/#contact" },
];

export const approach = {
  statement:
    "Good communication begins with understanding what needs to be said—and who needs to hear it.",
  principles: [
    {
      title: "Research before writing",
      copy: "Understand the subject, gather reliable information, and establish context before developing the narrative.",
    },
    {
      title: "Clarity over complexity",
      copy: "Make ideas accessible without stripping away their meaning.",
    },
    {
      title: "Purpose before polish",
      copy: "Adapt tone, structure, and language to the audience and the objective.",
    },
  ],
};

export const education = {
  institution: "Allahabad Degree College (ADC)",
  university: "University of Allahabad",
  degree: "Bachelor's Degree",
  subjects: "English Literature, Political Science & History",
  place: "Prayagraj, Uttar Pradesh",
  /** OPTIONAL — e.g. "2025". Hidden while empty. */
  graduationYear: "",
  /** OPTIONAL — e.g. "7.8 CGPA" or "72%". Hidden while empty. */
  score: "",
  /**
   * OPTIONAL — genuine academic activities, publications, certifications or
   * projects. Each entry: { title: "…", detail: "…" }. The block is hidden
   * while this list is empty.
   */
  additional: [] as { title: string; detail: string }[],
};

export const skillGroups = [
  {
    title: "Writing & Editing",
    items: ["Content Writing", "Editing", "Creative Writing", "Storytelling"],
  },
  {
    title: "Research & Analysis",
    items: ["Information Gathering", "Research", "Critical Reading", "Content Development"],
  },
  {
    title: "Communication",
    items: [
      "Written Communication",
      "Verbal Communication",
      "Presentation",
      "Interpersonal Skills",
      "Team Collaboration",
    ],
  },
];

export const workingHabits = [
  "Time Management",
  "Adaptability & Problem-Solving",
  "Attention to Detail",
];

export const careerInterests = [
  "Content Writing",
  "Editorial Writing",
  "Copywriting",
  "Corporate Communications",
  "Public Relations",
  "Media & Communications",
];
