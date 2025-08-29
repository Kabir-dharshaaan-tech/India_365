import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

// 28 States of India with images
const STATE_IMAGES = {
  "Andhra Pradesh": "https://1.bp.blogspot.com/-GrQxPnG3n3g/YNLpohLWzVI/AAAAAAAAiAQ/WFSGuuaNqysxkkwAXiKzir9A3Tl2z3MCwCLcBGAsYHQ/s696/AndhraPradesh.jpg",
  "Arunachal Pradesh": "https://www.indianholiday.com/pictures/travelguide/other-images/dest_head_img-545.jpeg",
  Assam: "https://4.bp.blogspot.com/-DObySIEVISA/Vzv68SHEpmI/AAAAAAAAAC8/OdFyywMw6gobt2DtWmpH4GCvc4c8kcNEACLcB/s1600/assam4.jpg",
  Bihar: "https://imgk.timesnownews.com/story/Mahabodhi_temple_Bodhgaya_Bihar.png",
  Chhattisgarh: "https://www.adotrip.com/public/images/state/contentImg/5f3fe6fddfd09.jpg",
  Goa: "https://i.ytimg.com/vi/9NvF57IVBKo/hqdefault.jpg",
  Gujarat: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Akshardham_Gandhinagar_Gujarat.jpg/624px-Akshardham_Gandhinagar_Gujarat.jpg",
  Haryana: "https://www.adotrip.com/public/images/state/master_images/5f1959b56ea1a-Haryana_Attractions.jpg",
  "Himachal Pradesh": "https://travelhyme.com/wp-content/uploads/2021/06/shimla-himachal-pradesh-travelhyme.jpg",
  Jharkhand: "https://edge.ixigo.com/ixi-api/img/522d5844e4b022c0dcf712bb_600x315.jpg",
  Karnataka: "https://tse3.mm.bing.net/th/id/OIP.vxbkT48mExMpE75AfWu2YgHaDo?pid=Api&P=0&h=180",
  Kerala: "https://assets.telegraphindia.com/telegraph/2023/Apr/1681815094_1024px-napier_museum_thiruvanant.jpg",
  "Madhya Pradesh": "https://assets.architecturaldigest.in/photos/6008504c3a9d9570bc842969/16:9/w_1280,c_limit/madhya-pradesh-monuments-1366x768.jpg",
  Maharashtra: "https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg",
  Manipur: "http://photos.wikimapia.org/p/00/04/07/17/01_big.jpg",
  Meghalaya: "https://i.pinimg.com/originals/43/7c/f4/437cf455369f640c11cc874e45d39e60.jpg",
  Mizoram: "https://tse4.mm.bing.net/th/id/OIP.7j_1g6a2JjixkmWJ2rmPCgHaEo?pid=Api&P=0&h=180",
  Nagaland: "https://www.thesevensister.com/blog/wp-content/uploads/2017/03/Kohima.jpg",
  Odisha: "https://odishatourism.gov.in/content/dam/tourism/home/discover/major-cities/bhubaneswar/gallery/gallery2.jpg",
  Punjab: "https://www.adotrip.com/public/images/state/master_images/5f48f78d7037e-Punjab_Attractions_1.jpg",
  Rajasthan: "https://cdn.britannica.com/50/152850-050-2DB7645E/Wall-centre-background-Amer-Palace-Sun-Gate.jpg",
  Sikkim: "https://images.memphistours.com/large/377407941_Sikkim.jpg",
  "Tamil Nadu": "https://bespokeindiatravel.co.uk/wp-content/uploads/2018/01/Chennai.jpg",
  Telangana: "https://www.lifeberrys.com/img/article/telangana-1595578583-lb.jpg",
  Tripura: "https://i.pinimg.com/originals/23/e3/cf/23e3cf52ba44778c15fae2cb512507f4.jpg",
  "Uttar Pradesh": "https://1.bp.blogspot.com/-32LJfow3mMo/Wy3nl-YUbsI/AAAAAAAAEug/QXtyXYPso_IWacOXG28h-bmbOP3jjdlewCLcBGAs/s1600/Lucknow.jpg",
  Uttarakhand: "https://images.herzindagi.info/image/2020/Jul/gairsain-uttarakhand.jpg",
  "West Bengal": "https://curlytales.com/wp-content/uploads/2023/03/west-bengal.jpg",
};

// Get states list from keys of STATE_IMAGES
const STATES = Object.keys(STATE_IMAGES);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function India365Home() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return STATES;
    return STATES.filter((s) => s.toLowerCase().includes(t));
  }, [q]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Top bar */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 shadow-lg grid place-items-center text-white font-bold">
              IN
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                India{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
                  365
                </span>
              </h1>
              <p className="text-sm text-gray-500">
                Explore all 28 states in a single glance
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="w-64 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a state..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-3xl p-6 sm:p-10 bg-white shadow-sm ring-1 ring-black/5 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/50 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-sky-200/50 blur-2xl" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Discover the diversity of India
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Click a card to dive into itineraries, cuisine, landscapes, and
                culture—crafted for quick planning.
              </p>
            </div>

            {/* Mobile search */}
            <div className="w-full md:w-72 sm:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search a state..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filtered.length}
            </span>{" "}
            of 28 states
          </p>
          <div className="hidden sm:block text-xs text-gray-400">
            Tip: Press{" "}
            <kbd className="px-1.5 py-0.5 rounded border bg-gray-100">Ctrl</kbd>{" "}
            +{" "}
            <kbd className="px-1.5 py-0.5 rounded border bg-gray-100">K</kbd> to
            focus search
          </div>
        </div>

        <AnimatePresence mode="sync">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filtered.map((name) => (
              <motion.div key={name} variants={item} layout>
                <StateCard name={name} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} India 365. Built with ❤️ using React &
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StateCard({ name }) {
  const navigate = useNavigate();
  const imageUrl = STATE_IMAGES[name];

  return (
    <div className="group h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 bg-white/90 backdrop-blur p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold tracking-tight">{name}</h3>
          <MapPin className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
        </div>
        <p className="text-sm text-gray-500">
          Plan days, hotspots, food, and festivals for{" "}
          <span className="font-medium">{name}</span>.
        </p>

        {/* Image instead of Scenic preview */}
        <div className="mt-4 h-24 rounded-xl overflow-hidden border">
          <img
            src={imageUrl}
            alt={`${name} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => navigate(`/state/${encodeURIComponent(name)}`)}
          className="w-full py-2 px-4 text-sm font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow"
        >
          Explore {name}
        </button>
      </div>
    </div>
  );
}
