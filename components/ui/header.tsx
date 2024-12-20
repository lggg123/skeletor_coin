"use client";

import { Button } from "@/components/ui/button";
import { Skull } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full bg-purple-900/80 backdrop-blur-sm border-b border-purple-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Skull className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">$SKELETOR</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-purple-200">
            {/* <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">How to Buy</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Tokenomics</a> */}
          </nav>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}