// src/components/Chennai.jsx
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "🌊 Beaches & Nature",
    places: [
      {
        name: "Marina Beach",
        description:
          "The longest natural urban beach in India (13 km). Popular for sunrise views, street food, and evening strolls.",
        image:
          "https://lp-cms-production.imgix.net/image_browser/GettyImages-624091590.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4",
      },
      {
        name: "Elliot’s Beach (Besant Nagar Beach)",
        description:
          "A quieter alternative to Marina Beach. Famous for the Karl Schmidt Memorial and vibrant café culture.",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/08/13.jpg",
      },
      {
        name: "Guindy National Park & Snake Park",
        description:
          "One of the few national parks inside a city. Home to deer, jackals, blackbucks, and birds. The adjoining Snake Park houses reptiles and crocodiles.",
        image:
          "https://media1.thrillophilia.com/filestore/6cjlbm2nzi0olwo7t4kr47s7wdly_1576913869_guindy.jpg?w=1440&dpr=2",
      },
    ],
  },
  {
    title: "🛕 Temples & Churches",
    places: [
      {
        name: "Kapaleeshwarar Temple (Mylapore)",
        description:
          "A 7th-century Dravidian-style Shiva temple, famous for its colorful gopuram and the annual Arubathimoovar Festival.",
        image:
          "https://www.templeduniya.com/wp-content/uploads/2022/05/Project-39-min.jpg",
      },
      {
        name: "Santhome Basilica",
        description:
          "A majestic Neo-Gothic cathedral built over the tomb of St. Thomas the Apostle. One of only three churches in the world built over an apostle’s tomb.",
        image:
          "https://chennaitourism.travel/images/places-to-visit/headers/san-thome-basilica-church-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      },
    ],
  },
  {
    title: "🏰 History & Heritage",
    places: [
      {
        name: "Fort St. George",
        description:
          "Built in 1644 by the British East India Company. Houses a museum with colonial artifacts and St. Mary’s Church (the oldest Anglican church in India).",
        image:
          "https://2.bp.blogspot.com/-nSWx1nysaWs/WDqINp2r7yI/AAAAAAAAACU/gw-9y9ISZqk02Cs-5T4GKEiULQt7EBJNQCLcB/s1600/Secretariat-inside-Fort-St-George-Chennai-source-keralalandscape.com_.jpg",
      },
      {
        name: "Government Museum, Egmore",
        description:
          "The second oldest museum in India (1851). Famous for its Chola bronzes, archaeology, and numismatics collections.",
        image:
          "https://pbs.twimg.com/media/DmT23znVsAAlPxR.jpg",
      },
    ],
  },
  {
    title: "🏛 Arts, Monuments & Science",
    places: [
      {
        name: "Valluvar Kottam",
        description:
          "A monument dedicated to Thiruvalluvar. Shaped like a 39-m tall temple chariot with all 133 chapters of Thirukkural inscribed.",
        image:
          "https://www.mistay.in/travel-blog/content/images/2021/07/Valluvar-Kottam-I-MiStay.jpeg",
      },
      {
        name: "Birla Planetarium & Periyar Science Centre",
        description:
          "Cosmic shows, science exhibits, and interactive learning. A favorite for kids and astronomy enthusiasts.",
        image:
          "https://www.indianholiday.com/wordpress/wp-content/uploads/2024/08/birla-planetarium-and-science-museum-head-2199.png",
      },
      {
        name: "Cholamandal Artists’ Village",
        description:
          "India’s largest artists’ commune, founded in 1966. A hub for contemporary art, sculptures, and exhibitions.",
        image:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201702/leisure-story%2C-facebook_647_021717053745.jpg",
      },
    ],
  },
];

export default function Chennai() {
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">🌆 Top 10 Places to Visit in Chennai</h1>
      {SECTIONS.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.places.map((place, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{place.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{place.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
