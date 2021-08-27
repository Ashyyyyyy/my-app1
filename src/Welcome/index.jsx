import WelcomeHeader from "./WelcomeHeader/index";
import WelcomeNav from "./WelcomeNav/index";
import WelcomePresent from "./WelcomePresent/index";

import { WelcomeStyle } from "./style";

const Welcome = () => {
  return (
    <WelcomeStyle>
      <WelcomeHeader />
      <WelcomeNav />
      <WelcomePresent />
    </WelcomeStyle>
  );
};

export default Welcome;
