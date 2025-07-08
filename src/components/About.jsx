import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "Gautham R",
      email: "gr0gautham@gmail.com",
      linkedin: "https://www.linkedin.com/in/gautham-r2005",
      github: "https://github.com/gautham-here",
    },
    {
      name: "LalithKishore M",
      email: "lalithkishore2109@gmail.com",
      linkedin: "https://www.linkedin.com/in/lalithkishore37",
      github: "https://github.com/Lalithkishore365",
    },
    {
      name: "P A Athithiya",
      email: "athithiya.pa@gmail.com",
      linkedin: "https://www.linkedin.com/in/athisivesh",
      github: "https://github.com/athisivesh",
    },
  ];

  return (
    <div className="pt-24 px-6 pb-24 min-h-screen bg-gradient-to-b from-stone-50 via-white to-lime-100 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-lime-700 mb-4" data-aos="fade-in">
        🌿 About SowSure
      </h1>
      <p className="text-center text-md text-gray-600 mb-10 italic">A sustainable farming planner built by Team Thunders ⚡</p>

      {/* Problem Statement and Solution */}
      <div className="max-w-5xl mx-auto space-y-6 text-justify text-md text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-leaf mb-2">🚨 The Problem</h2>
          <p>
            Many small and marginal farmers in India face challenges in deciding which crops to grow, how to rotate or intercrop them effectively,
            and where to get market and disease insights. Limited access to personalized, data-driven planning tools leads to suboptimal yield, soil degradation, and market losses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-leaf mb-2">💡 Our Solution</h2>
          <p>
            SowSure is an intelligent web-based assistant that helps farmers plan their crop cycles using AI-based recommendations.
            It considers soil type, water access, and crop history to generate crop plans. It also includes disease detection, market price visualization,
            calendar-based task reminders, and an upcoming labor connection feature — all in the farmer's preferred language.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-leaf mb-2">👨‍👩‍👦 Contributors – Team Thunders ⚡</h2>
          <ul className="space-y-4 mt-4">
            {team.map((member, index) => (
              <li
                key={index}
                className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between"
              >
                <div>
                  <p className="font-bold text-lg text-lime-700">{member.name}</p>
                  <p className="text-sm text-gray-600 italic">{member.email}</p>
                </div>
                <div className="flex gap-4 mt-2 sm:mt-0 text-xl text-lime-700">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Feedback Icon */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/feedback"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-lime-600 text-white text-2xl hover:bg-lime-700 shadow-lg transition-all"
          title="Give Feedback"
        >
          ✍️
        </Link>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500 italic">
        Built for farmers who feed the world — with tech that empowers them.
      </p>
    </div>
  );
}
