import {
  createHashRouter,
  Navigate,
} from "react-router-dom";
import PLayout from '../pages/Layout'
import PHome from '../pages/home'
import PBracketChanllenge from '../pages/bracket_challenge'
import PBracketChanllengeAnalytics from '../pages/bracket_chanllenge_analytics'
import CCRank from '../pages/bracker_challenge_rank'
import PRank from '../pages/rank/rank'




const router = createHashRouter([
  {
    path: '/',
    element: <PLayout />,
    children:[{
      index:true,
      element: <PHome />,
    },{
      path:"/bc/:bcid/:year/:type",
      children:[{
        index:true,
        element: <PBracketChanllenge />,
      },{
        path:"/bc/:bcid/:year/:type/analytics",
        element: <PBracketChanllengeAnalytics />,
      },{
        path:"/bc/:bcid/:year/:type/rank",
        element: <CCRank />,
      },]
    },{
      path:"/rank/:type",
      element: <PRank />
    }]
  },
  {
    path: 'test',
    element: <PBracketChanllenge/>,
  },
  {
    path: '*',
    element: <Navigate to="/bc/1" />
  },
])

export default router