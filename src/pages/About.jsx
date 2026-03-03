import Navbar from "../components/Navbar";
import doctor from"../assets/Logo.png";
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
      <Navbar/>
      {/* HERO SECTION */}
      <section className="text-center bg-blue-50 rounded-3xl p-10 shadow">
        <h1 className="text-4xl font-bold text-gray-800">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are committed to providing compassionate, high-quality healthcare
          through experienced doctors and modern medical solutions.
        </p>
      </section>

      {/* ABOUT STORY */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={doctor}
          alt="Hospital"
          className="h-25 md:h-25 w-auto object-contain "
          
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our hospital brings together skilled doctors, advanced technology,
            and patient-centered care to ensure the best treatment experience.
            We believe healing begins with trust and compassion.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To provide affordable, accessible, and excellent healthcare for
            everyone.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-bold text-blue-600">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To become a trusted healthcare partner known for innovation and care.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Experienced Doctors",
            "24/7 Emergency Care",
            "Modern Equipment",
            "Patient-Centered Service",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-2xl text-center shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          ["50+", "Expert Doctors"],
          ["20K+", "Happy Patients"],
          ["15+", "Departments"],
          ["4.9★", "Patient Rating"],
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">{stat[0]}</h3>
            <p className="text-gray-600">{stat[1]}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-600 text-white p-10 rounded-3xl">
        <h2 className="text-3xl font-bold">Your Health is Our Priority</h2>
        <p className="mt-2">Book your appointment with our specialists today.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>

    </div>
  );
}