export default function FAQ() {
  const faqs = [
    {
      q: "Is this event beginner-friendly?",
      a: "Absolutely! All sessions are designed for beginners with no prior experience in quantum computing or Qiskit.",
    },
    {
      q: "Do I need to attend both physical and online sessions?",
      a: "No, you can choose either format. To receive a certificate, you must attend all sessions in your chosen mode.",
    },
    {
      q: "Is attendance required for the hackathon?",
      a: "Yes. Participation in the hackathon is mandatory for certification and prize eligibility.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes! Certificates will be awarded to participants who attend all sessions and actively participate in the hackathon.",
    },
    {
      q: "Where will the online sessions be held?",
      a: "Online sessions will be hosted via Google Meet. The link will be shared with registered participants.",
    },
  ];

  return (
    <section
      id="FAQ"
      className="px-8 py-16 max-w-4xl mx-auto bg-black text-white"
    >
      <h3 className="text-2xl font-bold mb-6 text-purple-300">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
          >
            <details>
              <summary className="cursor-pointer font-semibold text-white hover:text-indigo-300 transition-colors duration-200">
                ❓ {q}
              </summary>
              <p className="mt-2 text-white transition-opacity duration-300">
                {a}
              </p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}

