import { SectionHeading, Card, CardTitle, CardDescription, Button } from '../components/ui';

const studyTips = [
  {
    title: 'Practice Regularly',
    description:
      'Consistent practice is more effective than cramming. Aim for 20-30 minutes of focused practice daily.',
  },
  {
    title: 'Work Through Examples',
    description:
      'Before attempting problems, carefully study worked examples. Understand each step before moving on.',
  },
  {
    title: 'Ask "Why" Questions',
    description:
      "Don't just memorize formulas. Ask why they work. Understanding leads to better retention.",
  },
  {
    title: 'Teach Someone Else',
    description:
      'Explaining concepts to others reveals gaps in your understanding and reinforces learning.',
  },
  {
    title: 'Review Mistakes',
    description:
      "When you get a problem wrong, don't just look at the answer. Understand what went wrong and why.",
  },
  {
    title: 'Connect Concepts',
    description:
      'Math and physics concepts are related. Look for connections between topics to build deeper understanding.',
  },
];

const mathResources = [
  {
    title: 'Khan Academy',
    description: 'Free video lessons and practice problems for all math topics.',
    url: 'https://www.khanacademy.org/math',
  },
  {
    title: 'Desmos',
    description: 'Free graphing calculator for visualizing functions and equations.',
    url: 'https://www.desmos.com/calculator',
  },
  {
    title: "Paul's Online Math Notes",
    description: 'Comprehensive notes and examples for algebra, trig, and calculus.',
    url: 'https://tutorial.math.lamar.edu/',
  },
];

const physicsResources = [
  {
    title: 'Physics Classroom',
    description: 'Interactive tutorials and practice problems for high school physics.',
    url: 'https://www.physicsclassroom.com/',
  },
  {
    title: 'HyperPhysics',
    description: 'Concept maps and explanations for physics topics.',
    url: 'http://hyperphysics.phy-astr.gsu.edu/',
  },
  {
    title: 'PhET Simulations',
    description: 'Interactive simulations to visualize physics concepts.',
    url: 'https://phet.colorado.edu/en/simulations/filter?subjects=physics',
  },
];

const examTips = [
  'Read all questions before starting',
  'Show your work – partial credit matters',
  'Check units in physics problems',
  'Double-check calculations',
  "Manage your time – don't get stuck on one problem",
  'Review your answers if time permits',
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
            Learning <span className="text-accent">Resources</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Study tips, helpful tools, and recommended resources to supplement your tutoring
            sessions and support your learning.
          </p>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Study Tips"
            subtitle="Effective strategies for math and physics success."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studyTips.map((tip) => (
              <Card key={tip.title}>
                <CardTitle as="h3" className="mb-2">
                  {tip.title}
                </CardTitle>
                <CardDescription>{tip.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Resources Section */}
      <section className="py-20 bg-primary-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Recommended Resources"
            subtitle="Free online tools and websites to support your learning."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Math Resources */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-6">Math Resources</h3>
              <div className="space-y-4">
                {mathResources.map((resource) => (
                  <Card key={resource.title}>
                    <CardTitle as="h4" className="mb-1">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="mb-3">{resource.description}</CardDescription>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-accent hover:underline"
                    >
                      Visit Site
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Physics Resources */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-6">Physics Resources</h3>
              <div className="space-y-4">
                {physicsResources.map((resource) => (
                  <Card key={resource.title}>
                    <CardTitle as="h4" className="mb-1">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="mb-3">{resource.description}</CardDescription>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-accent hover:underline"
                    >
                      Visit Site
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Exam Preparation"
            subtitle="Tips for performing your best on test day."
          />
          <div className="max-w-3xl mx-auto">
            <Card hover={false} className="p-8">
              <h3 className="text-xl font-semibold text-neutral-100 mb-6">Test Day Tips</h3>
              <ul className="space-y-4">
                {examTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-sm font-medium text-white flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-neutral-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Need Personalized Help?</h2>
          <p className="mt-4 text-lg text-neutral-200">
            Resources are great, but nothing beats one-on-one tutoring tailored to your specific
            needs.
          </p>
          <div className="mt-8">
            <Button
              as="link"
              to="/booking"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Book a Tutoring Session
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
