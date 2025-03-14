import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code,
  GitPullRequest,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">CodeFoxAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              AI-Powered Code Reviews <br className="hidden sm:inline" />
              <span className="text-primary">in Seconds</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Automate your code reviews with AI. Get instant feedback, catch
              bugs, and improve code quality before merging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-2">
              <Button size="lg">
                <a
                  href="https://github.com/marketplace/ai-codefox"
                  target="_blank"
                  className="gap-2 flex flex-row items-center"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl border bg-background shadow-xl">
            <div className="p-4">
              <div className="flex items-center gap-2 border-b pb-4">
                <GitPullRequest className="h-5 w-5 text-primary" />
                <span className="font-medium">
                  Pull Request #1234: Add new authentication flow
                </span>
              </div>
              <div className="mt-4 space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex gap-3">
                  <Bot className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div className="space-y-2">
                    <div className="font-medium">CodeFoxAI</div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        I have reviewed your authentication flow implementation
                        and found a few issues:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          The password validation regex does not match the
                          requirements in the spec
                        </li>
                        <li>
                          There is a potential memory leak in the useEffect hook
                          on line 42
                        </li>
                        <li>
                          The error handling could be improved to provide more
                          user-friendly messages
                        </li>
                      </ul>
                      <p className="mt-2">
                        I have also suggested some performance optimizations in
                        the comments below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-24 space-y-16 mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Powerful Features for Better Code
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Our AI-powered review tool helps you ship better code faster with
              less back-and-forth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Instant Feedback</CardTitle>
                <CardDescription>
                  Get detailed code reviews within seconds of opening a pull
                  request.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No more waiting for team members to review your code. Our AI
                  provides immediate, actionable feedback so you can iterate
                  quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Bug Detection</CardTitle>
                <CardDescription>
                  Catch bugs, security issues, and edge cases before they reach
                  production.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our AI is trained on millions of code repositories and can
                  identify potential issues that humans might miss.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Code Quality</CardTitle>
                <CardDescription>
                  Improve code quality with suggestions for better patterns and
                  practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get recommendations for cleaner, more maintainable code that
                  follows best practices for your language and framework.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted/50 py-24">
          <div className="container space-y-16 mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                How It Works
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Integrate with your existing workflow in minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Connect Your Repository</h3>
                <p className="text-muted-foreground">
                  Install our GitHub app or integrate with GitLab, Bitbucket, or
                  Azure DevOps.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Configure Settings</h3>
                <p className="text-muted-foreground">
                  Set your preferences for review depth, focus areas, and
                  notification settings.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Get Automated Reviews</h3>
                <p className="text-muted-foreground">
                  Our AI automatically reviews every pull request and provides
                  detailed feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-24 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Everything you need to know about CodeFoxAI.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How accurate is the AI code review?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI has been trained on millions of code repositories and
                  achieves over 90% accuracy in identifying bugs and suggesting
                  improvements. However, we recommend using it as a complement
                  to human reviews, not a replacement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Which programming languages are supported?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We currently support JavaScript, TypeScript, Python, Java, C#,
                  Ruby, Go, PHP, and Rust. We are constantly adding support for
                  more languages based on user feedback.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Is my code secure with CodeFoxAI?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We take security seriously. Your code is encrypted
                  in transit and at rest. We do not store your code after the
                  review is complete, and we never use your proprietary code to
                  train our models.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I customize the review rules?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, Pro and Enterprise plans allow you to customize review
                  rules to match your team is coding standards and focus on
                  specific areas that matter most to your projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-24">
          <div className="container text-center space-y-8 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Ready to Ship Better Code?
            </h2>
            <p className="max-w-[700px] mx-auto md:text-xl">
              Join thousands of developers who are shipping better code faster
              with CodeFoxAI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm opacity-80">
              No credit card required for trial. Cancel anytime.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 md:py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6" />
              <span className="text-xl font-bold">CodeFoxAI</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered code reviews that help you ship better code faster.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeFoxAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
