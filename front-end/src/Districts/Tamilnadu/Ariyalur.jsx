// src/components/Ariyalur.jsx
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "🏛 Temples & Heritage",
    places: [
      {
        name: "Gangaikonda Cholapuram Temple",
        description:
          "UNESCO World Heritage Site, magnificent Chola-era architecture built by Rajendra Chola I.",
        image:
          "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/gangaikonda-cholapuram-1653462626_d1ad072dfb78c46813de.webp",
      },
      {
        name: "Rajendra Cholan Manimandapam",
        description:
          "Museum and memorial for Rajendra Chola, showcasing the glory of the Chola dynasty.",
        image:
          "http://factins.com/wp-content/uploads/2016/05/Webp.net-resizeimage.jpg",
      },
      {
        name: "Kaliyuga Varadaraja Perumal Temple, Kallankurichi",
        description:
          "Famous Vishnu temple near Ariyalur town, attracts thousands during the Chariot Festival.",
        image:
          "https://3.bp.blogspot.com/-9-5EWL_2XJk/Vl31sQf6_GI/AAAAAAAARSw/pU7U2hWYF_o/s1600/Kaliyuga-Varadaraja-Perumal-Temple-8.jpg",
      },
      {
        name: "Sivan Temple, Govindaputtur",
        description:
          "Ancient Shiva temple from Chola times with inscriptions revealing its rich heritage.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/65/0a/63/padi-sivan-temple.jpg",
      },
      {
        name: "Jayankondam Temples Cluster",
        description:
          "Old Chola-era shrines dedicated to Lord Shiva & Vishnu, highlighting Ariyalur’s heritage.",
        image:
          "https://imgmedia.lbb.in/media/2019/12/5de5354cd6c5ac59bbecb200_1575302476330.jpg",
      },
      {
        name: "Sendurai Local Temples & Culture Spots",
        description:
          "Traditional Dravidian-style temples and cultural heritage of Ariyalur’s villages.",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUM2EKAJPk7oqeBVTSh_Ub2Qedfgw6SJKDchjeJYfS-bk9j5jNM2EVuLk6dZdo66EbndfZ2yfQ4zZqsW12aM1IvJm0W6vQRwgSaDfVwipR0moxrsI9CpKyyQ6g0fiPAEaH5_jjgCnhqq4/s1600/2018-10-09+%25284%2529.jpg",
      },
    ],
  },
  {
    title: "🌿 Nature & Wildlife",
    places: [
      {
        name: "Karaivetti Bird Sanctuary (Thirumanur)",
        description:
          "Freshwater lake sanctuary, home to pelicans, storks, ibis, and migratory birds.",
        image:
          "https://th-i.thgim.com/public/incoming/66x6us/article67881543.ece/alternates/LANDSCAPE_1200/Karaivetti_07.jpg",
      },
      {
        name: "Vettakudi Karaivetti Lake & Wetlands",
        description:
          "Part of the bird sanctuary region, scenic wetland for bird watching & photography.",
        image:
          "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_Harike%20Wetland_4_l_554_831.jpg",
      },
    ],
  },
  {
    title: "🏺 Archaeology & Fossils",
    places: [
      {
        name: "Keelapalur Fossil Park (Ariyalur Fossils)",
        description:
          "Fossil site with 100-million-year-old remains of ancient marine life.",
        image:
          "https://static.toiimg.com/thumb/msid-70709379,width-1070,height-580,imgsize-645098,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      },
    ],
  },
  {
    title: "⛪ Churches & Heritage",
    places: [
      {
        name: "Elakurichi Adaikalamatha Church",
        description:
          "Historic Catholic church built by Veeramamunivar, a peaceful pilgrimage spot.",
        image:
          "https://catholicshrinebasilica.com/wp-content/uploads/1-11-1.webp",
      },
    ],
  },
];

export default function Ariyalur() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-amber-800">
          Ariyalur District
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Ariyalur, in Tamil Nadu, is famed for its Chola temples, sacred
          shrines, fossil-rich lands, bird sanctuaries, and serene wetlands.
          A blend of history, culture, and natural heritage makes it a fascinating destination.
        </p>
      </motion.div>

      {/* Sections */}
      {SECTIONS.map((section, sIdx) => (
        <div key={sIdx} className="mb-14">
          <h2 className="text-2xl font-bold text-amber-700 mb-6">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.places.map((place, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-amber-700">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{place.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}