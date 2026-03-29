import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">U</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">unode</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#products" className="hover:text-gray-900 transition">
            Products
          </a>
          <a href="#about" className="hover:text-gray-900 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Based in Saudi Arabia
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Building the future,
          <br />
          <span className="text-blue-600">one product at a time.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Unode is a Saudi technology company creating innovative digital
          products that simplify everyday life. From property management to
          education — we build tools that matter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Products
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Digital solutions designed for the Saudi market, built with care and
            precision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
              <svg
                className="w-7 h-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold">Amlakey</h3>
              <span className="text-sm text-gray-400 font-medium">
                Property Management
              </span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              The all-in-one property management app for Saudi landlords.
              Manage properties, track rent payments, monitor utility bills,
              and generate reports — with full Hijri calendar and Ejar
              integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "iOS & Android",
                "Hijri/Gregorian",
                "Ejar Sync",
                "Utility Tracking",
                "Reports",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 font-medium hover:text-blue-700 transition"
              >
                App Store &rarr;
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 font-medium hover:text-blue-700 transition"
              >
                Google Play &rarr;
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all group">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition">
              <svg
                className="w-7 h-7 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold">Masar Qiyas</h3>
              <span className="text-sm text-gray-400 font-medium">
                Exam Preparation
              </span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Smart exam preparation platform for Saudi standardized tests.
              Practice with real questions, track your progress, and get
              personalized study plans to achieve your target score.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "GAT / Qudurat",
                "SAAT / Tahsili",
                "Real Questions",
                "Progress Tracking",
                "Study Plans",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm text-emerald-600 font-medium">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Technology rooted
              <br />
              in Saudi Arabia
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Unode was founded with a simple mission: build world-class digital
              products tailored for the Saudi market. We understand the local
              needs — from Hijri calendars to Arabic-first experiences.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              As a registered Saudi company (CR: 7053929092), we are committed
              to contributing to the Kingdom&apos;s digital transformation under
              Vision 2030.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "2", label: "Products" },
              { number: "2026", label: "Founded" },
              { number: "KSA", label: "Headquarters" },
              { number: "3+", label: "Platforms" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Let&apos;s build something together
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Have a question, partnership idea, or just want to say hello?
          We&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:info@unode.tech"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            info@unode.tech
          </a>
          <a
            href="mailto:support@unode.tech"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            support@unode.tech
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">U</span>
          </div>
          <span className="text-sm">
            Unode Company LLC &middot; CR 7053929092
          </span>
        </div>
        <p className="text-sm">&copy; 2026 Unode. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
