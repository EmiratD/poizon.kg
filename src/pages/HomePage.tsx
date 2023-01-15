import  AboutUsBord from "../components/aboutUs/AboutUs";
import SignInAndLogIn from "../components/signInAndLogIn/SignInAndLogIn";

const HomePage = () => {
  return(
      <main className="wrapper">
        {AboutUsBord}
        <div className="m0auto">
          <SignInAndLogIn/>
        </div>
      </main>
  )
};

export default HomePage;