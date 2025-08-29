import React from "react";
import { useNavigate } from "react-router-dom";

const DISTRICTS = [
  { name: "Ariyalur", image: "https://tse1.mm.bing.net/th/id/OIP.Xs6X8vHmX45iw7NHNY64NAHaEX?pid=Api&P=0&h=180" },
  { name: "Chengalpattu", image: "https://tamilnadutourisminfo.com/wp-content/uploads/2018/01/Mahabalipuram_Shore_Temple.jpg" },
  { name: "Chennai", image: "https://wallpapers.com/images/hd/chennai-railway-station-9pgf80lrc5w26s3p.jpg" },
  { name: "Coimbatore", image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg" },
  { name: "Cuddalore", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/57/91/92/pichavaram-mangrove-forest.jpg?w=1200&h=-1&s=1" },
  { name: "Dharmapuri", image: "https://media-cdn.tripadvisor.com/media/photo-s/17/8a/a0/55/hogenakkal-falls.jpg" },
  { name: "Dindigul", image: "https://i.pinimg.com/736x/e7/8e/f1/e78ef13267e98559a5ff224ba60d3269.jpg" },
  { name: "Erode", image: "https://hrce.tn.gov.in/resources/docs/templeinfo/history/10224/103/image_1.jpg" },
  { name: "Kallakurichi", image: "https://tse4.mm.bing.net/th/id/OIP.EpKPMFrNmv3F6uQyzrAa0QHaEL?pid=Api&P=0&h=180" },
  { name: "Kanchipuram", image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_696066628_20191213144534.jpg" },
  { name: "Kanniyakumari", image: "http://image3.mouthshut.com/images/imagesp/l/Kanyakumari-925004350s.jpg" },
  { name: "Karur", image: "https://tamilnadutourisminfo.com/wp-content/uploads/2019/07/karur.jpg" },
  { name: "Krishnagiri", image: "https://tamilwebworld.in/wp-content/uploads/2017/01/Shree-Parshwa-Padmavathi-Shaktipeet-Tirth-Dham.jpg" },
  { name: "Madurai", image: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28160317/Madurai-feature-compressed.jpg" },
  { name: "Mayiladuthurai", image: "https://tse2.mm.bing.net/th/id/OIP.3NptAnSYPubBTS2VPd5EGQHaDt?pid=Api&P=0&h=180" },
  { name: "Nagapattinam", image: "https://alchetron.com/cdn/nagapattinam-district-e0675d70-c76a-4eb1-9f8d-600566f7286-resize-750.jpeg" },
  { name: "Namakkal", image: "https://1.bp.blogspot.com/-hwZTZIY1KyU/WYKCGxgxRxI/AAAAAAAA9gM/6YBmgu5A8m0pQlIE8DL-smJOoshK6n-wACKgBGAs/w1200-h630-p-k-no-nu/DSC_0718.JPG" },
  { name: "Nilgiris", image: "https://www.mudumalainationalpark.in/images/nilgiri-hills-mudumalai.jpg" },
  { name: "Perambalur", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/perambalur-1655996823_74bfd05a5298c0ce76cd.webp" },
  { name: "Pudukkottai", image: "https://tamilnadutourisminfo.com/wp-content/uploads/2019/07/Tirumayam_fort.jpg" },
  { name: "Ramanathapuram", image: "https://rameswaramramanathar.hrce.tn.gov.in/resources/docs/templeinfo/history/35671/9851/image_1.jpg" },
  { name: "Ranipet", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ranipet-district-1656502686_04f5b44eb7a865f54466.webp" },
  { name: "Salem", image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/1008-Lingam-Temple-6_dec.jpg" },
  { name: "Sivagangai", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/sivaganga-1656013801_c196928c461ae2a3c25b.webp" },
  { name: "Tenkasi", image: "https://tse3.mm.bing.net/th/id/OIP.s9XM49xTe52ZxNwEixqlDgHaE7?pid=Api&P=0&h=180" },
  { name: "Thanjavur", image: "http://www.hotelgnanam.com/header/thanjavur-hotel/thanjavur.jpg" },
  { name: "Theni", image: "https://tramptraveller.com/wp-content/uploads/2021/06/120190124081209142440.jpg" },
  { name: "Thiruvallur", image: "http://www.onefivenine.com/images/districtimages/Tamil%20Nadu/Thiruvallur/3.jpg" },
  { name: "Thiruvarur", image: "https://www.tourmyindia.com/states/tamilnadu/images/best-time-visit-thiruvarur.jpg" },
  { name: "Thoothukudi", image: "http://im.hunt.in/cg/Thoothukkudi/City-Guide/basilica.jpg" },
  { name: "Tiruchirappalli", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/tiruchirappalli-1656055487_fac78515498b39967ce2.webp" },
  { name: "Tirunelveli", image: "https://miro.medium.com/v2/resize:fit:1024/1*x-LSNPQVQt_15ta8P9mmmQ.jpeg" },
  { name: "Tirupathur", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ketty-valley-view-1656164366_12148eecaea7235e8668.webp" },
  { name: "Tiruppur", image: "https://i0.wp.com/tourismtn.com/wp-content/uploads/2020/12/Amaravathi-River-1.jpg?resize=696%2C391&ssl=1" },
  { name: "Tiruvannamalai", image: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0c/f7/92/d3/most-astounding-temple.jpg" },
  { name: "Vellore", image: "http://www.hotelnambi.in/images/1706.jpg" },
  { name: "Viluppuram", image: "https://thumbs.dreamstime.com/b/incredible-india-tourism-gingee-fort-senji-tamil-nadu-lies-villupuram-district-built-kings-konar-dynasty-229859484.jpg" },
  { name: "Virudhunagar", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/srivilliputhur-andal-temple-1656235549_c00a2b162e36825fac57.webp" },
];


export default function TamilNaduDistrictCards({ columns = 3 }) {
  const navigate = useNavigate();

  const colClass = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns] || "md:grid-cols-3";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Tamil Nadu — Districts
          </h1>
          <p className="text-sm text-gray-600">{DISTRICTS.length} districts</p>
        </header>

        <div className={`grid gap-6 ${colClass} sm:grid-cols-1`}>
          {DISTRICTS.map((district) => (
            <article
              key={district.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative h-64 w-full">
                <img
                  src={district.image}
                  alt={`${district.name} image`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-4 bottom-4 inline-block bg-white/90 text-gray-900 text-sm font-semibold rounded-full px-3 py-1 backdrop-blur">
                  {district.name}
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{district.name}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  A beautiful part of Tamil Nadu. Replace this description with
                  real content or top tourist places for {district.name}.
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={district.image}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium underline"
                  >
                    View image
                  </a>

                  <button
                    onClick={() => navigate(`/district/${encodeURIComponent(district.name)}`)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-medium shadow-sm hover:bg-indigo-700 focus:outline-none"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-8 text-xs text-gray-500">
          Replace sample image URLs with curated images for best results.
        </footer>
      </div>
    </div>
  );
}
