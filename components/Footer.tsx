import { HeartHandshake, Phone, MapPin, Mail, ChevronRight, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#005BCF] pt-20 pb-10 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#005BCF] shadow-sm">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white leading-tight">Klinik <span className="text-[#1DA1DB]">Raden Saleh</span></h2>
              </div>
            </div>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Layanan medis profesional dan terpercaya dengan fasilitas modern serta komitmen tinggi terhadap privasi pasien di Jakarta.
            </p>
            <div className="flex gap-4">
              {/* Sosmed icons can go here */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#1DA1DB] rounded-full inline-block"></span> Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {['Beranda', 'Tentang Kami', 'Prosedur', 'Biaya Layanan', 'Tanya Jawab (FAQ)'].map(link => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight size={14} className="text-[#1DA1DB] group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#1DA1DB] rounded-full inline-block"></span> Layanan
            </h3>
            <ul className="space-y-3">
              {['Konsultasi Medis', 'Pemeriksaan USG', 'Pendampingan Pasien', 'Konsultasi Pasca Tindakan', 'Reservasi Online'].map(service => (
                <li key={service}>
                  <p className="text-blue-100 flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-[#1DA1DB]" />
                    {service}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#1DA1DB] rounded-full inline-block"></span> Informasi Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <MapPin size={18} className="text-[#1DA1DB] shrink-0 mt-0.5" />
                <span>Jl. Raden Saleh Raya, RT.1/RW.2, Kenari, Kec. Senen, Kota Jakarta Pusat, DKI Jakarta 10430</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Phone size={18} className="text-[#1DA1DB] shrink-0" />
                <span>+62 811-1111-111</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Mail size={18} className="text-[#1DA1DB] shrink-0" />
                <span>info@klinik-radensaleh.example.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <Clock size={18} className="text-[#1DA1DB] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Layanan 24 Jam</p>
                  <p>Senin - Minggu</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <p>&copy; {new Date().getFullYear()} Klinik Raden Saleh. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer Medis</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
