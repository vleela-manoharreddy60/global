import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Filter,
  ArrowRight,
  Clock,
  DollarSign,
  MessageCircle,
  FileText,
  AlertCircle,
  ThumbsUp,
  Calendar,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Manage Your Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track progress, communicate with clients or professionals, and ensure successful project completion.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Your Dashboard</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option value="all">All Projects</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2 text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2 text-yellow-500">3</div>
                  <div className="text-sm text-muted-foreground">Pending Proposals</div>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2 text-green-500">12</div>
                  <div className="text-sm text-muted-foreground">Completed Projects</div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Upcoming Deadlines</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Calendar
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-500 mr-3" />
                    <div>
                      <div className="font-medium">Mobile App UI Design</div>
                      <div className="text-sm text-muted-foreground">Due in 2 days</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Project
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-500 mr-3" />
                    <div>
                      <div className="font-medium">Content Writing - Blog Series</div>
                      <div className="text-sm text-muted-foreground">Due tomorrow</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Project
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">E-commerce Website Development</div>
                      <div className="text-sm text-muted-foreground">Due in 5 days</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Project
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="outline">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Active Projects</h2>

            <div className="space-y-8">
              {/* Project 1 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Mobile App UI Design</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-500">In Progress</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Client</div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold text-xs">TI</span>
                      </div>
                      <span>TechInnovate</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Deadline</div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>May 15, 2025</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Budget</div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>$2,500</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Messages (5 new)
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Files (12)
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Milestones
                  </Button>
                  <Button size="sm">View Project</Button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Content Writing - Blog Series</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-500">
                    Needs Attention
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Client</div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold text-xs">GH</span>
                      </div>
                      <span>GreenHealth</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Deadline</div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-yellow-500 font-medium">May 10, 2025 (Tomorrow)</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Budget</div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>$800</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>

                <div className="p-4 bg-yellow-500/10 rounded-lg mb-6 flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-yellow-500">Attention Required</div>
                    <p className="text-sm text-muted-foreground">
                      Client has requested revisions on the first three blog posts. Please review their comments and
                      update the content.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Messages (3 new)
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Files (8)
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Milestones
                  </Button>
                  <Button size="sm">View Project</Button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="glass-effect rounded-xl p-6 hover-glow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">E-commerce Website Development</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-500">On Track</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Client</div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        <span className="text-primary font-bold text-xs">SF</span>
                      </div>
                      <span>StyleFusion</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Deadline</div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>May 20, 2025</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Budget</div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>$5,000</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="p-4 bg-green-500/10 rounded-lg mb-6 flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-green-500">Milestone Approved</div>
                    <p className="text-sm text-muted-foreground">
                      Client has approved the product catalog and checkout flow. You can proceed with the payment
                      integration.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Files (15)
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Milestones
                  </Button>
                  <Button size="sm">View Project</Button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Management Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GlobalWork provides powerful tools to help you manage your projects efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Messaging System</h3>
              <p className="text-muted-foreground">
                Communicate directly with clients or professionals through our secure messaging system, keeping all
                project-related discussions in one place.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">File Sharing</h3>
              <p className="text-muted-foreground">
                Share and organize project files securely, with version control and preview capabilities for most file
                types.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-glow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Milestone Tracking</h3>
              <p className="text-muted-foreground">
                Break projects into manageable milestones, track progress, and ensure timely completion with our
                milestone tracking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Managing Your Projects?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is available to help you navigate any challenges and ensure your projects run smoothly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Contact Support</Button>
            <Button variant="outline" size="lg">
              View Tutorials
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

