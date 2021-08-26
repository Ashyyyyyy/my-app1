import WelcomeHeader from "./WelcomeHeader/index";
import WelcomeNav from "./WelcomeNav";

const Welcome = () => {
  return (
    <div>
      <WelcomeHeader />
      <WelcomeNav />
      <div className="welcomePresent">welcomePresent</div>
    </div>
  );
};

export default Welcome;
