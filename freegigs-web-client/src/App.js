import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import UserPage from "./pages/UserPage/UserPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import EditUserPage from "./pages/EditUserPage/EditUserPage";
import SearchResultDetailPage from "./pages/SearchResultDetailPage/SearchResultDetailPage";
import AddServicePage from "./pages/AddServicePage/AddServicePage";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <LandingPage />}
        />
        <Route
          path="/chat/:id"
          element={user ? <ChatPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/user/:id"
          element={user ? <UserPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="/home" /> : <SignInPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/home" /> : <SignUpPage />}
        />
        <Route path="/edituser/:id" element={<EditUserPage />} />
        <Route
          path="/searchresult/:id"
          element={
            user ? <SearchResultDetailPage /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/addservice/:id"
          element={user ? <AddServicePage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/overview/:id"
          element={user ? <OverviewPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/history/:id"
          element={user ? <HistoryPage /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
  );
}

export default App;