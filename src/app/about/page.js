"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      img: "/images/intro.jpg", // Replace with your own image path or remove
    },
    {
      id: "team",
      title: "Our Team",
      img: "/images/team.jpg",
    },
    {
      id: "mission",
      title: "Our Mission",
      img: "/images/mission.jpg",
    },
    {
      id: "contact",
      title: "Contact Us",
      img: null,
      content: (
          <>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
             We&apos;d love to hear from you! Reach out through any of the methods below.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Email:</strong> contact@yourcompany.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Startup Lane, Innovation City, CA</li>
          </ul>
          <a
              href="/contact"
              className="inline-block px-4 py-2 mt-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
              Get in Touch
          </a>
          </>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          About Us
        </h1>

        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap justify-center gap-4 text-blue-600 font-semibold">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:underline"
            >
              {section.title}
            </a>
          ))}
        </nav>

        {/* Sections */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-24 scroll-mt-28"
          >
            <div className="bg-white dark:bg-neutral-900 shadow-md rounded-2xl p-6 sm:p-10 border border-neutral-200 dark:border-neutral-700 transition-all">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Optional image */}
                {section.img && (
                  <div className="w-full md:w-1/3">
                    <Image
                      src={section.img}
                      alt={`${section.title} image`}
                      width={400}
                      height={300}
                      className="rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                )}

                {/* Text content */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {section.title}
                    </h2>

                    {section.content ? (
                        section.content
                    ) : (
                        <>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                            nisl nec tincidunt lacinia, nunc nisl aliquam massa, eget aliquam nisl
                            nunc eu nisi. Curabitur in malesuada justo.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Integer volutpat, nisl eget aliquam tincidunt, nunc nisl aliquet nisl,
                            eget aliquam nunc nisl eu nisl. Vivamus fringilla sapien non odio
                            bibendum, at tincidunt risus fermentum.
                        </p>
                        </>
                    )}
                    </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
