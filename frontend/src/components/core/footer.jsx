import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";

export  function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <p className="text-sm text-center md:text-left">
          ©HACKATON NICARAGUA 2025
        </p>

        {/* Redes sociales */}
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

