export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to Our Startup</h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto mb-6">
          Building the future of technology, one line of code at a time.
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a href="/about" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Learn About Us
          </a>
          <a href="/projects" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            View Projects
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Features</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {["Fast", "Secure", "Scalable"].map((feature, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Explore some of our ongoing innovations, from autonomous navigation to cutting-edge hardware.
        </p>
        <a href="/projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Explore Projects
        </a>
      </section>

      {/* Testimonials or News Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Latest News</h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Stay up-to-date with our latest breakthroughs and announcements.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "We're featured in TechCrunch!",
                excerpt: "Our newest drone system caught industry attention.",
              },
              {
                title: "New VR Pilot Platform Launched",
                excerpt: "We just launched a VR-based teleoperation tool for remote robotics control.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-bold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </div>
            ))}
          </div>
          <a
            href="/news"
            className="mt-10 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            View All News
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
