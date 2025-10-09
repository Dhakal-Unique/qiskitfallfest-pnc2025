export default function Schedule() {
  const sessions = [
    {
      date: "Nov 9–12",
      details: "🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM\nTopics: Qiskit Basics, Quantum Circuits",
    },
    {
      date: "Nov 13",
      details: "🎤 Guest Speaker Session\n🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM",
    },
    {
      date: "Nov 14",
      details: "🧪 Hackathon Guidelines, Project Demos, Panel Discussion\n🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM",
    },
    {
      date: "Nov 15–17",
      details: "🛠️ Hackathon: Circuit Building & Collaboration\n🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM",
    },
    {
      date: "Nov 16",
      details: "🔍 Hackathon Review & Mentor Feedback\n🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM",
    },
    {
      date: "Nov 17",
      details: "🎓 Final Project Presentations\n🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM",
    },
    {
      date: "Nov 19",
      details: "🏆 Closing Ceremony & Winner Announcement\n🏫 Physical: 10:30 AM – 12:30 PM\n💻 Online: 7:00 PM – 8:00 PM",
    },
  ];

  return (
    <section id="schedule" className="px-8 py-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Schedule</h3>
      <div className="space-y-4">
        {sessions.map(({ date, details }, i) => (
          <details key={i} className="bg-gray-800 p-4 rounded">
            <summary className="cursor-pointer font-semibold">{date}</summary>
            <p className="mt-2 text-gray-300 whitespace-pre-line">{details}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
