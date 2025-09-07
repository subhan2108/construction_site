export default function HSE() {
  const hsePolicies = [
    { id: 1, title: "Safety First", description: "We ensure safety protocols at every stage." },
    { id: 2, title: "Zero Accident Goal", description: "Our mission is to achieve zero accidents." }
  ];

  const qualityPolicies = [
    { id: 1, title: "ISO Standards", description: "We follow international ISO standards." },
    { id: 2, title: "Continuous Improvement", description: "We always refine and enhance processes." }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">HSE & Quality Policies</h2>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">HSE Policies</h3>
        {hsePolicies.map((p) => (
          <div key={p.id} className="card">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Quality Policies</h3>
        {qualityPolicies.map((p) => (
          <div key={p.id} className="card">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
