import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Chat from "../pages/dashboard/Chat";
import ImageGenerator from "../pages/dashboard/ImageGenerator";
import CodeGenerator from "../pages/dashboard/CodeGenerator";
import ResumeBuilder from "../pages/dashboard/ResumeBuilder";
import Translator from "../pages/dashboard/Translator";
import SpeechToText from "../pages/dashboard/SpeechToText";
import DataAnalyzer from "../pages/dashboard/DataAnalyzer";
import Assistant from "../pages/dashboard/Assistant";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";
import Pricing from "../pages/Pricing/Pricing";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyEmail from "../pages/VerifyEmail";
import ProtectedRoute from "../components/ProtectedRoute";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}>
        <Route index element={<DashboardHome />} />
        <Route path="chat" element={<Chat />} />
        <Route
          path="image-generator"
          element={<ImageGenerator />}
        />
        <Route
          path="code-generator"
          element={<CodeGenerator />}
        />
        <Route
          path="resume-builder"
          element={<ResumeBuilder />}
        />
        <Route
          path="translator"
          element={<Translator />}
        />
        <Route
          path="speech-to-text"
          element={<SpeechToText />}
        />
        <Route
          path="data-analyzer"
          element={<DataAnalyzer />}
        />
        <Route
          path="assistant"
          element={<Assistant />}
        />
        <Route
          path="profile"
          element={<Profile />}
        />
        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
}