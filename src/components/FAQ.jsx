import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is GDG RBU?",
    answer: "GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration."
  },
  {
    question: "How to join GDG?",
    answer: "You can join GDG by registering for our upcoming orientation and becoming an active member of our community platform."
  },
  {
    question: "What does a GDG Lead do?",
    answer: "A GDG Lead organizes events, manages the core team, and ensures the community stays active and engaged with the latest technologies."
  },
  {
    question: "How is GDG related to Google?",
    answer: "GDG is an independent community-led group recognized and supported by Google Developers to help students learn Google technologies."
  },
  {
    question: "How to reach us?",
    answer: "You can reach us through our official email gdsc@rknec.edu or connect with us on our social media handles."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl sm:text-6xl font-pixel text-center mb-16 text-black dark:text-white">
        FAQs
      </h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`flex justify-between items-center w-full p-6 text-left border-4 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-neo transition-all ${
                  isOpen ? 'border-b-0' : 'hover:-translate-y-1 hover:shadow-neo-hover'
                }`}
              >
                <span className="font-bold text-lg sm:text-xl text-black dark:text-white">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>
              
              {isOpen && (
                <div className="p-6 pt-0 border-4 border-t-0 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-neo">
                  <div className="border-t-2 border-gray-100 dark:border-zinc-800 pt-6 mt-2">
                    <p className="text-gray-800 dark:text-gray-300 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
