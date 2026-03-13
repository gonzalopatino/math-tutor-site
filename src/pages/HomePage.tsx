import { Button, SectionHeading, Card, CardTitle, CardDescription, Accordion } from '../components/ui';

// Credentials for trust building
const credentials = [
  { label: '20+ Years', sublabel: 'Teaching Experience' },
  { label: 'Former Professor', sublabel: 'University Instructor' },
  { label: 'GA Curriculum', sublabel: 'Standards Aligned' },
  { label: 'Bilingual', sublabel: 'English & Spanish' },
];

// Problems parents face → Solutions offered
const problemSolutions = [
  {
    problem: 'Struggling in Algebra or Geometry class',
    solution: 'Targeted support aligned with Georgia\'s math standards',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    problem: 'Test anxiety and poor exam scores',
    solution: 'Structured exam prep with Georgia EOC test strategies',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: 'Confusing concepts that don\'t stick',
    solution: 'Clear, step-by-step explanations that build real understanding',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    problem: 'Lack of confidence in math or physics',
    solution: 'Progressive mastery that builds lasting confidence',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// 3-Step tutoring method
const tutoringMethod = [
  {
    step: '1',
    title: 'Free Assessment',
    description: 'Diagnostic session to identify knowledge gaps based on Georgia curriculum expectations and your child\'s specific learning goals.',
  },
  {
    step: '2',
    title: 'Personalized Plan',
    description: 'Custom learning plan aligned with your child\'s Georgia high school courses, with targeted practice and clear milestones.',
  },
  {
    step: '3',
    title: 'Progress Tracking',
    description: 'Weekly updates, homework help, quiz/test prep, and adjustments to ensure continuous improvement in class.',
  },
];

// Student results (before/after) - Updated to Georgia courses
const studentResults = [
  { subject: 'Algebra', before: '62%', after: '88%', improvement: '+26%' },
  { subject: 'Physics', before: '70%', after: '92%', improvement: '+22%' },
  { subject: 'Geometry', before: '68%', after: '91%', improvement: '+23%' },
  { subject: 'Adv. Algebra', before: '58%', after: '85%', improvement: '+27%' },
];

// Subjects offered - Updated to Georgia curriculum (Official GSE course names)
const subjects = [
  {
    title: 'Georgia Math Courses',
    topics: ['Algebra: Concepts and Connections', 'Geometry: Concepts and Connections', 'Advanced Algebra: Concepts and Connections', 'Pre-Calculus'],
    color: 'bg-primary-600',
  },
  {
    title: 'Physics (GSE)',
    topics: ['Forces & Motion', 'Energy', 'Waves & Light', 'Electricity & Magnetism'],
    color: 'bg-accent',
  },
];

// Pricing packages
const pricingPackages = [
  { sessions: '1 Session', price: '$60', perSession: '$60/session', popular: false },
  { sessions: '5 Sessions', price: '$275', perSession: '$55/session', popular: true },
  { sessions: '10 Sessions', price: '$500', perSession: '$50/session', popular: false },
];

// Testimonials - Parent focused
const testimonials = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    role: 'Parent of 10th Grader',
    quote: 'My daughter improved from a C to an A in her Geometry class after just three months. Gonzalo\'s patient approach and clear explanations made all the difference.',
    result: 'C → A in Geometry',
  },
  {
    initials: 'RP',
    name: 'Robert P.',
    role: 'Parent of 11th Grader',
    quote: 'We tried two other tutors before finding Gonzalo. His understanding of the Georgia curriculum and structured approach helped my son finally succeed in physics.',
    result: '22% grade improvement',
  },
  {
    initials: 'LP',
    name: 'Linda P.',
    role: 'Parent of 12th Grader',
    quote: 'Professional, patient, and effective. Gonzalo helped my son prepare for his SAT math section while reinforcing his Advanced Algebra skills. He scored 120 points higher!',
    result: '+120 SAT Math points',
  },
];

