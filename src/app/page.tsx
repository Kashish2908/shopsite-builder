"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StepCards from "../components/StepCards";
import PickLook from "../components/PickLook";
import ShopForm from "@/components/ShopForm";
import themes from "../data/themes";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState("Lilac");
  const activeTheme = themes.find((t) => t.name === selectedTheme)!;

  return (
    <div id="main-wrapper">
      {/* Section 1 */}
      <section className="min-h-screen px-5 py-3 flex flex-col">
        <Navbar />

        <div className="flex-1 flex flex-col justify-center py-12">
          <Hero />
          <StepCards />
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen px-5 py-16">
        <div className="max-w-5xl mx-auto">
          <PickLook
            // selectedTheme={selectedTheme}
            // onSelect={setSelectedTheme}
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen px-5 py-16">
        <div className="max-w-5xl mx-auto">
          <ShopForm theme={activeTheme} />
        </div>
      </section>
    </div>
  );
}