  import { useRoutes } from "react-router-dom";
  import Mainlayout from "./Layout/Mainlayout";
  import PageTitle from "./Component/Shared/PageTitle";
  import AboutPage from "./pages/main/About";
  import NotFound from "./pages/NotFound";
  import SignIn from "./pages/Auth/SignIn";
  import SignUp from "./pages/Auth/SignUp";
  import VerifyAccount from "./pages/Auth/VerifyAccount";
  import ResetPassword from "./pages/Auth/ResetPassword";
  import AuthLayout from "./Layout/AuthLayout";
  import Monchauffeur from "./Component/Main/Monchauffeur";
  import Hireform from "./Component/Main/Hireform";
  import RegisterForm from "./Component/Main/Registerform";
  // import LogIn from "./Component/Main/LogIn";
  import LandingPage from "./Component/Main/Landing";
  import Driverpage from "./Component/Main/Driverpage";
  import BookingPage from "./Component/Main/BookingPage";
  import ContactUsPage from "./Component/Main/ContactUsPage";
  import LoginLayout from "./Layout/LoginLayout";
  import LoginPage from "./Component/Main/LogIn";
  import Aboutus from "./Component/Main/Aboutus";

  const AppRoutes = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: <Mainlayout />,
        children: [
          {
            index: true,
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Home page" />
                <LandingPage />
              </>
            ),
          },
          {
            path: "about",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | About" />
                <AboutPage />
              </>
            ),
          },
          {
            path: "Monchauffeur",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Monchauffeur" />
                <Monchauffeur />
              </>
            ),
          },
          {
            path: "Driverpage",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Driverpage" />
                <Driverpage />
              </>
            ),
          },
          {
            path: "Hireform",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Hireform" />
                <Hireform />
              </>
            ),
          },
          {
            path: "contactus",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | ContactUsPage" />
                <ContactUsPage />
              </>
            ),
          },
          {
            path: "BookingPage",
            element: (
              <>
                <PageTitle title="Mon-Chauffeurs | BookingPage" />
                <BookingPage />
              </>
            ),
          },
          {
            path: "Aboutus",
            element: (
              <>
                <PageTitle title="Mon-Chauffeurs | Aboutus" />
                <Aboutus />
              </>
            ),
          },

          {
            path: "*",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Not Found" />
                <NotFound />
              </>
            ),
          },
        ],
      },

      {
        path: "/",
        element: <LoginLayout />,
        children: [
          {
            path: "login",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Login" />
                <LoginPage />
              </>
            ),
          },
          {
            path: "Registerform",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | RegisterForm" />
                <RegisterForm />
              </>
            ),
          },
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Sign In" />
                <SignIn />
              </>
            ),
          },
          {
            path: "signup",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Sign Up" />
                <SignUp />
              </>
            ),
          },
          {
            path: "reset-password",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Reset Password" />
                <ResetPassword />
              </>
            ),
          },
          {
            path: "verify-account",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Verify Account" />
                <VerifyAccount />
              </>
            ),
          },
        ],
      },
    ]);

    return routes;
  };

  export default AppRoutes;
