import dataAnalysis from "./Assets/DataAnalysis.svg";
import spss from "./Assets/Spss.svg";
import stata from "./Assets/Stata.svg";
import qualitative from "./Assets/QualitativeResearch.svg";
import quantitative from "./Assets/QuantitativeResearch.svg";
import email from "./Assets/Email.png";
import phone from "./Assets/Phone.png";
import facebook from "./Assets/Facebook.png";
import twitter from "./Assets/Twitter.png";
import linkedin from "./Assets/LinkedIn.png";
import message from "./Assets/Quote.png";
import twitternav from "./Assets/Twitternav.png";
import linkedinnav from "./Assets/LinkedInnav.png";
import facebooknav from "./Assets/Facebooknav.png";

export const navbar = [
  {
    name: "LinkedIn",
    img: linkedinnav,
    link: "https://www.linkedin.com/in/dion-allen-68388918b",
  },

  {
    name: "Twitter",
    img: twitternav,
    link: "https://twitter.com/DionAllen1234",
  },
];
export const qualification = [
  "Ph.D., Pharmaceutical Sciences,  Nova Southeastern  University FL,  Aug   2019-Present",
  "M.S., Applied Psychology, Lynn University, FL, May 2018",
  "B.S., Psychology, University of the West Indies (U.W.I), Jamaica, Sep 2012",
  "Innovative Teaching and Learning In Clinical Sciences and Pharmacy (ITALICSRx) Teaching Certificate, Nova Southeastern University, FL, June 2022",
];
export const skills = [
  {
    img: dataAnalysis,
    title: "Data Analysis",
    detail:
      "Acknowledging and addressing the gender disparity in pre-exposure prophylaxis use for HIV prevention adding to the decorum of the feast to ocran in east.",
  },
  {
    img: spss,
    title: "SPSS",
    detail:
      "Acknowledging and addressing the gender disparity in pre-exposure prophylaxis use for HIV prevention adding to the decorum of the feast to ocran in east.",
  },
  {
    img: stata,
    title: "STATA",
    detail:
      "Acknowledging and addressing the gender disparity in pre-exposure prophylaxis use for HIV prevention adding to the decorum of the feast to ocran in east.",
  },
  {
    img: qualitative,
    title: "Qualitative Research",
    detail:
      "Acknowledging and addressing the gender disparity in pre-exposure prophylaxis use for HIV prevention adding to the decorum of the feast to ocran in east.",
  },

  {
    img: quantitative,
    title: "Quantitative Research",
    detail:
      "Acknowledging and addressing the gender disparity in pre-exposure prophylaxis use for HIV prevention adding to the decorum of the feast to ocran in east.",
  },
];

export const experience = {
  "main text":
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ",
  "experience-list": [
    {
      id: 1,
      year: "2022 – 2023",
      title:
        "Chapter Onboarding Committee Member, The Professional Society for Health Economics and Pharmacy Outcomes Research (ISPOR) - National Student Society",
      skill: ["development", "software", "medicine"],
      contribution: [
        "loNostrud Lorem sit minim cillum laboris laboris ullamco voluptate aliquip culpa id eiusmod exercitation.",
        "Sint ea ex minim exercitation aliqua esse.",
      ],
    },
    {
      id: 2,
      year: "2022 - 2023",
      title:
        "Secretary, ISPOR, Student Chapter, NSU, College of Pharmacy, Davie, FL",
    },
    {
      id: 3,
      year: "2021 - 2022",
      title:
        "Invited Guest Lecture, “The Intersection of HIV History and Public Health, NSU, College of Pharmacy",
    },
    {
      id: 4,
      year: "2021 - 2022",
      title: "Student Mentor, NSU, College of Pharmacy",
    },
    {
      id: 5,
      year: "2021 - 2022",
      title: "President, ISPOR, Student Chapter, NSU, College of Pharmacy",
    },
    {
      id: 6,
      year: "2021 - 2022",
      title:
        "Guest Judge for PharmD students, Secondary Database Analysis, NSU",
    },
    {
      id: 7,
      year: "2020 - 2021",
      title:
        "Class Advisor, Master of Science in Pharmaceutical Affairs, NSU, College of Pharmacy",
    },
    {
      id: 8,
      year: "2020 - 2021",
      title: "Treasurer, ISPOR, Student Chapter, NSU, College of Pharmacy",
    },
    {
      id: 9,
      year: "2019 - 2020",
      title: "Teaching/Graduate Assistant, NSU, College of Pharmacy",
    },
  ],
};

export const publications = [
  {
    id: 1,
    name: "Acknowledging and addressing the gender disparity in pre-exposure prophylaxis use for HIV prevention",
    link: "https://academic.oup.com/jphsr/article-abstract/13/3/168/6645632",
  },
  {
    id: 2,
    name: "The Effect of Antihypertensive Medication Use on the Severity of Depressive Symptoms in Adults Diagnosed with Hypertension",
    link: "https://www.valueinhealthjournal.com/article/S1098-3015(22)01590-X/fulltext#relatedArticles",
  },
  {
    id: 3,
    name: "An Evaluation of the Use of Psychotropic Agents Among Adults 65 Years or Older with Type 2 Diabetes",
    link: "https://www.valueinhealthjournal.com/article/S1098-3015(21)00642-2/fulltext",
  },
];
export const footer = {
  contact: [
    {
      key: "phone",
      img: phone,
      value: "4759843679548",
    },
    {
      key: "email",
      img: email,
      value: "randpm@gmail.com",
    },
  ],
  social: [
    {
      name: "linkedin",
      img: linkedin,
      link: "https://www.linkedin.com/in/dion-allen-68388918b",
    },

    {
      name: "twitter",
      img: twitter,
      link: "https://twitter.com/DionAllen1234",
    },
  ],
  quote: {
    value:
      "“Education is the most powerful weapon which you can use to change the world.”",
    img: message,
    author: "Nelson Mandela",
  },
};

export const grants = [
  "University of Puerto Rico – Mentoring Institute for HIV and Mental Health Research, funded by the National Institute of Mental Health (NIMH). A mentorship grant for the development of early career researchers in HIV and mental health. Resulted in a paper submitted for publication (commentary), ‘Acknowledging and Addressing the Gender Disparity in Pre-exposure Prophylaxis Use’",
  "International Society for Pharmacoeconomics and Outcomes Research (ISPOR) Student Conference Grant (2022). A grant made available to ISPOR student members to attend the society’s annual virtual conferences.",
  "The Center for Health Economics of Treatment Interventions for Substance Use Disorder, HCV, and HIV (CHERISH) Pilot Grant – CHERISH is funded by NIDA (P30DA040500) as a collaboration among Weill Cornell Medicine, Boston Medical Center, Boston University School of Public Health, University of Pennsylvania, and University of Miami Miller School of Medicine. https://cherishresearch.org/2022/07/five-researchers-receive-cherish-pilot-awards-to-advance-the-treatment-of-substance-use-disorders-hcv-and-hiv/",
];
