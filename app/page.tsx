'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PregnancyCalculator from '@/components/PregnancyCalculator';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Stethoscope, Activity, HeartHandshake, 
  FileCheck, Calendar, Phone, ShieldCheck, MapPin, 
  Clock, ChevronDown, User, Star, Quote, MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// === DATA MOCKUPS ===
const services = [
  { icon: <Stethoscope size={32} />, title: "Konsultasi Medis", desc: "Konsultasi tatap muka dengan dokter spesialis berpengalaman mengenai kondisi medis Anda." },
  { icon: <Activity size={32} />, title: "Pemeriksaan USG", desc: "Pemeriksaan ultrasonografi akurat untuk mengetahui usia kandungan dan detail vital lainnya." },
  { icon: <HeartHandshake size={32} />, title: "Pendampingan Pasien", desc: "Dukungan penuh oleh perawat bersertifikat selama proses observasi dan pemulihan." },
  { icon: <FileCheck size={32} />, title: "Kontrol Pasca Tindakan", desc: "Pemantauan komprehensif setelah tindakan untuk memastikan pemulihan yang optimal." },
  { icon: <Calendar size={32} />, title: "Reservasi Online", desc: "Sistem penjadwalan efisien tanpa antrean panjang, privasi terjamin di setiap langkah." },
  { icon: <Phone size={32} />, title: "Layanan 24 Jam", desc: "Customer service tanggap darurat yang siap menjawab pertanyaan Anda kapan saja." }
];

const faqs = [
  { q: "Apakah privasi pasien terjamin?", a: "Tentu. Privasi adalah prioritas utama kami. Seluruh data rekam medis dan kedatangan Anda dilindungi kerahasiaannya dengan sistem keamanan ketat layaknya standar VVIP." },
  { q: "Siapa yang akan menangani saya?", a: "Tindakan medis akan ditangani langsung oleh Dokter Spesialis Kandungan (Sp.OG) dibantu oleh tenaga medis tersertifikasi yang profesional dengan jam terbang tinggi." },
  { q: "Berapa lama prosesnya?", a: "Proses tindakan medis relatif cepat (10-15 menit), namun pasien diwajibkan untuk observasi pemulihan di ruang perawatan minimal 1-2 jam sebelum diperbolehkan pulang." },
  { q: "Bagaimana dengan observasi pasca tindakan?", a: "Kami menyediakan sesi kontrol serta konsultasi gratis via WhatsApp pasca tindakan untuk memastikan pemulihan rahim yang sehat dan aman tanpa komplikasi." },
  { q: "Apakah prosedurnya menyakitkan?", a: "Kami menggunakan obat anestesi dan analgesik berkualitas superior yang diatur oleh dokter anestesi, sehingga prosedur sangat minim rasa sakit." },
  { q: "Apakah klinik buka setiap hari?", a: "Ya, layanan klinik kami beroperasi setiap hari termasuk hari libur (kecuali pemberitahuan khusus). Kami sarankan reservasi terlebih dahulu agar jadwal dokter bisa disesuaikan." },
  { q: "Berapa biayanya?", a: "Biaya sangat bervariasi bergantung pada hasil pemeriksaan, usia kehamilan, dan kondisi medis fisik pasien. Anda dapat berkonsultasi via WhatsApp untuk estimasinya." }
];

