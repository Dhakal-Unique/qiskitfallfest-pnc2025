import Image from "next/image";

export default function Partners() {
  return (
    <section id="Partner" className="bg-gray-800 px-8 py-16 text-white">
      <h3 className="text-3xl font-bold  mb-12">Supporting Partners</h3>

      <div className="max-w-5xl mx-auto flex flex-row items-center gap-x-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/IBM Quantum Logo.png"
            alt="IBM Quantum Logo"
            width={160}
            height={160}
           
          />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-2">IBM Quantum</h4>
          <p className="text-gray-300">
            IBM Quantum is a full-stack quantum computing provider. Its offerings include cloud-based access to quantum processors, the Qiskit SDK, educational courses, and global partnerships for capacity building.
          </p>
        </div>
      </div>
    </section>
  );
}

