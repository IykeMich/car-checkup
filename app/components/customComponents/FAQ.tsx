"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs: {question: string, answer: string}[] = [
  { question: "What is an HPI Check?", answer: "An HPI Check is a comprehensive vehicle history report that provides information about a vehicle's past, including any outstanding finance, previous accidents, and whether it has been stolen or written off." },
  { question: "How Much does HPI Check Cost?", answer: "The cost of an HPI Check varies depending on the provider and the level of detail in the report, but it typically ranges from £10 to £30." },
  { question: "Is there a Cheaper alternative to HPI Check?", answer: "Yes, there are several alternatives to HPI Checks, including basic vehicle history checks from other providers, which may offer fewer details at a lower price." },
  { question: "Why Perform a Vehicle History Check with Carcheck?", answer: "Performing a vehicle history check with Carcheck ensures you receive accurate and up-to-date information about the vehicle, helping you make an informed decision before purchasing." },
  { question: "What are the differences between a Vehicle History Check and a Vehicle Pre-purchase Inspection?", answer: "A Vehicle History Check provides information about the vehicle's past, while a Vehicle Pre-purchase Inspection involves a thorough physical examination of the vehicle by a qualified mechanic to assess its current condition." },
  { question: "How Comprehensive is Carcheck Report?", answer: "The Carcheck report is comprehensive, covering various aspects such as previous ownership, accident history, outstanding finance, and more, giving you a complete picture of the vehicle's history." },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Toggle function for individual FAQ items
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="mx-4 md:mx-12 lg:mx-24 space-y-4">
        {faqs.slice(0, showAll ? faqs.length : 3).map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={expandedIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>

      {/* Toggle View More / View Less */}
      <div className="text-center mt-4">
        <Button
          className="px-4 py-2 !shadow-none !bg-transparent text-black rounded-md hover:bg-transparent hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </Button>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm" onClick={onClick}>
      {/* Question Block */}
      <div className="flex justify-between rounded-lg items-center p-4 cursor-pointer bg-white hover:bg-gray-100 transition">
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </div>

      {/* Answer Section (Collapsible) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="p-4 text-gray-700">{answer}</p>
      </motion.div>
    </div>
  );
}
