'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Smartphone,
  Zap,
  Shield,
  Users,
  Star,
  Download,
  Mail,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export default function MobileAppLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'solutions', 'details', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'hero', label: 'Home x' },
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'details', label: 'Details' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Smartphone className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">AppName</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Manage your health all in
                <span className="text-primary"> one place.</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-pretty">
                Your Healthy Your Happy
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button
                  size="lg"
                  className="w-full sm:w-auto mr-4 mb-4 sm:mb-0"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Try Now!
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  src="/phone-1.png"
                  alt="Mobile app mockup"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              Everything you need for a healthier you.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: 'Specialist Doctor Consultation',
                description:
                  'A specialist doctor consultation provides expert medical advice and treatment for specific health conditions. This type of appointment is crucial when you need an in-depth diagnosis or a specialized treatment plan beyond the scope of a general practitioner.',
              },
              {
                icon: Shield,
                title: 'recommendations for the nearest hospital',
                description:
                  'This tool provides personalized recommendations for nearby hospitals, helping you quickly identify healthcare facilities in your area. Whether for an emergency or a planned visit, our system helps you find a hospital that meets your needs..',
              },
              {
                icon: Users,
                title: 'Estimated cost based on the disease and your income.',
                description:
                  "This feature provides a cost estimate for medical treatment by analyzing the expenses associated with a particular disease and factoring in an individual's income level. This allows for a more realistic and tailored view of potential financial burdens..",
              },
              {
                icon: Users,
                title: 'Appointment reminders are provided. .',
                description:
                  'We provide convenient appointment reminders to help you manage your schedule. You ll receive timely notifications about your upcoming visits, allowing for a seamless and stress-free experience',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions/Benefits Section */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Transparent Financial Planning
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Our app addresses the common pain points of modern mobile users
                with intelligent solutions.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: 'Transparent Financial Planning',
                    description:
                      'Eliminate the uncertainty of medical costs with clear, personalized estimates. Our app helps you plan ahead by providing cost breakdowns based on your income and specific condition.',
                  },
                  {
                    title: 'Empowered Decisions',
                    description:
                      'Focus on what matters most with access to reliable information. We help you make confident choices by recommending the nearest and most suitable hospitals, complete with details on their specialties.',
                  },
                  {
                    title: 'Expert Guidance',
                    description:
                      'Seamlessly connect with trusted medical professionals. Our platform bridges the gap between you and specialist doctors, ensuring you receive the expert consultation you need without hassle.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-pretty">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <img
                src="/phone-2.png"
                alt="App benefits illustration"
                className="w-1/2 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              See It In Action
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              Take a closer look at the features that make our app stand out
              from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dashboard Overview',
                description:
                  'Get a complete view of your activities and progress at a glance.',
                image: '/mobile-app-dashboard-screenshot.png',
              },
              {
                title: 'Smart Notifications',
                description:
                  'Stay informed with intelligent alerts that adapt to your preferences.',
                image: '/mobile-app-notifications-interface.png',
              },
              {
                title: 'Advanced Settings',
                description:
                  'Customize every aspect of your experience with powerful configuration options.',
                image: '/mobile-app-settings.png',
              },
            ].map((detail, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={detail.image || '/placeholder.svg'}
                    alt={detail.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{detail.title}</CardTitle>
                  <CardDescription className="text-pretty">
                    {detail.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground text-pretty">
              Join thousands of users who have already transformed their mobile
              experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>

            <div className="mt-16 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Stay Updated
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Get notified about updates and new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Smartphone className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">AppName</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 AppName. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
