import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowRight, Clock, DollarSign, MapPin, Star } from "lucide-react"
import Image from "next/image"

export default function GrabPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Grab Opportunities</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find work that matches your skills and interests from providers worldwide.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Find Work</h2>
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input placeholder="Search for jobs, skills, or keywords..." className="pl-10 py-6 text-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select id="category" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option value="">All Categories</option>
                      <option value="tech">Technology & IT</option>
                      <option value="design">Design & Creative</option>
                      <option value="writing">Writing & Translation</option>
                      <option value="marketing">Marketing & Sales</option>
                      <option value="admin">Admin & Support</option>
                      <option value="finance">Finance & Accounting</option>
                      <option value="legal">Legal</option>
                      <option value="engineering">Engineering & Architecture</option>
                      <option value="labor">Physical Labor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      Location
                    </label>
                    <Input id="location" placeholder="Anywhere" />
                  </div>

                  <div>
                    <label htmlFor="job-type" className="block text-sm font-medium mb-2">
                      Job Type
                    </label>
                    <select id="job-type" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option value="">All Types</option>
                      <option value="remote">Remote</option>
                      <option value="onsite">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="w-full md:w-auto">
                    <Search className="mr-2 h-4 w-4" />
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recommended for You</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h3 className="font-bold">Available Jobs</h3>
                <span className="text-sm text-muted-foreground">(125 jobs found)</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                  <option value="relevant">Most Relevant</option>
                  <option value="recent">Most Recent</option>
                  <option value="budget-high">Highest Budget</option>
                  <option value="budget-low">Lowest Budget</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {/* Job 1 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500 mr-2">New</span>
                      <span className="text-sm text-muted-foreground">Posted 6 hours ago</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Mobile App Developer for Fitness App</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React Native</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Firebase</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">UI/UX</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>$3,000 - $5,000</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>2-3 months</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Remote</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      Looking for an experienced mobile app developer to create a fitness tracking app with social
                      features. The app should include workout tracking, nutrition logging, and community challenges...
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">FT</span>
                      </div>
                      <div>
                        <div className="font-medium">FitTech Inc.</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="ml-1">4.8</span>
                          <span className="text-muted-foreground ml-1">(24 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Button>Submit Proposal</Button>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500 mr-2">New</span>
                      <span className="text-sm text-muted-foreground">Posted 1 day ago</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Writer for Tech Blog</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Content Writing</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">SEO</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Technology</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>$50 - $100 per article</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Ongoing</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Remote</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      We're looking for an experienced content writer to create engaging, informative articles for our
                      tech blog. Topics will include AI, blockchain, cybersecurity, and emerging technologies...
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">TI</span>
                      </div>
                      <div>
                        <div className="font-medium">TechInsider</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="ml-1">4.9</span>
                          <span className="text-muted-foreground ml-1">(56 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Button>Submit Proposal</Button>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-muted-foreground">Posted 3 days ago</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Home Renovation - Kitchen and Bathroom</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Construction</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Plumbing</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Electrical</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Interior Design</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>$15,000 - $25,000</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>2-3 months</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Chicago, IL</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      Looking for a contractor to renovate our kitchen and two bathrooms. Work includes new cabinets,
                      countertops, flooring, plumbing, and electrical updates. Must be licensed and insured...
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">MJ</span>
                      </div>
                      <div>
                        <div className="font-medium">Michael Johnson</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="ml-1">4.7</span>
                          <span className="text-muted-foreground ml-1">(8 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Button>Submit Proposal</Button>
                  </div>
                </div>
              </div>

              {/* Job 4 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-muted-foreground">Posted 5 days ago</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">E-commerce Website Development</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Shopify</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Web Development</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">UI/UX</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>$4,000 - $6,000</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>1-2 months</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>Remote</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">
                      We need a Shopify expert to develop a custom e-commerce website for our fashion brand. The site
                      should include product customization features, advanced filtering, and integration with our
                      inventory management system...
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">SF</span>
                      </div>
                      <div>
                        <div className="font-medium">StyleFusion</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="ml-1">4.5</span>
                          <span className="text-muted-foreground ml-1">(12 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Button>Submit Proposal</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Showcase Your Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create a profile that highlights your expertise and attracts potential clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-effect rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <Button variant="outline" className="w-full">
                  Upload Profile Picture
                </Button>
              </div>

              <div className="md:w-2/3 space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Professional Title
                  </label>
                  <Input id="title" placeholder="e.g., Full-Stack Developer, Graphic Designer" />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium mb-2">
                    Skills
                  </label>
                  <Input id="skills" placeholder="e.g., JavaScript, Photoshop, Carpentry (comma separated)" />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-32"
                    placeholder="Tell potential clients about yourself, your experience, and what makes you unique..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                    Portfolio Items
                  </label>
                  <div className="border border-dashed border-input rounded-md p-8 text-center">
                    <p className="text-muted-foreground mb-4">Drag and drop files here, or click to browse</p>
                    <Button variant="outline" size="sm">
                      Upload Files
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Save Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Success Stories from Grabbers</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear from professionals who have found success on our platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">AK</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Alex Kim</h3>
              <p className="text-sm text-muted-foreground mb-4">Web Developer</p>
              <div className="flex justify-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-muted-foreground">
                "GlobalWork helped me find clients from around the world. I've been able to build a sustainable
                freelance career and work on projects I'm passionate about."
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">MP</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Maria Perez</h3>
              <p className="text-sm text-muted-foreground mb-4">Interior Designer</p>
              <div className="flex justify-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-muted-foreground">
                "I started as a part-time designer, but the opportunities on GlobalWork allowed me to turn my passion
                into a full-time career. The platform's flexibility is unmatched."
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">JT</span>
              </div>
              <h3 className="text-xl font-bold mb-2">James Thompson</h3>
              <p className="text-sm text-muted-foreground mb-4">Electrician</p>
              <div className="flex justify-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-muted-foreground">
                "As a skilled tradesperson, I was skeptical about online platforms. GlobalWork surprised me by
                connecting me with local clients who needed my expertise for their projects."
              </p>
            </div>
          </div>

          <Button className="mt-12 group">
            Read More Success Stories
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

