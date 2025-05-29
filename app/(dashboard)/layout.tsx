// import NavBar from "@/app/(landingpage)/_components/NavBar";
// import LogoAnimated from "@/components/general/LogoAnimated";
// import LogoText from "@/components/general/LogoText";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DasboardNavBar from "./_components/DasboardNavBar";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { userId } = await auth();
  // const { userId } = useAuth();

  if (!userId) redirect('/sign-in');
  return (
    // <ClerkProvider>
    
        <>
        <div className=" container mx-auto my-auto">
        <header className="h-[8vh] md:h-[10vh] sm:h-[8vh] flex justify-between items-center px-[5px] md:p-4 gap-4
           border-b-[1px] shadow-sm">
          <>
            <DasboardNavBar />

          </>

          <div className="">
            <SignedOut >
              <SignInButton  />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>



        </header>
        </div>
        <>
         
        </>
        {children}
      </>
  )
}