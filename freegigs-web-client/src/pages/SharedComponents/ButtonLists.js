import OverviewLogo from "../../assets/overview-logo-black.png";
import HistoryLogo from "../../assets/history-logo-black.png";
import AddServicesLogo from "../../assets/add-services-logo-black.png";
import OverviewSelectedLogo from "../../assets/overview-logo-white.png";
import HistorySelectedLogo from "../../assets/history-logo-white.png";
import AddServicesSelectedLogo from "../../assets/add-services-logo-white.png";

export const ButtonLists = [
  {
    id: 1,
    title: "Overview",
    link: "/overview/",
    logoNotSelected: OverviewLogo,
    logoSelected: OverviewSelectedLogo,
  },
  {
    id: 2,
    title: "History",
    link: "/history/",
    logoNotSelected: HistoryLogo,
    logoSelected: HistorySelectedLogo,
  },
  {
    id: 3,
    title: "Add Services",
    link: "/addservice/",
    logoNotSelected: AddServicesLogo,
    logoSelected: AddServicesSelectedLogo,
  },
];
