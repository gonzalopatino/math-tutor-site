import { useState } from 'react';
import { Button, Input, Select, SectionHeading, Card } from '../components/ui';

// Official Georgia DOE course names with Course IDs
const subjects = [
  { value: 'algebra', label: 'GSE Algebra I (27.09900)' },
  { value: 'geometry', label: 'GSE Geometry (27.09700)' },
  { value: 'advanced-algebra', label: 'GSE Advanced Algebra (27.09770)' },
  { value: 'pre-calculus', label: 'GSE Pre-Calculus (27.09720)' },
  { value: 'physics', label: 'GSE Physics (40.08100)' },
  { value: 'sat-act', label: 'SAT/ACT Math Prep' },
];

const sessionTypes = [
  { value: 'assessment', label: '20-minute Free Assessment' },
  { value: '60-min', label: '60-minute Tutoring Session' },
];

const timeSlots = [
  { value: '9:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    sessionType: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend or service like Formspree
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-success/20 flex items-center justify-center mb-6">
            <svg
              className="h-8 w-8 text-success"
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
          </div>
          <h1 className="text-3xl font-bold text-neutral-100 sm:text-4xl">
            Booking Request Received!
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Thank you for your interest. I'll review your request and send a confirmation email
            within 24 hours with the session details and meeting link.
          </p>
          <div className="mt-8">
            <Button as="link" to="/" variant="secondary">
              Return Home
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
            Book a <span className="text-accent">Session</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Schedule tutoring for your Georgia high school math or physics course. Start with a free
            20-minute assessment to identify knowledge gaps and create a personalized plan.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card hover={false} className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <SectionHeading
                title="Session Details"
                subtitle="Fill out the form below to request a tutoring session."
                className="mb-8"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Select
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  options={subjects}
                  placeholder="Select a subject"
                  required
                />
                <Select
                  label="Session Type"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  options={sessionTypes}
                  placeholder="Select session type"
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <Select
                  label="Preferred Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  options={timeSlots}
                  placeholder="Select a time"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-200 mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific topics you'd like to focus on?"
                  className="w-full rounded-lg bg-primary-800 border border-primary-700 px-4 py-2.5 text-neutral-100 placeholder-neutral-300 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-y"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Booking Request
              </Button>
            </form>
          </Card>

          {/* Info Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-100">Online Sessions</h3>
                  <p className="mt-1 text-sm text-neutral-300">
                    Sessions are conducted via Zoom or Google Meet. You'll receive a link after
                    booking confirmation.
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-100">Confirmation</h3>
                  <p className="mt-1 text-sm text-neutral-300">
                    You'll receive a confirmation email within 24 hours with your session details.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
