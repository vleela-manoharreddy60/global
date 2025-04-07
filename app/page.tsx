import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users, CheckCircle, Star, Globe, User } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How GlobalWork Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to connect talent with opportunity through a simple process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 text-center relative hover-glow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Register & Create Profile</h3>
              <p className="text-muted-foreground">
                Sign up and create your profile, showcasing your skills or requirements.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center relative hover-glow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Connect & Negotiate</h3>
              <p className="text-muted-foreground">
                Find the perfect match, connect, and negotiate terms that work for both parties.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center relative hover-glow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Work & Get Paid</h3>
              <p className="text-muted-foreground">
                Deliver quality work and receive payment through our secure platform.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Our Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GlobalWork offers five main sections to help you connect, work, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Provide</h3>
                <p className="text-muted-foreground mb-4">
                  Post job opportunities and find skilled professionals to complete your projects.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Post a Job
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Grab</h3>
                <p className="text-muted-foreground mb-4">
                  Showcase your skills and find work opportunities that match your expertise.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Find Work
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Work</h3>
                <p className="text-muted-foreground mb-4">
                  Manage ongoing projects, track progress, and ensure successful completion.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Manage Work
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-48 bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Find</h3>
                <p className="text-muted-foreground mb-4">
                  Network with other professionals, build connections, and discover opportunities.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Start Networking
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">You</h3>
                <p className="text-muted-foreground mb-4">
                  Manage your profile, track your activity, and build your professional reputation.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-green-500 flex items-center justify-center">
                <Star className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Success Stories</h3>
                <p className="text-muted-foreground mb-4">
                  Explore how GlobalWork has helped professionals and businesses worldwide.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from providers and grabbers who have found success on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a freelance developer, GlobalWork has been a game-changer. The flexible role system allows me to
                both find work and hire help when my projects get too big."
              </p>
              <div className="flex mt-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">Small Business Owner</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I needed help renovating my shop but didn't know where to find reliable contractors. GlobalWork
                connected me with skilled professionals in my area within hours."
              </p>
              <div className="flex mt-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert Johnson</h4>
                  <p className="text-sm text-muted-foreground">Graphic Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The networking features on GlobalWork have helped me build valuable connections with clients and other
                designers. It's more than just a job platform—it's a community."
              </p>
              <div className="flex mt-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Reach, Local Impact</h2>
              <p className="text-muted-foreground mb-6">
                GlobalWork connects talent with opportunity across more than 120 countries, ensuring that skills meet
                needs regardless of location.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>Access to international opportunities and talent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>Support for both remote and local, in-person work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>Multilingual support and regional specialists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>Cultural exchange and diverse perspectives</span>
                </li>
              </ul>
              <Button className="mt-6 group">
                Explore Global Opportunities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <div className="glass-effect rounded-xl p-4 animate-float">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Global Map"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-4 bg-background/80">
                <div className="flex items-center">
                  <Globe className="h-10 w-10 text-primary mr-4" />
                  <div>
                    <h4 className="font-bold">120+ Countries</h4>
                    <p className="text-sm text-muted-foreground">Connected through our platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform How You Work?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join GlobalWork today and become part of a community that's redefining the future of work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="animate-pulse-glow">
              Create Your Account
            </Button>
            <Button variant="outline" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

