import {SignUp} from "@clerk/nextjs";


export default function Page() {
    return  <SignUp 
      afterSignUpUrl="/dashboard"
      afterSignInUrl="/dashboard"
    

    />;
}
