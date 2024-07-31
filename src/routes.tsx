  import { useRoutes } from "react-router-dom";
  import Mainlayout from "./Layout/Mainlayout";
  import PageTitle from "./Component/Shared/PageTitle";
  import HomePage from "./pages/main/HomePage";
  import AboutPage from "./pages/main/About";
  import NotFound from "./pages/NotFound";
  import Dashboard from "./pages/dashboard/Dashboard";
  import Drivers from "./pages/dashboard/Drivers";
  import DashboardLayout from "./Layout/Dashboardlayout";
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
  import PrivateRoute from "./Component/Main/PrivateRoute";
  import LoginLayout from "./Layout/LoginLayout";
  import LoginPage from "./Component/Main/LogIn";

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
                <HomePage />
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
              <PrivateRoute>
                <>
                  <PageTitle title="Mon-Chaufferurs | Monchauffeur" />
                  <Monchauffeur />
                </>
              </PrivateRoute>
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
            path: "ContactUsPage",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | ContactUsPage" />
                <ContactUsPage />
              </>
            ),
          },

          {
            path: "Landingpage",
            element: (
              <>
                <PageTitle title="Mon-Chauffeurs | LandingPage" />
                <LandingPage />
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
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Dashboard" />
                <Dashboard />
              </>
            ),
          },
          {
            path: "drivers",
            element: (
              <>
                <PageTitle title="Mon-Chaufferurs | Drivers" />
                <Drivers />
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
