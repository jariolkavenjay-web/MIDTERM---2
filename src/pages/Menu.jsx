const menuSections = [
  {
    title: "Appitizers",
    items: [
      {
        name: "Spring Rolls",
        price: 300,
        image: "./img/2.jpg",
        description:
          "crispy golden rolls filled with seasoned vegetables and savory meat.",
      },
      {
        name: "Chicken Wings",
        price: 450,
        image: "./img/3.jpg",
        description:
          "Juicy, flavorful wiings coated in our signature sauce-crispy on the outside, tender on the inside.",
      },
      {
        name: "Mozzarella Sticks",
        price: 380,
        image: "./img/11.jpg",
        description:
          "Crispy breaded cheese sticks served with a rich marinara dipping sauce.",
      },
    ],
  },
  {
    title: "Main course",
    items: [
      {
        name: "Grilled Salmon",
        price: 1200,
        image: "./img/5.jpg",
        description:
          "Fresh, perfectly grilled salmon served with a buttery lemon sauce and seasonal vegetables.",
      },
      {
        name: "Beef Tenderloin",
        price: 1400,
        image: "./img/6.jpg",
        description:
          " Juicy, tender beef cooked to perfection, paired with roasted potatoes and a rich demi-glace.",
      },
      {
        name: "Creamy Chicken Alfredo",
        price: 1400,
        image: "./img/7.jpg",
        description:
          " Fettuccine pasta tossed in a creamy garlic sauce with tender chicken slices.",
      },
      {
        name: "Crispy Pork Belly",
        price: 1400,
        image: "./img/16.jpg",
        description:
          "Golden, crunchy pork belly served with house-made dipping sauce.",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Chocolate Lava Cake",
        price: 1180,
        image: "./img/8.jpg",
        description:
          " Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
      },
      {
        name: "Cheesecake",
        price: 999,
        image: "./img/9.jpg",
        description:
          " Smooth and creamy classic cheesecake with a freshly picked strawberry on top.",
      },
      {
        name: "Fruit Tart",
        price: 1260,
        image: "./img/10.jpg",
        description:
          " Fresh seasonal fruits atop a crisp pastry shell with sweet custard filling..",
      },
    ],
  },
];

function Menu() {
  return (
    <>
      <section className="py-12">
        <div className="w-90% max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-red-900">
            Our Menu
          </h1>
          {menuSections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="pb-2 mb-5 text-2xl font-bold text-red-900">
                {section.title}
                <div className="mt-2 h-[2px] w-full bg-red-900"></div>
              </h2>
              <ul className="space-y-4 list-none">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col p-4 bg-white rounded-lg shadow-md md:flex-row"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-md mb:4 md:mb-0 md:mr-4"
                    />
                    <div className="flex-1 w-full">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-bold">{item.name}</span>
                        <span className="font-semibold text-red-900 whitespace-nowrap">
                          PHP{item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-gray">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
