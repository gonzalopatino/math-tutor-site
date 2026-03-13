import { Button, SectionHeading, Card, CardTitle } from '../components/ui';

const values = [
  {
    title: 'Concept-First Learning',
    description:
      'Understanding the "why" behind formulas and methods leads to lasting mastery. I focus on building conceptual understanding before procedures — matching how Georgia curriculum is designed.',
  },
  {
    title: 'Step-by-Step Problem Solving',
    description:
      'Every complex problem becomes manageable when broken into smaller steps. I teach systematic approaches that can be applied to any homework, quiz, or test.',
  },
  {
    title: 'Personalized Instruction',
    description:
      'Every student learns differently. I adapt my teaching to match your child\'s pace, learning style, and specific Georgia course requirements.',
  },
];

const qualifications = [
  'Bachelor\'s Degree in Chemical Engineering — Universidad de los Andes, Venezuela',
  'Master\'s Degree in Education — Universidad de Carabobo',
  '20+ years of teaching and tutoring experience',
  'Former University Professor — Analytical Mechanics (Physics)',
  '95% exam pass rate at Huntington Learning Center',
  'Experienced with Georgia high school math and science curriculum',
  'Bilingual instruction available (English & Spanish)',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
                About <span className="text-accent">Gonzalo Patiño</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-300">
                With over 20 years of experience in teaching and tutoring, I help Georgia high school students master mathematics and physics. As a former university professor of Analytical Mechanics and experienced tutor, I bring academic depth and practical teaching expertise to every session.
              </p>
              <p className="mt-4 text-lg text-neutral-300">
                My tutoring is aligned with Georgia's official GSE course pathway — GSE Algebra I, GSE Geometry, GSE Advanced Algebra, GSE Pre-Calculus, and GSE Physics. I understand exactly what Georgia students are learning in class and tailor my sessions to match their coursework.
              </p>
              <p className="mt-4 text-lg text-neutral-300">
                Based in Bainbridge, Georgia, I offer both online and in-person tutoring for students across the state. My bilingual capabilities (English and Spanish) allow me to reach a wider range of families.
              </p>
              <div className="mt-8">
                <Button as="link" to="/booking" size="lg">
                  Book Free Assessment
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-primary-800 border border-primary-700/50 p-8">
                <div className="text-center">
                  <img 
                    src="/gonzalo-tutor.png" 
                    alt="Gonzalo Patiño - Math & Physics Tutor"
                    className="mx-auto max-h-72 w-auto rounded-xl object-contain"
                  />
                  <p className="mt-6 text-xl font-semibold text-neutral-100">
                    Gonzalo Patiño
                  </p>
                  <p className="text-neutral-300">
                    High School Math & Physics Tutor
                  </p>
                  <p className="text-sm text-accent mt-2">
                    Bainbridge, Georgia
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-primary-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Qualifications & Experience"
            subtitle="Academic credentials and professional teaching experience."
          />
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {qualifications.map((qualification) => (
                <li
                  key={qualification}
                  className="flex items-start gap-4 text-lg text-neutral-300"
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-accent mt-0.5"
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
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="My Teaching Approach"
            subtitle="Building mastery, confidence, and stronger academic performance."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={value.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold mb-4">
                  {index + 1}
                </div>
                <CardTitle className="mb-2">{value.title}</CardTitle>
                <p className="text-neutral-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-100 sm:text-4xl">
            Ready to Help Your Child Succeed?
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Book a free 20-minute assessment to discuss your child's Georgia math or physics course, identify knowledge gaps, and create a personalized tutoring plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as="link" to="/booking" size="lg">
              Book Free Assessment
            </Button>
            <Button as="link" to="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
