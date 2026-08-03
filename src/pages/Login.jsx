import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import AuthBackground from "../components/auth/AuthBackground";

export default function Login() {
  const location = useLocation();
  return (
    <>
      <AuthBackground />

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -80, opacity: 0 }}
        transition={{ duration: 0.45 }}
      >
        <AuthLayout
          title="Welcome Back 👋"
          subtitle="Sign in to continue your AI journey."
        >
          {location.state?.fromPricing && (
            <div className="mb-5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-center text-cyan-300">
              Login first to upgrade your account to <b>Pro</b>
            </div>
          )}
          <LoginForm />
        </AuthLayout>
      </motion.div>
    </>
  );
}