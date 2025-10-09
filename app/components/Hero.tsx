import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-purple-700 to-indigo-700">
      <Image
        src="/images/Badge_01.png"
        alt="Qiskit Fall Fest Badge"
        width={128}
        height={128}
        className="mx-auto mb-4"
      />
      <h2 className="text-4xl font-bold mb-4">Qiskit Fall Fest 2025</h2>
      <p className="text-lg mb-6">November 9–19 | Prithvi Narayan Campus</p>
      <a
        href="#register"
        className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
      >
        Register Now
      </a>
    </section>
  );
}
