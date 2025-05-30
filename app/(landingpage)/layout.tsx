import NavBar from "@/app/(landingpage)/_components/NavBar";
// import LogoAnimated from "@/components/general/LogoAnimated";
// import LogoText from "@/components/general/LogoText";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


// export default async function RootLayout({
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
//   const { userId } = await auth();
  // const { userId } = useAuth();
//   if (!userId) redirect('/sign-in');
  return (
    // <ClerkProvider>
   
    <>
        <header className="flex justify-between items-center p-4 gap-4 h-16
           border-b-[1px] shadow-sm">
          <>
               <NavBar />
               unprotected navbar
          </>

          <div className="">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>



        </header>
        <>
          <div className="container p-4">
            <p>unauthenticated routes</p>
          </div>
        </>
        {children}
     </>
  )
}