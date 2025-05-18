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
         {/* Main content */}

         {/* Footer */}
       </div>
     );
}