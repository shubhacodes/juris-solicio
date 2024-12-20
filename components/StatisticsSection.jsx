export default function StatisticsSection() {
  const stats = [
    {
      value: "1995",
      label: "Experience",
      description: "Teaching since 1995, now with 28+ Years of experience",
    },
    {
      value: "7000+",
      label: "Total Students",
      description: "Shaped the career of 7000+ students till now",
    },
    {
      value: "1500+",
      label: "Remarkable Achievements",
      description: "More than 1500 students scored 90+ marks",
    },
    {
      value: "90%",
      label: "Statistics into Triumphs",
      description: "More than 90% students gets above average marks every year",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#143963] text-center mb-12">
          Achievements Backed by Impressive Statistics
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-center p-4"
              >
                <div className="text-[#143963] text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
