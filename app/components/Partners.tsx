import Image from "next/image";

export default function Partners() {
  return (
    <section id="Partner" className="bg-gray-700 px-8 py-16">
      <h3 className="text-3xl font-bold mb-12 text-indigo-300">Supporting Partners</h3>

      {/* IBM Quantum */}
      <div className="max-w-5xl mx-auto flex flex-row items-center gap-x-8 mb-12 ">
        <div className="flex-shrink-0 bg-white p-2 rounded-lg">
          <Image
            src="/images/IBM Quantum Logo.png"
            alt="IBM Quantum Logo"
            width={160}
            height={160}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-2 text-white">IBM Quantum</h4>
          <p className="text-white">
            IBM Quantum is a full-stack quantum computing provider. Its offerings include cloud-based access to quantum processors, the Qiskit SDK, educational courses, and global partnerships for capacity building.
          </p>
        </div>
      </div>
       {/* Prithvi Narayan Campus (PNC) */}
      <div className="max-w-5xl mx-auto flex flex-row items-center gap-x-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/PNC Logo.jpeg"
            alt="Prithvi Narayan Campus Logo"
            width={160}
            height={160}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-2 text-white">Prithvi Narayan Campus (PNC)</h4>
          <p className="text-white">
            Founded in 1960, PNC is one of Tribhuvan University's oldest and largest campuses. Located in Pokhara, it plays a vital role in higher education and research in western Nepal, fostering academic excellence and innovation.
          </p>
        </div>
      </div>
      {/* Pokhara Astronomical Society (PAS) */}
      <div className="max-w-5xl mx-auto flex flex-row items-center gap-x-8 mt-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/PAS Logo.jpeg"
            alt="Pokhara Astronomical Society Logo"
            width={160}
            height={160}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-2 text-white">Pokhara Astronomical Society (PAS)</h4>
          <p className="text-white">
            Established in 2012, PAS is dedicated to making astronomy accessible across Nepal, especially for children in remote areas. Through sky observations, telescope distribution, and hands-on training, PAS brings the cosmos closer to communities.
          </p>
        </div>
      </div>

    
    </section>
  );
}

