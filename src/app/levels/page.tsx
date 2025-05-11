"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/header";
import { Level } from "../components/level";

const StartScreen = () => {

    const router = useRouter();

    useEffect(() => {
        //Only for testing use cookie instead
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login");
        } else {
            // router.push("/start_screen");
        }
    }, []);

    return (
        <section>
            <Header />
            <Level />
            <Footer />
        </section>
    );
};

export default StartScreen;
