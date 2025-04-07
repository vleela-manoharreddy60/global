import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, MessageCircle, Star, Users, Globe, Briefcase, MapPin, Plus } from "lucide-react"

export default function FindPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Find Connections</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Network with other professionals, build connections, and discover opportunities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-effect rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Search for Professionals</h2>
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="Search by name, skill, or location..." className="pl-10 py-6 text-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="skill" className="block text-sm font-medium mb-2">
                    Skills
                  </label>
                  <select id="skill" className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="">All Skills</option>
                    <option value="web-dev">Web Development</option>
                    <option value="design">Design</option>
                    <option value="writing">Writing</option>
                    <option value="marketing">Marketing</option>
                    <option value="admin">Admin Support</option>
                    <option value="engineering">Engineering</option>
                    <option value="construction">Construction</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Location
                  </label>
                  <Input id="location" placeholder="Anywhere" />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium mb-2">
                    Availability
                  </label>
                  <select id="availability" className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="">Any Availability</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="hourly">Hourly</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Search Professionals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recommended Connections</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Professional 1 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">JS</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">John Smith</h3>
                        <p className="text-muted-foreground">Full-Stack Developer</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">4.9</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Node.js</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">MongoDB</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional 2 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">EL</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Emily Lee</h3>
                        <p className="text-muted-foreground">UI/UX Designer</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">4.8</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Figma</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Adobe XD</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Prototyping</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional 3 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">MR</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                        <p className="text-muted-foreground">Construction Manager</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">4.7</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Renovation</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        Project Management
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Carpentry</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Chicago, IL</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional 4 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">SP</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Sarah Parker</h3>
                        <p className="text-muted-foreground">Content Strategist</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm">5.0</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">SEO</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Copywriting</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        Content Marketing
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Austin, TX</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                View More Professionals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Communities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join professional communities to connect with like-minded individuals, share knowledge, and find
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Tech Innovators</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>5.2K members</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  A community for tech professionals to discuss emerging technologies, share projects, and collaborate.
                </p>
                <Button className="w-full">Join Community</Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-40 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Creative Minds</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>3.8K members</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Connect with designers, artists, and creative professionals to share inspiration and feedback.
                </p>
                <Button className="w-full">Join Community</Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl overflow-hidden hover-glow">
              <div className="h-40 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Skilled Trades</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>2.5K members</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  A community for construction, electrical, plumbing, and other skilled trade professionals.
                </p>
                <Button className="w-full">Join Community</Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">
              Explore All Communities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>

            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-sm">May 2025</div>
                      <div className="text-xs text-muted-foreground">7:00 PM EST</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">The Future of Remote Work</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Globe className="h-4 w-4 mr-1" />
                      <span>Virtual Event</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Join industry experts as they discuss the evolving landscape of remote work and share strategies
                      for success in a distributed workforce.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm">Register Now</Button>
                      <Button size="sm" variant="outline">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">22</div>
                      <div className="text-sm">May 2025</div>
                      <div className="text-xs text-muted-foreground">6:30 PM CST</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">Networking Mixer for Creatives</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Chicago, IL</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      An in-person networking event for designers, writers, and other creative professionals to connect,
                      share ideas, and explore collaboration opportunities.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm">Register Now</Button>
                      <Button size="sm" variant="outline">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">30</div>
                      <div className="text-sm">May 2025</div>
                      <div className="text-xs text-muted-foreground">1:00 PM PST</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">Building Your Personal Brand Workshop</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Globe className="h-4 w-4 mr-1" />
                      <span>Virtual Event</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Learn how to build and leverage your personal brand to attract clients and opportunities in this
                      interactive workshop led by marketing experts.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm">Register Now</Button>
                      <Button size="sm" variant="outline">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expand Your Professional Network</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with professionals, join communities, and attend events to grow your network and discover new
            opportunities.
          </p>
          <Button size="lg" className="animate-pulse-glow">
            Start Networking Today
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

