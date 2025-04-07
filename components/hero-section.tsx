"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users, Globe, Zap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"provider" | "grabber">("provider")

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden grid-animation">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Global Work Platform</span>
            <br />
            <span>Connecting Talent with Opportunity</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Eliminating unemployment by ensuring any job can be accomplished through our global network of skilled
            professionals.
          </p>

          {/* Role Selector */}
          <div className="inline-flex p-1 mb-8 bg-secondary/30 rounded-full">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "provider" ? "bg-primary text-primary-foreground" : "hover:bg-secondary/50"
              }`}
              onClick={() => setActiveTab("provider")}
            >
              I want to provide work
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "grabber" ? "bg-primary text-primary-foreground" : "hover:bg-secondary/50"
              }`}
              onClick={() => setActiveTab("grabber")}
            >
              I want to grab work
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              {activeTab === "provider" ? "Post a Job" : "Find Work"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn How It Works
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-effect rounded-xl p-6 text-center hover-glow">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p className="text-muted-foreground">Jobs Completed</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center hover-glow">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50,000+</h3>
            <p className="text-muted-foreground">Skilled Professionals</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center hover-glow">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">120+</h3>
            <p className="text-muted-foreground">Countries Covered</p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mt-20 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">How GlobalWork is Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Roles</h3>
              <p className="text-muted-foreground">Switch between Provider and Grabber roles based on your needs.</p>
            </div>
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Connect with skilled professionals and clients worldwide.</p>
            </div>
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">All Skills Welcome</h3>
              <p className="text-muted-foreground">
                From technical expertise to physical labor, all skills are valued.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-muted-foreground">Build connections through our dedicated networking section.</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our global community today and start connecting with opportunities or talent.
          </p>
          <Button size="lg" className="animate-pulse-glow">
            Create Your Account
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

