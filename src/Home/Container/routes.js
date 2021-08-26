import Activity1 from "./Activity1/index";
import Activity2 from "./Activity2/index";
import Activity3 from "./Activity3/index";

let routes = [
  {
    path: '/home/activity1',
    component: Activity1,
  },
  {
    path: '/home/activity2',
    component: Activity2,
  },
  {
    path: '/home/activity3',
    component: Activity3,
  },
];

export default routes;