"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../components/header";
import { Level } from "../../components/level";
import { Footer } from "../../components/footer";

const LevelsClient = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <section>
      <Header />
      <Level />
      <Footer />
    </section>
  );
};

export default LevelsClient;