const testimonials = [
  { name: "N*** A.", city: "Jakarta", r: 5, text: "Fasilitas sangat bersih, tim medisnya ramah, dan dokternya sangat menenangkan. Privasi juga amat sangat dijaga. Terima kasih banyak." },
  { name: "S*** M.", city: "Tangerang", r: 5, text: "Respons admin WhatsApp 24 jam dan solutif. Saya datang reservasi H-1, prosesnya cepat tanpa menunggu lama di ruang tunggu." },
  { name: "F***", city: "Bekasi", r: 5, text: "Prosesnya jauh lebih nyaman dari bayangan saya sebelumnya. Pemulihan juga cepat, sekarang saya kontrol via online dan dokter masih merespon dengan baik." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    try {
      const res = await fetch('/api/register', { method: 'POST', body: JSON.stringify({ test: true }) });
      if (res.ok) setHasSubmitted(true);
    } catch {
      alert("Terjadi kesalahan. Coba hubungi via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#1DA1DB] selection:text-white overflow-hidden">
      <Header />
      
      {/* HERO SECTION */}
      <section id="beranda" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F8FC] to-white z-0 pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1DA1DB]/10 rounded-full blur-[80px] z-0"></div>
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] bg-[#005BCF]/5 rounded-full blur-[60px] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#005BCF] text-sm font-semibold mb-6">
                <ShieldCheck size={16} /> Klinik Spesialis Legal & Terpercaya
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6">
                Klinik Aborsi <br/>
                <span className="text-[#005BCF]">Raden Saleh Jakarta</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Layanan konsultasi dan tindakan medis wanita dengan tenaga spesialis profesional, standar sterilitas rumah sakit modern, serta menjaga privasi pasien secara maksimal.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {['Privasi Terjaga', 'Tim Medis Profesional', 'Konsultasi 24 Jam', 'Reservasi Online'].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base">
                    <CheckCircle2 className="text-[#1DA1DB]" size={20} /> {badge}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/628111111111" className="bg-[#1DA1DB] hover:bg-[#005BCF] text-white px-8 py-4 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#1DA1DB]/30 hover:shadow-xl hover:shadow-[#005BCF]/40 transform hover:-translate-y-0.5">
                  <Phone size={20} /> Konsultasi WhatsApp Sekarang
                </a>
                <a href="#pendaftaran" className="bg-white border-2 border-gray-200 text-gray-700 hover:border-[#005BCF] hover:text-[#005BCF] px-8 py-4 rounded-xl font-semibold transition-colors text-center">
                  Reservasi Online
                </a>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative lg:ml-auto"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4] w-full max-w-lg mx-auto border-8 border-white">
                 <Image 
                   src="https://picsum.photos/seed/doctorcare/800/1000" 
                   alt="Dokter spesialis kandungan Klinik Raden Saleh" 
                   fill 
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 50vw"
                   priority
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#005BCF]/60 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 shadow-lg">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#005BCF]">
                     <Stethoscope size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">Ditangani Ahli</p>
                     <p className="text-gray-900 font-bold">10+ Tahun Pengalaman Spesialis</p>
                   </div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#1DA1DB] tracking-widest uppercase mb-2">Tentang Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dedikasi Untuk Kesehatan dan Privasi Wanita</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Klinik Raden Saleh adalah pusat layanan medis terpadu yang berfokus pada kesehatan reproduksi wanita. Kami berdedikasi tinggi memberikan tindak penanganan legal dengan standar operasional prosedur standar kualifikasi medis tertinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F8FC] rounded-2xl p-8 text-center border border-gray-100 transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ShieldCheck className="text-[#005BCF]" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Privasi Dijamin</h4>
              <p className="text-gray-600">Sistem keamanan database pasien enkripsi tinggi menjamin 100% kerahasiaan identitas dan rekam medis.</p>
            </div>
            <div className="bg-[#005BCF] rounded-2xl p-8 text-center shadow-xl shadow-blue-900/20 transform md:-translate-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Tim Dokter Spesialis</h4>
              <p className="text-blue-100">Didukung oleh keahlian dokter obstetri dan ginekologi (Sp.OG) berlisensi resmi Ikatan Dokter Indonesia.</p>
            </div>
            <div className="bg-[#F5F8FC] rounded-2xl p-8 text-center border border-gray-100 transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Activity className="text-[#005BCF]" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Fasilitas Steril</h4>
              <p className="text-gray-600">Pemantauan higienitas klinis yang ketat dan fasilitas ruangan berstandar operating theater VVIP.</p>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center gap-12 border-t border-gray-100 pt-10">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1DA1DB] mb-2">99%</p>
              <p className="text-gray-500 font-medium text-sm lg:text-base">Tingkat Keberhasilan</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#1DA1DB] mb-2">10+</p>
              <p className="text-gray-500 font-medium text-sm lg:text-base">Masa Pengalaman Medis</p>
            </div>
            <div className="text-center hidden sm:block">
              <p className="text-4xl font-bold text-[#1DA1DB] mb-2">24/7</p>
              <p className="text-gray-500 font-medium text-sm lg:text-base">Layanan Konsultasi Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="py-20 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#1DA1DB] tracking-widest uppercase mb-2">Layanan Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Solusi Medis Profesional & Terintegrasi</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 hover:shadow-xl hover:shadow-[#005BCF]/5 transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#1DA1DB] mb-6 group-hover:bg-[#005BCF] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSEDUR */}
      <section id="prosedur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-[#1DA1DB] tracking-widest uppercase mb-2">Prosedur Medis</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transparan, Terstruktur & Aman</h3>
              <p className="text-gray-600 text-lg mb-10">Kami memastikan bahwa setiap tahapan prosedur dilaksanakan dengan penuh kehati-hatian berdasarkan SOP yang ketat untuk kenyamanan esensial Anda.</p>
              
              <div className="space-y-8">
                {[
                  { step: 1, title: 'Konsultasi Awal & Reservasi', desc: 'Sampaikan riwayat dan keluhan via WhatsApp serta jadwalkan kunjungan Anda tanpa harus mengantre lama.' },
                  { step: 2, title: 'Pemeriksaan USG Fisik', desc: 'Pemeriksaan sonografi klinis oleh dokter untuk mengukur usia janin dan screening pra-tindakan.' },
                  { step: 3, title: 'Proses Tindakan Medis', desc: 'Pelaksanaan tindakan di ruang observasi VVIP dengan penganan sterilisasi tinggi dibantu asisten.' },
                  { step: 4, title: 'Observasi Pemulihan', desc: 'Pasien istirahat pasca-operasi di ruang recovery khusus yang nyaman sebelum diizinkan kembali beraktivitas.' },
                  { step: 5, title: 'Kontrol Pasca Tindakan', desc: 'Jadwal check-up ultrasonografi ulang 1-2 minggu pasca tindakan untuk memastikan semua bersih total.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#1DA1DB] text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                        {item.step}
                      </div>
                      {item.step !== 5 && <div className="w-0.5 h-[50px] bg-blue-100 my-2"></div>}
                    </div>
                    <div className="pb-4 pt-1.5">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid gap-6">
                 {/* KALKULATOR TERTANAM */}
                 <PregnancyCalculator />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BIAYA & PENDAFTARAN (SIDE BY SIDE) */}
      <section id="biaya" className="py-20 bg-gradient-to-b from-[#F5F8FC] to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Tabel Biaya */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-[#005BCF] mb-2">Estimasi Biaya Transparan</h3>
              <p className="text-gray-500 mb-8">Pilih solusi medis terpercaya dengan detail investasi penganan kesehatan tanpa biaya tersembunyi.</p>

              <div className="space-y-4">
                {[
                  { name: "Konsultasi Pra Medis", included: true },
                  { name: "Pemeriksaan USG Resolusi Tinggi", included: true },
                  { name: "Anestesi Ringan & Analgesik Premium", included: true },
                  { name: "Sewa Kamar Observasi Privat", included: true },
                  { name: "Obat Perawatan Pasca Tindakan", included: true },
                  { name: "Konsultasi Follow Up (1 Minggu pasca)", included: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className="text-gray-700 font-medium">{item.name}</span>
                    {item.included ? <CheckCircle2 className="text-[#1DA1DB]" size={20} /> : null}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <p className="font-semibold text-gray-800 text-center mb-4">Biaya keseluruhan disesuaikan dengan usia kendungan (trimester) dan kondisi medis Anda secara spesifik.</p>
                <a href="https://wa.me/628111111111?text=Halo%20Admin,%20saya%20ingin%20menanyakan%20estimasi%20biaya" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] flex justify-center items-center gap-2 shadow-lg">
                  <MessageCircle size={22} /> Hitung & Tanyakan Biaya di WhatsApp
                </a>
              </div>
            </div>

            {/* Form Pendaftaran */}
            <div id="pendaftaran" className="bg-[#005BCF] rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold mb-2 relative z-10">Formulir Reservasi Jadwal</h3>
              <p className="text-blue-100 mb-8 relative z-10">Amankan sesi konsultasi dokter Anda hari ini. Reservasi sekarang, antre dari mana saja.</p>
              
              {hasSubmitted ? (
                <div className="bg-white/10 rounded-xl p-8 text-center border border-white/20 backdrop-blur-sm relative z-10">
                  <CheckCircle2 size={64} className="text-[#1DA1DB] mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Registrasi Berhasil Terkirim!</h4>
                  <p className="text-blue-100 mb-6">Data telah diamankan. Tim resepsionis akan membalas ketersediaan jadwal kepada nomor WhatsApp Anda (15-30 menit).</p>
                  <button onClick={() => setHasSubmitted(false)} className="px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-[#005BCF] transition-colors">Daftar Reservasi Lain</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1">Nama / Inisial</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" size={18} />
                        <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#1DA1DB] placeholder:text-blue-300 text-white" placeholder="Boleh inisial" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1">Usia Kehamilan</label>
                      <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#1DA1DB] placeholder:text-blue-300 text-white" placeholder="Mng/Bln (opsional)" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-1">Nomor WhatsApp Aktif</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" size={18} />
                      <input required type="tel" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[#1DA1DB] placeholder:text-blue-300 text-white" placeholder="08xx-xxxx-xxxx" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1">Rencana Kedatangan</label>
                      <input required type="date" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1DA1DB] text-white [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1">Jam Kedatangan</label>
                      <input required type="time" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#1DA1DB] text-white [color-scheme:dark]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-1">Catatan Singkat</label>
                    <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#1DA1DB] placeholder:text-blue-300 text-white resize-none" placeholder="Masukkan keluhan atau kondisi saat ini..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-white hover:bg-gray-100 text-[#005BCF] font-bold py-4 rounded-xl mt-4 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Memproses Data...' : 'Kirim Registrasi Aman'}
                  </button>
                  <p className="text-xs text-center text-blue-200 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck size={14} /> Enkripsi data aktif. Formulir bersifat konfidensial 100%.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#1DA1DB] tracking-widest uppercase mb-2">Testimoni Pasien</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Apa Kata Mereka Tentang Kami?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <div key={i} className="bg-[#F5F8FC] p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 text-blue-200 opacity-50" size={40} />
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testi.r)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testi.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-5">
                  <div className="w-10 h-10 bg-[#005BCF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testi.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testi.name}</p>
                    <p className="text-xs text-gray-500">{testi.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F5F8FC]">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tanya Jawab (FAQ)</h2>
               <p className="text-gray-600">Pertanyaan umum seputar layanan klinik dan regulasi medis kami.</p>
            </div>

            <div className="space-y-4">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                     <button 
                       className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none transition-colors text-left"
                       onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                     >
                       <span className="font-bold text-gray-900 pr-8">{faq.q}</span>
                       <ChevronDown className={`text-[#1DA1DB] transform transition-transform shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                     </button>
                     {openFaq === idx && (
                       <div className="px-6 pb-5 pt-1 border-t border-gray-50/50">
                         <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                       </div>
                     )}
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
               <p className="font-medium text-gray-700 mb-4">Punya pertanyaan lain mengenai kesehatan kendungan Anda?</p>
               <a href="https://wa.me/628111111111" className="text-[#005BCF] font-bold hover:underline inline-flex items-center gap-2">Tanyakan pada Konsultan Medis Kami <ChevronDown className="-rotate-90" size={16}/></a>
            </div>
         </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
