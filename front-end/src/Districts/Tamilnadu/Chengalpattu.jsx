// src/components/Chengalpattu.jsx
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "🏛 Temples & Heritage",
    places: [
      {
        name: "Mahabalipuram (Mamallapuram) – Group of Monuments & Shore Temple",
        description:
          "UNESCO World Heritage Site with Shore Temple, Pancha Rathas, Arjuna’s Penance; Pallava-era rock-cut architecture by the sea.",
        image:
          "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/8/2/mahabalipuram.jpg",
      },
      {
        name: "Vedagiriswarar Temple, Thirukazhukundram (Eagle Temple)",
        description:
          "Hilltop Shiva temple famed for the legend of visiting eagles (Pakshi Theertham) and sweeping views.",
        image:
          "https://i.pinimg.com/originals/53/bd/b2/53bdb2e7f04b2a767430219417c253cb.jpg",
      },
      {
        name: "Thiruporur Kandaswamy Temple",
        description:
          "Historic Murugan temple with Pallava roots; vibrant festivals and classic Dravidian architecture.",
        image:
          "https://tse1.mm.bing.net/th/id/OIP.7KrpAtDBQFQblQNrlWvC9AHaD5?pid=Api&P=0&h=180",
      },
      {
        name: "Tiruvidanthai – Nitya Kalyana Perumal Temple (Honourable Mention)",
        description:
          "Ancient Vishnu temple associated with marital blessings and continuous daily wedding rituals.",
        image:
          "https://hrce.tn.gov.in/resources/docs/temple_images/1839/53429/image_1.jpg",
      },
     
    ],
  },
  {
    title: "🌿 Nature & Wildlife",
    places: [
      {
        name: "Vedanthangal Bird Sanctuary",
        description:
          "One of India’s oldest sanctuaries (since 1936); Ramsar site packed with migratory birds in season.",
        image:
          "https://tse4.mm.bing.net/th/id/OIP.7EpraieCa_6X_6b9BQeoCAHaE8?pid=Api&P=0&h=180",
      },
      {
        name: "Madras Crocodile Bank Trust & Centre for Herpetology",
        description:
          "Founded by Romulus Whitaker (1976); conservation park with crocodiles, turtles and snakes.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d5/ae/c6/crocodiles-enclosure.jpg?w=1200&h=1200&s=1",
      },
      {
        name: "Arignar Anna Zoological Park (Vandalur Zoo)",
        description:
          "Among Southeast Asia’s largest zoos; diverse fauna and a dedicated butterfly enclosure.",
        image:
          "https://i.ytimg.com/vi/VLU1UbpZgzM/maxresdefault.jpg",
      },
    ],
  },
  {
    title: "🏖️ Beaches & Backwaters",
    places: [
      {
        name: "Kovalam (Covelong) Beach",
        description:
          "Serene beach village; popular for surfing, catamaran rides, diving and relaxed coastal vibes.",
        image:
          "https://media.istockphoto.com/photos/chennai-tamilnadu-india-febrauary-15-2019-covelong-beach-in-chennai-picture-id1151829359?k=20&m=1151829359&s=612x612&w=0&h=WPx5XFBhhjfMcwyigdDYXVbV7siVYXhzbEcXr66jSM4=",
      },
      {
        name: "Muttukadu Boat House / Backwaters",
        description:
          "Scenic backwaters with TTDC boating; activities include rowing, speedboats, windsurfing and more.",
        image:
          "https://www.trawell.in/admin/images/upload/818878780Muttukadu_Main.jpg",
      },
    ],
  },
  {
    title: "🏰 Forts & Colonial History",
    places: [
      {
        name: "Sadras Fort",
        description:
          "17th‑century Dutch coastal fort with remnants of a church and cemetery; quiet heritage spot.",
        image:
          "https://storytrails.in/wp-content/uploads/2023/07/Sadras-Fort-2048x1152.jpg",
      },
    ],
  },
  {
    title: "💧 Lakes",
    places: [
      {
        name: "Maduranthakam Lake",
        description:
          "One of the district’s largest lakes (~2400 acres); scenic and historically significant.",
        image:
          "https://i.ytimg.com/vi/-qZLkjCaMA8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGEgZShCMA8=&rs=AOn4CLCu68_DY_7fg6RbLFsdeP1YxhjN6w",
      },
      {
        name: "Kolavai Lake (Chengalpattu)",
        description:
          "Tranquil lakeside popular with birdlife and sunset views near Chengalpattu town.",
        image:
          "https://3.bp.blogspot.com/-twAZs8geiGI/V52RRtbL8vI/AAAAAAAAohc/ipieFtC2ogMPXG3B0xrxQES8ZrfdWv9ZACLcB/s1600/DSC_0042.jpg",
      },
    ],
  },
];

export default function Chengalpattu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-sky-900">Chengalpattu District</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          From the sculpted stones of Mahabalipuram to the soaring flocks at Vedanthangal,
          Chengalpattu blends world‑class heritage, rich wildlife, serene beaches and calm backwaters.
        </p>
      </motion.div>

      {/* Sections */}
      {SECTIONS.map((section, sIdx) => (
        <div key={sIdx} className="mb-14">
          <h2 className="text-2xl font-bold text-sky-800 mb-6">{section.title}</h2>
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
                  <h3 className="text-lg font-bold text-sky-900">{place.name}</h3>
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
