'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    //Only for testing use cookie instead
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      router.push("/start_screen");
    }
  }, []);

  return (
    <section>
    <div className="flex h-screen w-screen items-center justify-center">
      <h1>GEOMETRIX</h1>
    </div>
  </section>
  );

}
