import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SignIn
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
        appearance={{
          elements: {
            card: "bg-white shadow-md p-6 rounded-lg",
            // headerTitle: "hidden",
             headerTitle: "text-2xl font-bold text-center text-blue-600",
            footer: "relative pt-4",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
          },
          variables: {
            colorPrimary: "#1E40AF", // Tailwind's blue-800
            colorText: "#1F2937",    // Tailwind's gray-800
          },
        }}
        // logoImageUrl="/logos/logo.svg" // Place logo.png in /public folder
      />
    </div>
  );
}
