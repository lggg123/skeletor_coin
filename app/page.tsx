"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet2, ArrowRight, Coins, Copy } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "AYT28THaywY1LTVroEFqVj8bRats45YChvUSn1eumoon"; // Replace with actual token address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            $SKELE
          </h1>
          <p className="text-2xl max-w-2xl text-purple-200">
            BY THE POWER OF MEMECOINS! The most powerful memecoin in the universe!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
            Buy Now
          </Button>
          <Button 
            onClick={copyToClipboard}
            className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 flex items-center gap-2"
          >
            <Copy className="h-4 w-4" />
            {copied ? "Copied!" : "Copy Token Address"}
          </Button>
        </div>
      </div>

      {/* Image Bubbles Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "/skele_1.jpg",
            "/skele_2.jpg",
            "/skele_3.jpg",
            "/skele_4.jpg",
          ].map((src, index) => (
            <div 
              key={index}
              className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg 
                         transition-transform duration-300 hover:scale-105 
                         border-2 border-purple-500"
            >
              <img
                src={src}
                alt={`Skeletor Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* How to Buy Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">How to Join Castle Grayskull</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-purple-900/50 border-purple-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet2 className="h-6 w-6" />
                Create Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              Download Phantom or your preferred wallet and add some SOL for trading
            </CardContent>
          </Card>

          <Card className="bg-purple-900/50 border-purple-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-6 w-6" />
                Connect Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              Connect your wallet to pump.fun and prepare for interdimensional trading
            </CardContent>
          </Card>

          <Card className="bg-purple-900/50 border-purple-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-6 w-6" />
                Swap for $SKELE
              </CardTitle>
            </CardHeader>
            <CardContent>
              Swap your $SOL for $SKELE and join the most powerful army in crypto
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/skeletor_cart.jpg"
              alt="Mystical Castle"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-purple-300">About $SKELETOR</h2>
            <p className="text-lg text-purple-100">
              $SKELETOR is not just another memecoin – it's a movement! Born from the depths of Castle Grayskull, 
              this token aims to become the most powerful force in the cryptoverse. With our community of 
              loyal minions and a dash of evil genius, we're taking over the blockchain one laugh at a time.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>0% Tax</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>LP Locked</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">•</span>
                <span>Contract Renounced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}