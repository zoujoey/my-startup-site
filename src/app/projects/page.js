// File: src/app/projects/page.js
"use client";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Project Alpha",
      description: "Developing AI-based navigation for autonomous drones.",
      image: "/images/project1.jpg",
    },
    {
      title: "Project Beta",
      description: "A VR platform for immersive robotic teleoperation.",
      image: "/images/project2.jpg",
    },
    {
      title: "Project Gamma",
      description: "Lightweight battery tech for extended robotic deployment.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          Ongoing Projects
        </h1>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md rounded-2xl p-6 sm:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
