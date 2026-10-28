function About() {
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-red-900">
            About us
          </h1>
          <div className="space-y-4">
            <p>
              At THE DAILY TABLE, we believe that great food brings people
              together. Our goal is to provide a dining experience that combines
              quality, flavor, and comfort, ensuring every guest feels welcome
              from the moment they step through our doors.
            </p>
            <p>
              Our menu features a carefully crafted selection of dishes, from
              fresh and crispy appetizers to hearty main courses and delectable
              desserts. Every item is made with high-quality ingredients and
              prepared with attention to detail, so each bite delivers a
              satisfying and memorable taste.
            </p>
            <p>
              Beyond the food, we are committed to exceptional service. Our
              staff is trained to create a friendly, professional, and attentive
              atmosphere, making sure that every visit is smooth, enjoyable, and
              stress-free.
            </p>
            <p>
              At THE MODERN TABLE, we aim to be more than just a restaurant. We
              want to be a place where friends, families, and colleagues can
              gather, celebrate, and create lasting memories—because sharing
              great food is at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <img
            src="./img/17.jpg"
            alt="the modern table banner"
            className="block w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
export default About;
