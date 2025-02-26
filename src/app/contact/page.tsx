"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    
    
    <div className="flex items-center justify-center bg-[#121235] h-[40rem] rounded-2xl w-full">
      <Meteors number={60}></Meteors>
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
           email us
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          muzahirraza509@gmail.com
        </TextRevealCardDescription>
        
      </TextRevealCard>
    </div>
    
  );
}
