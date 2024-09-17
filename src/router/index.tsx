import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import PNavbar from '../pages/navbar'
import PHome from '../pages/home'
import PBracketChanllenge from '../pages/bracket_challenge'
import PBracketChanllengeAnalytics from '../pages/bracket_chanllenge_analytics'
import CCRank from '../pages/bracker_challenge_rank'
import PRank from '../pages/ranking'
import PCalendar from "../pages/calendar";
import PDraw from "../pages/draw";
import PHistory from "../pages/history";
import PH2h from "../pages/h2h";
import PAdminHome from "../pages/adminHome";
import PAdminNavbar from "../pages/adminNavbar";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PNavbar />,
    children: [{
      index: true,
      element: <PHome />,
    }, {
      path: "/bc/:bcid/:year/:type",
      children: [{
        index: true,
        element: <PBracketChanllenge />,
      }, {
        path: "/bc/:bcid/:year/:type/analytics",
        element: <PBracketChanllengeAnalytics />,
      }, {
        path: "/bc/:bcid/:year/:type/rank",
        element: <CCRank />,
      },]
    }, {
      path: "/ranking",
      element: <PRank />
    },{
      path: "/calendar",
      element: <PCalendar />
    },{
      path: "/tournament/:tourid",
      element: <PDraw />
    },{
      path: "/history",
      element: <PHistory />
    },{
      path: "/h2h",
      element: <PH2h />
    }]
  },
  {
    path: 'admin',
    element: <PAdminNavbar />,
    children: [{
      index: true,
      element: <PAdminHome />,
    }]
  },
  {
    path: 'test',
    element: <PHome />,
  },
  {
    path: '*',
    element: <Navigate to="/" />
  },
])

export default router