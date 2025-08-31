'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Monitor,
  Zap,
  Shield,
  Users,
  Star,
  Play,
  Mail,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  MapPin,
  MessageSquare,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

export default function MobileAppLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'solutions', 'details'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'details', label: 'Details' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">MataNusa</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map(item => (
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
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map(item => (
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
                Uncover the True State of
                <span className="text-primary"> Indonesian Education.</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-pretty">
                MataNusa is the first platform to centralize and visualize verified educational data from across the
                archipelago, <span className="text-primary">transforming complexity into clarity.</span>
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="https://demo.matanusa.my.id" target='_blank' rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto mr-4 mb-4 sm:mb-0">
                    <Play className="mr-2 h-5 w-5" />
                    Explore The Map
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-4xl">
                <img src="/banner.png" alt="Web app dashboard mockup" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              See Our Mission in Motion
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground text-pretty">
              A short film about the challenges we're tackling and how MataNusa brings data, community, and action
              together to make a difference on the ground.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full bg-card rounded-lg overflow-hidden shadow-2xl ring-1 ring-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0uXiivBIRK0?si=fnVTKEPbJu8Jt-eQ"
                title="MataNusa - Our Mission in Motion"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* OLD: <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Powerful Features
            </h2> */}
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              An Integrated Platform for Change
            </h2>

            {/* OLD: <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              Everything you need to access, analyze, and manage educational data effectively.
            </p> */}
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              From data visualization to direct action, our ecosystem connects the dots to create measurable, real-world
              impact.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: 'Interactive Map Dashboard',
                description:
                  'Visualize educational inequality data across Indonesia. Explore transparent statistics on facilities, teachers, and access by region.',
              },
              {
                icon: MessageSquare,
                title: 'Verified Public Reporting',
                description:
                  'Empower the community to report school conditions directly. Every report is validated to ensure accuracy and credibility.',
              },
              {
                icon: HeartHandshake,
                title: 'Targeted & Impactful Donations',
                description:
                  'Channel your support directly to the educational projects with the most need. Track every step of the progress transparently.',
              },
              {
                icon: ShieldCheck,
                title: 'AI-Powered Verification',
                description:
                  'Our AI technology analyzes each report to detect potential fraud, ensuring every donation is based on valid and trustworthy data.',
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{feature.description}</CardDescription>
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
              {/* OLD: <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Transform Educational Decision Making
              </h2> */}
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Empowering Every Stakeholder in Education
              </h2>
              {/* OLD: <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Our platform addresses the critical challenges of educational data management with comprehensive
                solutions.
              </p> */}
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                MataNusa provides unique value for everyone dedicated to educational progress, from national
                policymakers to individual changemakers.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  // NEW CONTENT FOR THIS SECTION
                  {
                    icon: Shield,
                    title: 'For Policymakers & Government',
                    description:
                      'Access centralized, real-time data to formulate evidence-based policies, allocate resources effectively, and monitor regional progress.',
                  },
                  {
                    icon: Users,
                    title: 'For Researchers & Academics',
                    description:
                      'Utilize a rich, unified dataset for in-depth analysis of educational trends, challenges, and the impact of interventions.',
                  },
                  {
                    icon: Star,
                    title: 'For Donors & Corporate CSR',
                    description:
                      'Invest with confidence. Fund AI-verified projects and track your contributions transparently to see tangible, on-the-ground results.',
                  },
                  {
                    icon: HeartHandshake,
                    title: 'For the Public & Changemakers',
                    description:
                      'Become an active participant. Report local issues, support urgent projects, and hold institutions accountable through a single, powerful platform.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <img
                src="/dashboard-1.png"
                alt="Web app analytics illustration"
                className="w-full rounded-lg shadow-lg"
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
            {/* OLD: <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              Explore the powerful features that make our platform the leading choice for educational data management.
            </p> */}
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground text-pretty">
              Go beyond theory. See how our core components work together to bring transparency and action to the
              forefront.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              // NEW, MORE ACCURATE DESCRIPTIONS
              {
                title: 'Illuminate Trends with the Dashboard',
                description:
                  'Dive deep into regional data, compare key metrics, and uncover hidden insights through our intuitive and fully interactive map.',
                image: '/dashboard-2.png',
              },
              {
                title: 'Fund Verified Needs via Crowdfunding',
                description:
                  'Browse AI-vetted projects, from classroom repairs to tech funding. Donate securely and connect directly with the causes that matter.',
                image: '/crowdfunding.png',
              },
              {
                title: 'Track Real-World Impact',
                description:
                  'Follow the journey of your contribution. Receive transparent progress updates and reports directly from the field for full accountability.',
                image: './report.png',
              },
            ].map((detail, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img
                    src={detail.image || '/placeholder.svg'}
                    alt={detail.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{detail.title}</CardTitle>
                  <CardDescription className="text-pretty">{detail.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Drive the Change?
            </h2>
            {/* OLD: <p className="mt-4 text-xl text-muted-foreground text-pretty">
              Join educational institutions and researchers who are already transforming their data management.
            </p> */}
            <p className="mt-4 text-xl text-muted-foreground text-pretty">
              Be part of the movement. Join the leaders, institutions, and individuals building a more transparent and
              equitable future for education in Indonesia.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Try our live Demo!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Monitor className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">MataNusa</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2025 MataNusa - UNIICODE - Universitas Esa Unggul. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
