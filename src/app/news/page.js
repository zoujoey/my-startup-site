// File: src/app/news/page.js
"use client";

export default function NewsPage() {
  const news = [
    {
      date: "2025-06-30",
      title: "Startup featured in TechCrunch!",
      link: "https://techcrunch.com/your-article",
    },
    {
      date: "2025-06-10",
      title: "We secure $2M in seed funding",
      link: "https://example.com/funding-news",
    },
    {
      date: "2025-05-20",
      title: "Our VR research published in IEEE Robotics & Automation",
      link: "https://ieeexplore.ieee.org/document/your-paper",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          News & Media
        </h1>

        <ul className="space-y-6">
          {news.map((item, idx) => (
            <li key={idx} className="border-l-4 border-blue-600 pl-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline font-semibold"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}