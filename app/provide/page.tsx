'use client';
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Filter,
  Plus,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Briefcase,
  Globe,
} from "lucide-react"

export default function ProvidePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Provide Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Post job opportunities and find skilled professionals to complete your projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Job Title
                </label>
                <Input id="title" placeholder="e.g., Website Development, House Renovation" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select id="category" className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="">Select a category</option>
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
                  <label htmlFor="type" className="block text-sm font-medium mb-2">
                    Job Type
                  </label>
                  <select id="type" className="w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="">Select job type</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <div className="flex items-center">
                    <select className="w-20 rounded-l-md border border-input bg-background px-3 py-2">
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                      <option value="gbp">GBP</option>
                    </select>
                    <Input id="budget-min" placeholder="Min" className="rounded-none border-l-0" />
                    <span className="px-2 border-y border-input bg-background">-</span>
                    <Input id="budget-max" placeholder="Max" className="rounded-r-md" />
                  </div>
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium mb-2">
                    Deadline
                  </label>
                  <Input id="deadline" type="date" />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Location (for on-site work)
                </label>
                <Input id="location" placeholder="e.g., New York, NY" />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Job Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe the job in detail, including requirements and expectations..."
                  rows={6}
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium mb-2">
                  Required Skills
                </label>
                <Input id="skills" placeholder="e.g., JavaScript, Plumbing, Graphic Design (comma separated)" />
              </div>

              <div className="flex justify-end">
                <Button className="w-full md:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  Post Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Your Posted Jobs</h2>

          <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search your jobs..." className="pl-10" />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                <option value="recent">Most Recent</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {/* Active Job */}
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500 mr-2">Active</span>
                    <span className="text-sm text-muted-foreground">Posted 2 days ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Full-Stack Web Developer Needed</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Node.js</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">MongoDB</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">AWS</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>$2,000 - $3,000</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>Due in 14 days</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>Remote</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-2">
                    Looking for an experienced full-stack developer to build a responsive web application with React
                    frontend and Node.js backend...
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="text-right mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Proposals</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Proposals
                    </Button>
                    <Button size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress Job */}
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-500 mr-2">
                      In Progress
                    </span>
                    <span className="text-sm text-muted-foreground">Posted 1 week ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Logo Design for Tech Startup</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Graphic Design</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Branding</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Logo</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>$500 - $800</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>Due in 5 days</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>Remote</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-2">
                    Need a modern, minimalist logo for a tech startup in the AI space. Should convey innovation and
                    trustworthiness...
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="text-right mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Assigned to</div>
                    <div className="font-medium">Sarah Johnson</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Button size="sm">View Progress</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Job */}
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-500 mr-2">
                      Completed
                    </span>
                    <span className="text-sm text-muted-foreground">Posted 1 month ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Office Renovation Project</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Construction</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Interior Design</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Carpentry</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>$8,000</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-green-500">Completed</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>New York, NY</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-2">
                    Complete renovation of a 2000 sq ft office space, including new flooring, walls, lighting, and
                    custom furniture installation...
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="text-right mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Completed by</div>
                    <div className="font-medium">BuildRight Construction</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Leave Review</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">
              View All Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Post Jobs on GlobalWork?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers unique advantages for those looking to find skilled professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Talent Pool</h3>
              <p className="text-muted-foreground">
                Access skilled professionals from over 120 countries, ensuring you find the perfect match for your
                project.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Work Options</h3>
              <p className="text-muted-foreground">
                Post remote, on-site, or hybrid jobs, with support for both technical and physical labor tasks.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Our rating system and verification process ensures you connect with reliable, skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find the Perfect Professional?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Post your job today and start receiving proposals from skilled professionals worldwide.
          </p>
          <Button size="lg" className="animate-pulse-glow">
            <Plus className="mr-2 h-5 w-5" />
            Post a New Job
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

