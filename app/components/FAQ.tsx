export default function FAQ() {
  return (
    <section className="px-8 py-16 max-w-4xl mx-auto" id="FAQ">
      <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {[
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
        ].map(({ q, a }, i) => (
          <details key={i} className="bg-gray-800 p-4 rounded">
            <summary className="cursor-pointer font-semibold text-white">{q}</summary>
            <p className="mt-2 text-gray-300">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
