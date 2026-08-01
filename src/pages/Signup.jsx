import { motion } from "framer-motion";
import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";
import AuthBackground from "../components/auth/AuthBackground";

export default function Signup() {
  return (
    <>
      <AuthBackground />

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 80, opacity: 0 }}
        transition={{ duration: 0.45 }}
      >
        <AuthLayout
          title="Create Account"
          subtitle="Join AI Creator Hub today."
        >
          <SignupForm />
        </AuthLayout>
      </motion.div>
    </>
  );
}