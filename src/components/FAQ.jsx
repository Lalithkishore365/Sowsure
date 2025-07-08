import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "📍 How does SowSure help me choose crops?",
      answer:
        "SowSure analyzes your soil type, water availability, climate data, and crop history to recommend the best crops for your land. It also supports rotation and intercropping suggestions.",
    },
    {
      question: "📱 Is SowSure available in my language?",
      answer:
        "Yes! SowSure supports English, தமிழ் (Tamil), हिंदी (Hindi), and తెలుగు (Telugu) with plans to support more regional languages soon.",
    },
    {
      question: "🌾 Can I track my farming tasks?",
      answer:
        "Absolutely! You can use the calendar feature to add, view, and manage farming tasks like weeding, composting, irrigation, and harvesting.",
    },
    {
      question: "💧 How do I check my soil moisture?",
      answer:
        "Our dashboard provides soil moisture data using local station info or IoT integration (if supported). It also gives visual cues and tips for optimal watering.",
    },
    {
      question: "📞 What if I need real help?",
      answer:
        "You can visit the Helpline page to find important government toll-free numbers like Kisan Call Centre (1800-180-1551), ICAR Farmer Helpline, and others based on your region.",
    },
    {
      question: "🧪 How accurate is the disease detection?",
      answer:
        "Our AI model has been trained on common Indian crop diseases. While it's not 100% perfect, it gives reliable suggestions and guides for early actions.",
    },
  ];

  return (
    <div className="pt-24 px-6 pb-16 min-h-screen bg-gradient-to-b from-stone-100 via-white to-lime-100 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-lime-700 mb-10" data-aos="fade-down">
        📋 Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-lime-300 rounded-lg shadow-md p-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left font-semibold text-leaf text-lg focus:outline-none"
            >
              {faq.question}
            </button>
            {open === index && (
              <p className="mt-2 text-sm text-gray-700 transition-all duration-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-gray-500 italic">
        Didn’t find your question? Chat with AgriBot or contact support.
      </p>
    </div>
  );
}
