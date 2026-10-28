function Home() {
  const testimonials = [
    {
      message:
        "Oh my gosh, everything here is so cute and delicious! I took so many pictures before eating because the presentation is amazing! The desserts are my favorite. Im definitely posting this!",
      name: "march 7th",
    },
    {
      message:
        "The ambiance here is lovely and relaxing. The dishes are beautifully prepared and full of flavor. It reminds me of enjoying a peaceful cup of coffee aboard the Astral Express. I would gladly visit again.",
      name: "himeko",
    },
    {
      message:
        "A well-managed establishment. The staff are disciplined, attentive, and respectful. The cuisine is refined and thoughtfully crafted. It is rare to find a place that balances quality and comfort this well",
      name: "welt",
    },
    {
      message:
        "The environment is calm and quiet — suitable for enjoying a proper meal. The flavors are clean and balanced. I appreciate the efficiency of the service. I would recommend it.",
      name: "dan heng",
    },
    {
      message:
        "Pom-Pom is very satisfied! The food arrived on time, just like a perfectly scheduled train! The place is clean, organized, and the service is excellent. Pom-Pom approves this restaurant",
      name: "pom-pom",
    },
    {
      message:
        "After traveling across galaxies, this is exactly the kind of place we needed. Filling portions, rich flavors, and great service. Five stars. We’ll make a stop here again.",
      name: "caelus",
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24 text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 blur-md"
          style={{ backgroundImage: "url('/img/1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w[90%] max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-5xl">
            Welcome to The Daily Table
          </h1>
          <p className="text-lg md:text-xl">
            We serve more than just food — we create memorable dining
            experiences. From freshly prepared dishes to warm and friendly
            service, every detail is crafted to make you feel at home. Whether
            you're gathering with family, celebrating with friends, or simply
            treating yourself, our cozy atmosphere and flavorful meals are here
            to satisfy every craving.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-900 ">
            Customer's Testimonials
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonials) => (
              <div
                key={testimonials.name}
                className="p-4 bg-white border-red-900 shadow-sm"
              >
                <p className="italic">"{testimonials.message}"</p>
                <span className="block mt-2 font-bold text-right text-gray-6000">
                  - {testimonials.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
