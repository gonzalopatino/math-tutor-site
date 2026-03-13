import { Button, SectionHeading, Card, CardTitle, CardDescription } from '../components/ui';

// Georgia Math Curriculum - Official GSE Course Names with Course IDs
const mathTopics = [
  {
    title: 'GSE Algebra I: Concepts and Connections',
    courseId: '27.09900',
    description:
      "Georgia's foundational high school math course focusing on linear relationships, equations, and functions.",
    topics: [
      'Linear equations & inequalities',
      'Systems of equations',
      'Functions & relationships',
      'Graphing & data analysis',
    ],
    grades: 'Grade 9',
  },
  {
    title: 'GSE Geometry: Concepts and Connections',
    courseId: '27.09700',
    description:
      'Spatial reasoning, geometric proofs, and measurement aligned with Georgia Standards of Excellence.',
    topics: [
      'Congruence & similarity',
      'Geometric proofs',
      'Circles & area/volume',
      'Coordinate geometry',
    ],
    grades: 'Grade 10',
  },
  {
    title: 'GSE Advanced Algebra: Concepts and Connections',
    courseId: '27.09770',
    description:
      'Higher-level algebraic concepts preparing students for Pre-Calculus and college mathematics.',
    topics: [
      'Polynomial functions',
      'Exponentials & logarithms',
      'Trigonometry basics',
      'Sequences & series',
    ],
    grades: 'Grade 11',
  },
  {
    title: 'GSE Pre-Calculus',
    courseId: '27.09720',
    description: 'Advanced preparation for calculus and college-level mathematics.',
    topics: [
      'Advanced functions',
      'Trigonometric identities',
      'Limits introduction',
      'Conic sections',
    ],
    grades: 'Grade 11-12',
  },
];

// Physics aligned with Georgia Standards of Excellence (Course ID: 40.08100)
const physicsTopics = [
  {
    title: 'Forces and Motion',
    description: 'Mechanics fundamentals aligned with GSE Physics standards (SP1-SP3).',
    topics: ['Kinematics', "Newton's Laws", 'Projectile motion', 'Momentum & collisions'],
  },
  {
    title: 'Energy',
    description: 'Work, energy, and power concepts per GSE Physics standards (SP4).',
    topics: ['Work & energy', 'Conservation laws', 'Power', 'Simple machines'],
  },
  {
    title: 'Waves and Light',
    description: 'Wave behavior, sound, and optics per GSE Physics standards (SP5).',
    topics: ['Wave properties', 'Sound waves', 'Light & reflection', 'Electromagnetic spectrum'],
  },
  {
    title: 'Electricity and Magnetism',
    description: 'Electric circuits and fields per GSE Physics standards (SP6).',
    topics: ['Electric circuits', "Ohm's Law", 'Magnetic fields', 'Electromagnetism basics'],
  },
];

export default function SubjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
            Georgia High School <span className="text-accent">Math & Physics</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Tutoring aligned with Georgia's high school curriculum and the Georgia Standards of
            Excellence. Support for Grades 9-12 covering homework, tests, quizzes, and EOC exam
            preparation.
          </p>
        </div>
      </section>

      {/* Math Section */}
      <section id="math" className="py-20 bg-primary-800/50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Georgia Math Courses"
            subtitle="Support for the Georgia high school math pathway — Algebra through Pre-Calculus."
            centered={false}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {mathTopics.map((subject) => (
              <Card key={subject.title}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle as="h3" className="text-xl">
                      {subject.title}
                    </CardTitle>
                    <p className="text-xs text-accent mt-1">Course ID: {subject.courseId}</p>
                  </div>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {subject.grades}
                  </span>
                </div>
                <CardDescription className="mb-4">{subject.description}</CardDescription>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-200">Topics covered:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="flex items-center text-sm text-neutral-300">
                        <svg
                          className="mr-2 h-4 w-4 text-accent flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-primary-900 border border-primary-700/50 p-8">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              What Math Tutoring Includes
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Homework help aligned with your child's Georgia math class
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Quiz and test preparation with practice problems
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Concept mastery through step-by-step problem solving
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                SAT/ACT math section preparation (optional)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Physics Section */}
      <section id="physics" className="py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="High School Physics"
            subtitle="Georgia Standards of Excellence coverage — forces, energy, waves, and electricity."
            centered={false}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {physicsTopics.map((subject) => (
              <Card key={subject.title}>
                <CardTitle as="h3" className="text-xl mb-2">
                  {subject.title}
                </CardTitle>
                <CardDescription className="mb-4">{subject.description}</CardDescription>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-200">Topics covered:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="flex items-center text-sm text-neutral-300">
                        <svg
                          className="mr-2 h-4 w-4 text-accent flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-primary-800 border border-primary-700/50 p-8">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              What Physics Tutoring Includes
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-medium text-accent mb-2">Conceptual Understanding</h4>
                <p className="text-neutral-300">
                  Master the "why" behind physics laws and formulas — not just memorization.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-2">Problem-Solving Skills</h4>
                <p className="text-neutral-300">
                  Step-by-step strategies to tackle complex physics problems with confidence.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-2">Homework & Test Help</h4>
                <p className="text-neutral-300">
                  Support for assignments, quizzes, and exam preparation aligned with class
                  material.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-2">Confidence Building</h4>
                <p className="text-neutral-300">
                  Progressive challenges that build lasting confidence in physics abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Improve Your Child's Grades?
          </h2>
          <p className="mt-4 text-lg text-neutral-200">
            Book a free 20-minute assessment to discuss your child's Georgia math or physics course,
            identify knowledge gaps, and create a personalized tutoring plan.
          </p>
          <div className="mt-8">
            <Button
              as="link"
              to="/booking"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Book Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
