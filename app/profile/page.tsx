'use client';
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Settings, Star, Edit, MapPin, Briefcase, Clock, ChevronRight, Globe, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative group">
                    <Image 
                      src="/placeholder.svg?height=300&width=300" 
                      alt="Profile Picture" 
                      width={300} 
                      height={300}
                      className="rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="ghost" size="sm" className="text-white">
                        <Edit className="h-5 w-5 mr-2" />
                        Change Photo
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="ml-1 font-bold">4.9</span>
                        <span className="text-sm text-muted-foreground ml-1">(24 reviews)</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Member since May 2023</span>
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>alex.johnson@example.com</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                          <a href="#" className="text-primary hover:underline">portfolio-website.com</a>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Node.js</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">TypeScript</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">MongoDB</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">AWS</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Docker</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Alex Johnson</h1>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Settings
                      </Button>
                      <Button size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">About Me</h2>
                    <p className="text-muted-foreground">
                      Full-stack developer with 5+ years of experience building web applications using React, Node.js, and TypeScript. Passionate about creating intuitive user experiences and scalable backend systems. I've worked with startups and enterprise clients across various industries, including fintech, e-commerce, and healthcare.
                    </p>
                  </div>
                  
                  <Tabs defaultValue="portfolio">
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                      <TabsTrigger value="work-history">Work History</TabsTrigger>
                      <TabsTrigger value="certifications">Certifications</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="portfolio" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-effect rounded-xl overflow-hidden hover-glow">
                          <div className="aspect-video bg-primary/10">
                            <Image 
                              src="/placeholder.svg?height=200&width=400" 
                              alt="Project 1" 
                              width={400} 
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-1">E-commerce Platform</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              A full-stack e-commerce solution with React, Node.js, and MongoDB.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">View Project</Button>
                          </div>
                        </div>
                        
                        <div className="glass-effect rounded-xl overflow-hidden hover-glow">
                          <div className="aspect-video bg-primary/10">
                            <Image 
                              src="/placeholder.svg?height=200&width=400" 
                              alt="Project 2" 
                              width={400} 
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-1">Task Management App</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              A collaborative task management application with real-time updates.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">View Project</Button>
                          </div>
                        </div>
                        
                        <div className="glass-effect rounded-xl overflow-hidden hover-glow">
                          <div className="aspect-video bg-primary/10">
                            <Image 
                              src="/placeholder.svg?height=200&width=400" 
                              alt="Project 3" 
                              width={400} 
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-1">Healthcare Dashboard</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              A data visualization dashboard for healthcare analytics.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">View Project</Button>
                          </div>
                        </div>
                        
                        <div className="glass-effect rounded-xl overflow-hidden hover-glow">
                          <div className="aspect-video bg-primary/10">
                            <Image 
                              src="/placeholder.svg?height=200&width=400" 
                              alt="Project 4" 
                              width={400} 
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-1">Social Media App</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              A mobile-first social media application with React Native.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">View Project</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button variant="outline">
                          View All Projects
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="reviews" className="space-y-6">
                      <div className="space-y-4">
                        <div className="glass-effect rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">TI</span>
                              </div>
                              <div>
                                <div className="font-bold">TechInnovate</div>
                                <div className="text-sm text-muted-foreground">April 2025</div>
                              </div>
                            </div>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Alex delivered exceptional work on our mobile app project. His technical expertise, communication skills, and ability to meet deadlines were outstanding. We'll definitely work with him again on future projects.
                          </p>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">SF</span>
                              </div>
                              <div>
                                <div className="font-bold">StyleFusion</div>
                                <div className="text-sm text-muted-foreground">March 2025</div>
                              </div>
                            </div>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Working with Alex on our e-commerce platform was a pleasure. He understood our requirements perfectly and delivered a solution that exceeded our expectations. His attention to detail and problem-solving skills are impressive.
                          </p>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">HC</span>
                              </div>
                              <div>
                                <div className="font-bold">HealthConnect</div>
                                <div className="text-sm text-muted-foreground">February 2025</div>
                              </div>
                            </div>
                            <div className="flex">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Alex developed a complex healthcare dashboard for our organization. His expertise in data visualization and ability to create intuitive interfaces made the project a success. He was responsive, professional, and delivered on time.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button variant="outline">
                          View All Reviews
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="work-history" className="space-y-6">
                      <div className="space-y-6">
                        <div className="glass-effect rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">Senior Full-Stack Developer</h3>
                              <div className="text-primary">TechInnovate</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Jan 2023 - Present
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Leading the development of web and mobile applications for enterprise clients. Responsible for architecture decisions, code reviews, and mentoring junior developers.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Node.js</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">TypeScript</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">AWS</span>
                          </div>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">Full-Stack Developer</h3>
                              <div className="text-primary">DigitalSolutions Inc.</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Mar 2020 - Dec 2022
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Developed and maintained web applications for clients in various industries. Collaborated with designers and product managers to deliver high-quality solutions.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Express</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">MongoDB</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Docker</span>
                          </div>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-lg">Frontend Developer</h3>
                              <div className="text-primary">WebCraft Studio</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Jun 2018 - Feb 2020
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Focused on building responsive and accessible user interfaces for web applications. Worked closely with UX designers to implement pixel-perfect designs.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">HTML/CSS</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">JavaScript</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">SASS</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="certifications" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols\>2 gap-6">
                        <div className="glass-effect rounded-xl p-6">
                          <h3 className="font-bold text-lg">AWS Certified Solutions Architect</h3>
                          <p className="text-sm text-muted-foreground">Issued by Amazon Web Services</p>
                          <p className="text-muted-foreground mt-2">
                            Valid until: December 2025
                          </p>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-6">
                          <h3 className="font-bold text-lg">Certified Kubernetes Administrator (CKA)</h3>
                          <p className="text-sm text-muted-foreground">Issued by The Linux Foundation</p>
                          <p className="text-muted-foreground mt-2">
                            Valid until: March 2026
                          </p>
                        </div>
);
                        
                        <div className="glass-effect rounded-xl p-6">
                          <h3 className="font-bold text-lg">Google Cloud Professional Cloud Architect</h3>
                          <p className="text-sm text-muted-foreground">Issued by Google Cloud</p>
                          <p className="text-muted-foreground mt-2">
                            Valid until: January 2026
                          </p>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-6">
                          <h3 className="font-bold text-lg">Certified ScrumMaster (CSM)</h3>
                          <p className="text-sm text-muted-foreground">Issued by Scrum Alliance</p>
                          <p className="text-muted-foreground mt-2">
                            Valid until: April 2025
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
