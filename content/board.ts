import { BASE_PATH, clubInfo } from "./club";

export interface BoardMember {
  name: string;
  role: string;
  impressumRole?: string;
  isVertretungsberechtigt: boolean;
  image: string;
  email: string;
  linkedin: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Philip Schäfer",
    role: "1. Vorstand",
    impressumRole: "1. Vorsitzender",
    isVertretungsberechtigt: true,
    image: `${BASE_PATH}/images/board/philip-schaefer.jpg`,
    email: clubInfo.mailto,
    linkedin: "https://www.linkedin.com/in/philip-sch%C3%A4fer-0569b05a/",
  },
  {
    name: "Christian Müller",
    role: "2. Vorstand",
    impressumRole: "Stellvertretender Vorsitzender",
    isVertretungsberechtigt: true,
    image: `${BASE_PATH}/images/board/christian-mueller.jpg`,
    email: clubInfo.mailto,
    linkedin: "https://www.linkedin.com/in/christian-a-m%C3%BCller/",
  },
  {
    name: "Paul Lampe",
    role: "Kassier",
    impressumRole: "Kassier",
    isVertretungsberechtigt: true,
    image: `${BASE_PATH}/images/board/paul-lampe.jpg`,
    email: clubInfo.mailto,
    linkedin: "https://www.linkedin.com/in/paul-lampe-3426a9225/",
  },
  {
    name: "Alexander Dittrich",
    role: "Kassenprüfer",
    isVertretungsberechtigt: false,
    image: `${BASE_PATH}/images/board/alexander-dittrich.jpg`,
    email: clubInfo.mailto,
    linkedin: "https://www.linkedin.com/in/dittrich-alexander/",
  },
];
