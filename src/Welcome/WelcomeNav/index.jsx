import { WelcomeNavStyle } from "./style";

const WelcomeNav = () => {
  return (
    <WelcomeNavStyle>
      <ul>
        <li>
          <a href="/home/activity1">任务一</a>
        </li>
        <li>
          <a href="/home/activity2">任务二</a>
        </li>
        <li>
          <a href="/home/activity3">任务三</a>
        </li>
      </ul>
    </WelcomeNavStyle>
  );
};

export default WelcomeNav;
