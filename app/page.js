"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleLogin = async () => {
    // Add authentication API logic here
    if (email && password) {
      setStep(2);
    }
  };

  const handleOtpVerify = async () => {
    // Verify OTP (Replace with API logic)
    if (otp === "123456") {
      // Example OTP
      const userRole = "doctor"; // Fetch role from backend
      const userID = "doc1234" // Fetch id from backend
      navigateToDashboard(userRole, userID);
    }
  };

  const navigateToDashboard = (role, id) => {
    switch (role) {
      case "admin":
        router.push("/admin/id");
        break;
      case "doctor":
        router.push(`/${role}/${id}`);
        break;
      case "dietician":
        router.push("/dietician/id");
        break;
      case "patient":
        router.push("/patient/id");
        break;
      default:
        router.push("/");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md p-6">
          <div className="flex justify-center mb-4">
            <Image src="/next.svg" alt="Logo" width={100} height={100} />
          </div>
          <CardHeader>
            <CardTitle className="text-center">
              {step === 1 ? "Login" : "Enter OTP"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <>
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4"
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-4"
                />
                <Button className="w-full" onClick={handleLogin}>
                  Next
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="flex justify-center items-center gap-4">
                    <InputOTP
                      maxLength={6}
                      value={otp}
                      onChange={(otp) => setOtp(otp)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div className="text-center text-sm">
                    {otp === "" ? (
                      <>Enter your one-time password.</>
                    ) : (
                      <>You entered: {otp}</>
                    )}
                  </div>
                  <Button className="w-full" onClick={handleOtpVerify}>
                    Verify OTP
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
