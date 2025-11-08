import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { SignupForm } from "@/components/signup-form";
import MainLayout from "../../components/layout/MainLayout";

export default function Register() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: { email: string; firstName: string; lastName: string; phone?: string; password: string }) => {
    setError("");
    setIsLoading(true);

    try {
      await auth?.signUp(data);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <SignupForm onSubmit={handleSubmit} error={error} isLoading={isLoading} />
        </div>
      </div>
    </MainLayout>
  );
}
