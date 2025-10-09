export default function Venue() {
  return (
    <section id="venue" className="px-8 py-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Venue</h3>
      <p className="text-gray-300 mb-4">Prithvi Narayan Campus, Pokhara</p>
      <iframe
        src="https://www.google.com/maps?q=Prithvi+Narayan+Campus+Pokhara&output=embed"
        className="w-full h-64 rounded"
        loading="lazy"
      ></iframe>
    </section>
  );
}
