import  AboutUsBord from "../components/aboutUs/AboutUs";
import SignInAndLogIn from "../components/signInAndLogIn/SignInAndLogIn";

const HomePage = () => {
  return(
      <main>
        {AboutUsBord}
        <SignInAndLogIn/>
      </main>
  )
};

export default HomePage;