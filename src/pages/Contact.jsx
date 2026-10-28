import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted: ", formData);

    alert("thnk yu for contacting the modern table");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-red-900">
            Contact us
          </h1>
          <div className="text-center mb-8 space-y-2">
            <p>
              <strong>Address: </strong> Brgy Tiguma, Pagaadian City,
              Philippines.
            </p>
            <p>
              <strong>Phone: </strong> (+63) 910-1749-010
            </p>
            <p>
              <strong>Email: </strong> @jariolkavenjay@gmail.com
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border-gray-300 rounded-md focus-outline-none focus:ring-2 focus:ring-red-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Email:{" "}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border-gray-300 rounded-md focus-outline-none focus:ring-2 focus:ring-red-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Message:{" "}
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border-gray-300 rounded-md focus-outline-none focus:ring-2 focus:ring-red-900"
            />
          </div>
          <button
            type="submit"
            className="bg-red-800 hover:br-red-800 text-white px-6 py-3 rounded-md trasistion-colors duration duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
