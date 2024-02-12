import { Inter } from "next/font/google";
import ThemeButton from "./ThemeButton";
import Header from "./Header";
import FontButton from "./FontButton";
import Card from "./Card";

/* 
tutorial/steps examples to use redux:
https://redux.js.org/tutorials/quick-start */

/* 
  Throughout the code ive tried to comment out the original project's code which ive replaced with Redux stuff!

 OBS!!!!! remember this in tailwind.config.js:
darkMode: "class",
 */

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" text-black dark:text-white bg-white dark:bg-[#23272F] min-h-screen "> 
      <Header>
        <ThemeButton /> {/* // TODO? make ThemeButton send a color we want to use in darkmode? 'dark:bg-[color]' */}
      </Header>

      <main
        className={`pt-[5rem] pb-[0.5rem] bg-[#EEEFF2] dark:bg-[#1A1C21] ${inter.className}`}
      >
        <Card>
          <FontButton />
        </Card>

        <Card>
          <h1>Projects</h1>
        </Card>
      </main>
    </div>
  );
}