// FAQ items - Updated for Georgia
const faqItems = [
  {
    id: '1',
    question: 'What grades and subjects do you tutor?',
    answer: 'I specialize in tutoring Georgia high school students in grades 9-12. For math, I cover the full GSE pathway: Algebra I (27.09900), Geometry (27.09700), Advanced Algebra (27.09770), and Pre-Calculus (27.09720). For science, I tutor GSE Physics (40.08100) covering all Georgia Standards of Excellence topics.',
  },
  {
    id: '2',
    question: 'Is your tutoring aligned with Georgia curriculum?',
    answer: 'Yes! All tutoring sessions are aligned with Georgia\'s high school math pathway and the Georgia Standards of Excellence for science. I stay current with GaDOE curriculum expectations to ensure students get relevant, in-class support.',
  },
  {
    id: '3',
    question: 'How does the free assessment work?',
    answer: 'The free 20-minute assessment evaluates your child\'s current skill level against Georgia curriculum expectations. I identify specific knowledge gaps and discuss learning goals to create a personalized tutoring plan.',
  },
  {
    id: '4',
    question: 'Are sessions online or in-person?',
    answer: 'I offer both online tutoring via Zoom (available anywhere in Georgia) and in-person sessions in the Bainbridge area. Online sessions use screen sharing and a digital whiteboard for interactive problem-solving.',
  },
  {
    id: '5',
    question: 'How quickly will I see results?',
    answer: 'Most students see measurable improvement within 4-6 weeks of consistent sessions. I provide regular progress updates aligned with classroom performance so you can track improvement on homework, quizzes, and tests.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Premium Gradient Shimmer Banner */}
      <div className="relative h-1.5 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-600 to-accent" />
        {/* Animated shimmer overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite'
          }}
        />
      </div>

      {/* Hero Section - Clear Value Proposition Above the Fold */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        {/* Modern gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-600/15 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl animate-float-reverse" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Main Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center rounded-full bg-primary-700/60 px-4 py-1.5 text-sm text-accent mb-6">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free 20-Minute Assessment for New Students
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
                Georgia High School
                <span className="block text-accent mt-2">Math & Physics Tutoring</span>
              </h1>
              
              <p className="mt-6 text-lg text-neutral-300 sm:text-xl max-w-2xl mx-auto lg:mx-0">
                Personalized tutoring aligned with Georgia curriculum for Grades 9–12. Build mastery, confidence, and stronger academic performance in Algebra, Geometry, Advanced Algebra, and Physics.
              </p>

              {/* Key Benefits for Parents - Quick Scan */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-neutral-300">
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-accent mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  GA Curriculum Aligned
                </span>
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-accent mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Homework & Test Help
                </span>
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-accent mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Grades 9-12
                </span>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button as="link" to="/booking" size="lg">
                  Book Free Assessment
                </Button>
                <Button as="link" to="/contact" variant="outline" size="lg">
                  Ask a Question
                </Button>
              </div>
            </div>

            {/* Right: Trust Signals / Credentials */}
            <div className="hidden lg:block lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                {/* Decorative floating elements around the card */}
                <div className="absolute -top-4 -right-4 animate-bounce-gentle animation-delay-300">
                  <span className="text-4xl">🎓</span>
                </div>
                <div className="absolute -bottom-4 -left-4 animate-float animation-delay-500">
                  <span className="text-3xl">📚</span>
                </div>
                <div className="absolute top-1/2 -right-6 animate-wiggle">
                  <span className="text-2xl">⭐</span>
                </div>
                
                <Card className="glass-card p-6 relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <img 
                        src="/gonzalo-tutor.png" 
                        alt="Gonzalo Patiño - Math & Physics Tutor"
                        className="h-32 w-32 object-cover object-top rounded-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-1.5 animate-pop">
                        <svg className="h-5 w-5 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-100">Gonzalo Patiño</h3>
                      <p className="text-neutral-300">Math & Physics Tutor</p>
                      <p className="text-sm text-accent mt-1 flex items-center gap-1">
                        <span>📍</span> Bainbridge, Georgia
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {credentials.map((cred, index) => (
                      <div 
                        key={cred.label} 
                        className="text-center p-2.5 rounded-lg bg-primary-700/50 border border-primary-600/30 hover:border-accent/50 transition-colors"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <p className="text-sm font-semibold text-neutral-100">{cred.label}</p>
                        <p className="text-xs text-neutral-300">{cred.sublabel}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Credentials - Shows on smaller screens */}
      <section className="py-8 bg-primary-800/30 lg:hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {credentials.map((cred) => (
              <div key={cred.label} className="text-center p-3 rounded-lg bg-primary-800/50">
                <p className="text-sm font-semibold text-neutral-100">{cred.label}</p>
                <p className="text-xs text-neutral-300">{cred.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Georgia Curriculum Alignment Section */}
      <section className="py-16 bg-primary-800/50 border-y border-primary-700/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Aligned with Georgia High School Curriculum
            </h2>
            <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
              Tutoring that matches what your child is learning in school — focused on Georgia Standards of Excellence for Math and Science.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <div className="text-3xl mb-3">📐</div>
              <CardTitle as="h3" className="text-lg mb-2">Algebra</CardTitle>
              <p className="text-xs text-accent mb-1">27.09900</p>
              <CardDescription className="text-sm">
                Concepts and Connections — linear relationships, equations, functions
              </CardDescription>
            </Card>
            <Card className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <CardTitle as="h3" className="text-lg mb-2">Geometry</CardTitle>
              <p className="text-xs text-accent mb-1">27.09700</p>
              <CardDescription className="text-sm">
                Concepts and Connections — proofs, shapes, spatial reasoning
              </CardDescription>
            </Card>
            <Card className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <CardTitle as="h3" className="text-lg mb-2">Advanced Algebra</CardTitle>
              <p className="text-xs text-accent mb-1">27.09770</p>
              <CardDescription className="text-sm">
                Concepts and Connections — polynomials, exponentials, trigonometry
              </CardDescription>
            </Card>
            <Card className="text-center">
              <div className="text-3xl mb-3">⚛️</div>
              <CardTitle as="h3" className="text-lg mb-2">Physics</CardTitle>
              <p className="text-xs text-accent mb-1">40.08100</p>
              <CardDescription className="text-sm">
                GSE Physics — forces, energy, waves, electricity & magnetism
              </CardDescription>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-300 mb-4">
              Sessions support homework, quizzes, tests, and EOC exam preparation
            </p>
            <Button as="link" to="/subjects" variant="outline" size="sm">
              View All Subjects
            </Button>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common Challenges I Help Solve"
            subtitle="Parents come to me when their child needs more than just homework help."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {problemSolutions.map((item) => (
              <Card key={item.problem} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-error/20 text-error flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-neutral-100 font-medium mb-1">{item.problem}</p>
                  <p className="text-neutral-300 text-sm flex items-center">
                    <svg className="h-4 w-4 text-success mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {item.solution}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-primary-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What I Tutor"
            subtitle="Georgia high school Math and Physics — Grades 9 through 12."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {subjects.map((subject) => (
              <Card key={subject.title} className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-1 w-full ${subject.color}`} />
                <CardTitle as="h3" className="text-xl mb-4">
                  {subject.title}
                </CardTitle>
                <ul className="space-y-2 mb-6">
                  {subject.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-neutral-300">
                      <svg className="mr-2 h-5 w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Button as="link" to="/subjects" variant="secondary">
                  View Full Curriculum
                </Button>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-neutral-300">
              <span className="text-accent font-medium">Also available:</span> SAT/ACT Math Prep • EOC Exam Review • Homework Help
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - 3-Step Method */}
      <section className="py-20 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 animate-float opacity-20">
          <span className="text-6xl">🎯</span>
        </div>
        <div className="absolute bottom-10 right-10 animate-float-reverse opacity-20">
          <span className="text-6xl">🚀</span>
        </div>
        <div className="absolute top-1/2 left-5 animate-bounce-gentle opacity-15">
          <span className="text-4xl">✨</span>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="How Tutoring Works"
            subtitle="A structured approach designed to deliver measurable results."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {tutoringMethod.map((step, index) => {
              const stepIcons = ['🔍', '📋', '📈'];
              return (
                <div key={step.title} className="relative">
                  {/* Connector line (hidden on mobile) */}
                  {index < tutoringMethod.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-accent to-primary-600" />
                  )}
                  <Card className="relative text-center glass-card hover:border-accent/50 transition-all duration-300 group">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-amber-400 text-4xl shadow-lg shadow-accent/25 group-hover:scale-110 transition-transform">
                      {stepIcons[index]}
                    </div>
                    <div className="absolute top-4 right-4 text-3xl font-bold text-primary-600/30">
                      {step.step}
                    </div>
                    <CardTitle className="mb-2 gradient-text">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary-800/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Real Student Results"
            subtitle="Measurable improvement across all subjects."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studentResults.map((result, index) => (
              <Card 
                key={result.subject} 
                className="text-center glass-card hover:border-success/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 animate-bounce-gentle" style={{ animationDelay: `${index * 200}ms` }}>
                  {['📐', '⚛️', '📊', '📈'][index]}
                </div>
                <p className="text-sm text-neutral-300 mb-2 font-medium">{result.subject}</p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-2xl text-neutral-400 line-through">{result.before}</span>
                  <span className="text-2xl animate-wiggle">→</span>
                  <span className="text-3xl font-bold text-success group-hover:scale-110 transition-transform">{result.after}</span>
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-success/30 to-success/10 text-success text-sm font-bold border border-success/30">
                  {result.improvement}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Parents Say"
            subtitle="Real feedback from families who've seen results."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white font-semibold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-neutral-100">{testimonial.name}</p>
                    <p className="text-sm text-neutral-300">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-neutral-300 italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 pt-4 border-t border-primary-700">
                  <span className="inline-flex items-center text-sm text-accent font-medium">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.result}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-primary-800/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 animate-float opacity-15">
          <span className="text-5xl">💰</span>
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-gentle opacity-15">
          <span className="text-5xl">✅</span>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Invest in your child's academic success. Save with session packages."
          />
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={pkg.sessions}
                className={`text-center relative glass-card transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                    ? 'border-2 border-accent shadow-xl shadow-accent/20' 
                    : 'hover:border-primary-500/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-amber-400 text-primary-900 text-xs font-bold rounded-full flex items-center gap-1">
                    <span>⭐</span> MOST POPULAR
                  </div>
                )}
                <div className="text-3xl mb-3">
                  {['📗', '📘', '📚'][index]}
                </div>
                <p className="text-neutral-300 mb-2 font-medium">{pkg.sessions}</p>
                <p className="text-5xl font-bold text-neutral-100 mb-1 gradient-text">{pkg.price}</p>
                <p className="text-sm text-accent mb-6 font-medium">{pkg.perSession}</p>
                <Button as="link" to="/booking" variant={pkg.popular ? 'primary' : 'secondary'} className="w-full">
                  {pkg.popular ? '🚀 Get Started' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-neutral-300 mt-8 text-sm flex items-center justify-center gap-2">
            <span className="text-accent">✨</span>
            All sessions are 60 minutes. First assessment session is free!
            <span className="text-accent">✨</span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions from parents."
          />
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-[10%] animate-float">
            <span className="text-6xl opacity-20">🎓</span>
          </div>
          <div className="absolute top-20 right-[15%] animate-bounce-gentle animation-delay-500">
            <span className="text-5xl opacity-20">🌟</span>
          </div>
          <div className="absolute bottom-10 left-[20%] animate-float-reverse animation-delay-700">
            <span className="text-4xl opacity-20">📈</span>
          </div>
          <div className="absolute bottom-20 right-[25%] animate-wiggle animation-delay-300">
            <span className="text-5xl opacity-20">🚀</span>
          </div>
          <div className="absolute top-1/2 left-[5%] animate-pop">
            <span className="text-3xl opacity-15">✨</span>
          </div>
          <div className="absolute top-1/2 right-[5%] animate-pop animation-delay-700">
            <span className="text-3xl opacity-15">✨</span>
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 text-4xl mb-4">
            <span className="animate-bounce-gentle">🎯</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Help Your Child <span className="text-accent">Succeed</span>?
          </h2>
          <p className="mt-4 text-lg text-neutral-200 max-w-2xl mx-auto">
            Start with a free 20-minute assessment. I'll evaluate your child's Georgia coursework, identify knowledge gaps, and create a personalized tutoring plan—no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="link"
              to="/booking"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600 group"
            >
              <span className="group-hover:animate-bounce-gentle inline-block mr-2">📅</span>
              Book Free Assessment
            </Button>
            <span className="text-neutral-200 text-sm">or</span>
            <Button as="link" to="/contact" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
              💬 Have Questions?
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
