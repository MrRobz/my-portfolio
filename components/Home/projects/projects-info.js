import iconShelfCover from "../../../public/icon-shelf.png";
import priceRounderCover from "../../../public/price-rounder-99.png";
import peerAppreciationCardsCover from "../../../public/peer-appreciation-cards.png";
import menubarAutoBright from "../../../public/menubar-auto-brightness.png";
import notionPlannerCover from "../../../public/notion-planner.png";
import emberTributeCover from "../../../public/ember-tribute.png";
import interviewCodeCover from "../../../public/interview-code.png";
import lauraDeskCover from "../../../public/lauradesk.png";

export const ProjectsInfoList = [
  {
    title: "Icon Shelf: SVG icon organizer for web devs",
    desc: "Icon Shelf is a free and open-source SVG icon manager for web developers. Improve how you add icons to your frontend project. All your icons in one place, easily copyable as code.",
    tags: ["Desktop app", "React", "Electron"],
    cover: iconShelfCover,
    link: "https://icon-shelf.github.io",
    featured: true,
  },
  {
    title: "Price Rounder 99: Round-off price tags",
    desc: "Price Rounder 99 chrome extension that rounds off  the prices for you and shows the rounded price on your screen. So you can take a better decisions while shopping online.",
    tags: ["Chrome extension", "Javascript"],
    cover: priceRounderCover,
    link: "https://www.producthunt.com/products/launchaco#price-rounder-99",
    featured: true,
  },
  {
    title: "Peer appreciation cards: generate appreciation cards",
    desc: "Take a moment to celebrate your peers, co-workers and leaders for the great work they are doing. Write a note of appreciation to them for championing company culture values",
    tags: ["Web app", "Emberjs"],
    cover: peerAppreciationCardsCover,
    link: "https://peer-appreciation-cards.netlify.app/",
    featured: true,
  },
  {
    title: "Menubar Auto Brightness",
    desc: 'Control your mac\'s screen brightness based on which app is in focus. Set the desired brightness per app and continue with your work and let "menubar-auto-brightness" automatically adjust screen brightness when you switch apps.',
    tags: ["Mac app", "Electron", "Javascript"],
    cover: menubarAutoBright,
    link: "https://www.producthunt.com/products/menubar-auto-brightness#menubar-auto-brightness",
    featured: false,
  },
  {
    title: "Notion New Year's Goals Planner",
    desc: "A Notion template to empower you to take control of your new year goals. Define, break down your goals and make them easier to execute.",
    tags: ["Notion"],
    cover: notionPlannerCover,
    link: "https://www.producthunt.com/products/notion-new-year-s-goals-planner#notion-new-year-s-goals-planner",
    featured: false,
  },
  {
    title: "Ember Tribute",
    desc: "An Ember component wrapper for zurb/tribute library.",
    tags: ["Emberjs", "npm"],
    cover: emberTributeCover,
    link: "https://mrrobz.github.io/ember-tribute/docs/usage",
    featured: false,
  },
  {
    title: "Interview Code",
    desc: "A simple shared online code editor to make Interviews easy.",
    tags: ["Web app", "Emberjs"],
    cover: interviewCodeCover,
    link: "https://github.com/MrRobz/interView-code",
    featured: false,
  },
  {
    title: "Lauradesk",
    desc: "A visitor managing system for building. Track people coming into a building, notify relevant personal and print name tags.",
    tags: ["Web app", "Mobile app"],
    cover: lauraDeskCover,
    link: "https://www.facebook.com/mutanttechies/",
    featured: false,
  },
];
