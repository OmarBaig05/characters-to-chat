import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Index from "./pages/Index";
import Games from "./pages/Games";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import ConnectWallet from "./pages/ConnectWallet";
import PromptWars from "./pages/PromptWars";
import DarkSanta from "./pages/DarkSanta";
import Navbar from "./components/Navbar";
import RockPaperDomiate from "./pages/RockPaperDominate";
import QuadraBlaze from "./pages/QuadraBlaze";
import CreateNewAgent from "./pages/CreateNewAgent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<Games />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/connect-wallet" element={<ConnectWallet />} />
            <Route path="/prompt-wars" element={<PromptWars />} />
            <Route path="/dark-santa" element={<DarkSanta />} />   
            <Route path="/create-agent" element={<CreateNewAgent />} />                     
            <Route path="/rock-paper-dominate" element={<RockPaperDomiate />} />
            <Route path="/quadra-blaze" element={<QuadraBlaze />} />
            <Route path="/prompt-wars/:model" element={<DarkSanta />} />
            <Route path="/rock-paper-dominate/:model" element={<DarkSanta />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;