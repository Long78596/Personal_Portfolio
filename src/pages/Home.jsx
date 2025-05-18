import { AboutSection } from "../Component/AboutSection";
import { HeroSection } from "../Component/HeroSection";
import { Navbar } from "../Component/Navbar";
import { ThemeToggle } from "../Component/ThemeToggle";
import {StarBackground} from "@/Component/StarBackground"
export const Home=()=>{
     return (
       <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
         {/* Theme Toggle */}
          <ThemeToggle />
         {/* Background Efffects */}
          <StarBackground />
         {/* Navbar */}
         <Navbar/>
         {/* Main content */}
         <main>
          <HeroSection />
          <AboutSection/>

         </main>

         {/* Footer */}
       </div>
     );
}