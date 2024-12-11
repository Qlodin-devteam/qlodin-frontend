import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800">Welcome to Qlodin</h2>
        <p className="my-2 text-gray-600">Please follow through to enjoy our services.</p>
        <Link href="/signuppage"> <Button>Sign up</Button></Link> 
      </div>
    </div>
  );
}
