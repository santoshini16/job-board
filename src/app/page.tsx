import Image from "next/image";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import {withAuth,getSignInUrl,getSignUpUrl} from "@workos-inc/authkit-nextjs";

export default async function Home() {
  const {user} = await withAuth();
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();
  return (
    <div>
      <Hero/>
      <Jobs/>
    </div>
  );
}
