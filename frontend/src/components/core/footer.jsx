import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#012840] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <p className="text-sm text-center md:text-left">©Nicaragua Go 2025</p>

        {/* Redes sociales */}
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a href="#" className="text-yellow-400 transition">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-yellow-400 transition">
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/nicaragua_go?igsh=MW80NHd4cDZucHl4MA=="
            className="text-yellow-400 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-yellow-400 transition">
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@the_siuuu3?_t=ZM-903RYKZu5Km&_r=1"
            className="text-yellow-400 transition"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
