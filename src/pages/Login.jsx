import { motion } from "framer-motion";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import AuthBackground from "../components/auth/AuthBackground";

export default function Login() {
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
          <LoginForm />
        </AuthLayout>
      </motion.div>
    </>
  );
}