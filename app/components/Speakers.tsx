export default function Speakers() {
  return (
    <section id="speakers" className="px-8 py-16 max-w-4xl mx-auto bg-black text-center">
      <h3 className="text-2xl font-bold mb-4 text-purple-300">Speaker Sessions</h3>

      <div className="flex flex-col items-center">
        <img
          src="/images/speaker.png" // or use {speakerImage} if imported
          alt="Instructor"
          className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-purple-300"
        />

        <h4 className="text-xl font-semibold text-white">Mr.Unique Dhakal</h4>
        <p className="text-purple-300 mb-2">Qiskit Advocate</p>
        <p className="text-white max-w-md">
          Mr.Dhakal brings deep insights into quantum computing and its real-world applications. His sessions blend technical clarity with inspiring stories from the frontier of quantum research.
        </p>
      </div>
    </section>
  );
}
