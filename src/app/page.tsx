import Header from "@/components/Header";
import { LoginForm } from "@/components/login-form";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-w-[1020px] min-h-[676px]  flex flex-row">
        <div className="min-w-[488px] min-h-[592px] flex flex-col mx-4 items-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4 text-center text-black" >Hi, Champ!</h1>
          <p className="text-lg font-bold text-primary-foreground mb-4 text-center text-black">Lets level up your learning journey.Sign in to start achieving your goals</p>
          <Image
                      src="/images/Launch.svg"
                      alt="Sign In Pic"
                      width={424}
                      height={424}
                    />
        </div>
        <div className="min-w-[468px] min-h-[604px] flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
