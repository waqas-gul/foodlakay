'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is included in the Landing Page package?',
    answer:
      'The Landing Page package includes a fully designed and developed single page tailored to your needs, optimized for performance and responsiveness.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'Project completion typically depends on complexity, but we aim to deliver within 1–2 weeks.',
  },
  {
    question: 'Do you provide website maintenance after delivery?',
    answer:
      'Yes, we offer post-launch maintenance to keep your site secure and updated.',
  },
  {
    question: 'Can I request revisions during the design process?',
    answer:
      'Absolutely. We include multiple revision rounds during the design phase to ensure satisfaction.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Yes, all our designs are responsive and optimized for mobile devices.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first FAQ open by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-8  sm:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-white p-8 rounded-lg shadow-lg">
        {/* Left Column */}
        <div>
          <h2 className="text-[48px] font-semibold mb-4">FAQs</h2>
          <p className="text-gray-600 mb-6 text-sm">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>
          <button className="border border-[#4F4B41] px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4F4B41] hover:text-white transition">
            More Questions
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-4 rounded-lg shadow-sm transition-all duration-300`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-sm text-gray-800">
                  {faq.question}
                </span>
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? <Minus size={16} />  : <Plus size={16} />}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-sm text-gray-500 mt-3 transition-opacity duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
