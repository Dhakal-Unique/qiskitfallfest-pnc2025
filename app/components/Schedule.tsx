export default function Schedule() {
  const sessions = [
    {
      date: "Nov 9",
      details: " Kick-off Day\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nTopics: Intro to Quantum Computing, Qiskit Setup, Hello Quantum World",
    },
    {
      date: "Nov 10",
      details: "Fundamentals\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM -  8:00 PM\nTopics: Quantum Circuits, Gates, Superposition, Visualization",
    },
    {
      date: "Nov 11",
      details: " Entanglement & Algorithms\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nTopics: Bell States, Deutsch-Jozsa Algorithm, Mini Challenge",
    },
    {
      date: "Nov 12",
      details: " Quantum Simulation\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nTopics: Qiskit Aer, Noise Models, Real Backend Intro",
    },
    {
      date: "Nov 13",
      details: "Special Seminar\nOnline: 7:00 PM - 8:00 PM\nSession: Quantum and Qiskit 101\nSpeaker: Soumyaranjan Swain (IBM Quantum).",
    },

    {
      date: "Nov 14",
      details: "Full Break Day\nNo sessions scheduled",
    },
    {
      date: "Nov 15",
      details: " Hackathon Kickoff\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Theme Reveal, Judging Criteria, Ideation",
    },
    {
      date: "Nov 16",
      details: " Hackathon Workday\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Project Building, Mentor Support",
    },
    {
      date: "Nov 17",
      details: " Hackathon Submission\nPhysical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Final Submission & Review",
    },
    {
      date: "Nov 18",
      details: " Hackathon Evaluation\nInternal review of submitted projects by mentors and judges",
    },
    {
      date: "Nov 19",
      details: " Closing Ceremony\n Physical: 10:30 AM - 12:30 PM\n Online: 7:00 PM - 8:00 PM\nActivities: Winner Announcements, Wrap-up",
    },
  ];

  return (
    <section id="schedule" className="px-8 py-16 max-w-4xl mx-auto bg-black">
      <h3 className="text-2xl font-bold mb-6 text-purple-300">Schedule</h3>
      <div className="space-y-4">
        {sessions.map(({ date, details }, i) => (
          <details key={i} className="bg-gray-800 p-4 rounded">
            <summary className="cursor-pointer font-semibold text-white">{date}</summary>
            <p className="mt-2 text-white whitespace-pre-line">{details}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

