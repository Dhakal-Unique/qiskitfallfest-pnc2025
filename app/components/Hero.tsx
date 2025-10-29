import Image from "next/image";
import Countdown from "./Countdown"; 

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-indigo-700 to-purple-700">
      <Image
        src="/images/Badge_01.png"
        alt="Qiskit Fall Fest Badge"
        width={128}
        height={128}
        className="mx-auto mb-6"
      />
      <h2 className="text-4xl font-bold mb-2 text-white">
        Qiskit Fall Fest PNC 2025
      </h2>
      <p className="text-xl mb-4 text-white font-medium">
         Open to All • Nov 9-19
      </p>
      <p className="text-lg mb-6 text-white">
        In collaboration with IBM Quantum, PAS, and Prithvi Narayan Campus
      </p>
      <a
        href="#register"
        className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200"
      >
        Register Now
      </a>
      <Countdown />

    </section>
  );
}

