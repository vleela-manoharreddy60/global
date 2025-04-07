import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">GlobalWork</h3>
            <p className="text-muted-foreground">
              Connecting talent with opportunity, fostering a global community of skilled professionals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/provide" className="text-foreground/70 hover:text-primary">
                  Provide Work
                </Link>
              </li>
              <li>
                <Link href="/grab" className="text-foreground/70 hover:text-primary">
                  Grab Opportunities
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-foreground/70 hover:text-primary">
                  Manage Work
                </Link>
              </li>
              <li>
                <Link href="/find" className="text-foreground/70 hover:text-primary">
                  Find Connections
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-foreground/70 hover:text-primary">
                  Your Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and opportunities.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-background/50" />
              <Button size="sm" className="shrink-0">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GlobalWork. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

