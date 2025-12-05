function Skills() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TailwindCSS", level: 90 },
    { name: "MongoDB", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "HTML/CSS", level: 95 },
  ];

  return (
    <section id="skills" className="py-20 bg-card-light dark:bg-card-dark">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full mt-2">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
