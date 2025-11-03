export default function Speakers() {
  return (
    <section id="speakers" className="px-8 py-16 max-w-4xl mx-auto bg-black text-center">
      <h3 className="text-2xl font-bold mb-4 text-purple-300">Speaker Sessions</h3>

      {/* Speaker 1 */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="/images/speaker.png"
          alt="Instructor"
          className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-purple-300"
        />
        <h4 className="text-xl font-semibold text-white">Mr.Unique Dhakal</h4>
        <p className="text-purple-300 mb-2">Aspiring Quantum Researcher | Qiskit Advocate | Event Lead, Qiskit Fall Fest PNC 2025</p>
        <p className="text-white max-w-md">
          Mr.Dhakal brings deep insights into quantum computing and its real-world applications. His sessions blend technical clarity with inspiring stories from the frontier of quantum research.
        </p>
      </div>

      {/* Speaker 2 */}
      <div className="flex flex-col items-center">
        <img
          src="/images/Passport_professional.jpeg" 
            alt="Soumyaranjan Swain"
            className="w-40 h-40 rounded-full object-cover object-top mb-4 border-4 border-purple-300"
        />
        <h4 className="text-xl font-semibold text-white">Soumyaranjan Swain</h4>
        <p className="text-purple-300 mb-2">Senior Tech Manager, IBM Watsonx | IBM Quantum Ambassador</p>
        <p className="text-white max-w-md">
            With 17 years of industry experience, Soumyaranjan leads Gen AI initiatives at IBM Watsonx and serves as an IBM Quantum Ambassador. His session <em>Quantum and Qiskit 101</em> offers a beginner-friendly gateway into quantum computing, blending clarity, curiosity, and real-world relevance.
        </p>
      </div>
    </section>
  );
}
