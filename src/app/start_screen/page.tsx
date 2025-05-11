"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Geometrix } from "../components/geometrix";

const StartScreen = () => {

  const router = useRouter();

  useEffect(() => {
    //Only for testing use cookie instead
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {

      setTimeout(() => {
        router.push("/levels");
      }, 5000);

    }
  }, []);

  return (
    <section>
      <div className="animate-bounce" >
        <Geometrix />
      </div>
    </section>
  );
};

export default StartScreen;
