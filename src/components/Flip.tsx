import React from 'react'
import { FlipWords } from "./ui/flip-words";


function Flip() {
        const words = ["better", "cute", "beautiful", "modern"];
        return (
            <div className="h-[40rem] flex justify-center items-center px-4">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              thoughts
                <FlipWords words={words} /> <br />
                Music is very spiritual, it has the power to bring people together
              </div>
            </div>
          );
}

export default Flip