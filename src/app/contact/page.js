export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 text-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
            <p>123 Startup Lane<br />Toronto, ON M4B 1B3<br />Canada</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p>
              <a href="mailto:contact@startup.com" className="text-blue-600 hover:underline">
                contact@startup.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p>
              <a href="tel:+14165551234" className="text-blue-600 hover:underline">
                +1 (416) 555-1234
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
            <p>Monday – Friday: 9AM – 6PM EST<br />Saturday & Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
