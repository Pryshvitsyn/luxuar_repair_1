import { useState, useEffect } from 'react'
import { CheckCircle2, ChevronRight, Menu, X, ArrowRight, Star, ExternalLink, ShieldCheck } from 'lucide-react'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import ProjectDetailsModal from './components/ProjectDetailsModal'
import { useLanguage } from './LanguageContext'

// Placeholder image paths - we will replace these once the generation API is available
const amalfiBefore = '/images/placeholders/amalfi-before.jpg'
const amalfiAfter = '/images/placeholders/amalfi-after.jpg'

// Main App Layout
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const { t, language, setLanguage } = useLanguage()

  const placeholderImages = [
    "https://placehold.co/800x800/1e293b/ffffff?text=Detail+View+1",
    "https://placehold.co/800x800/1e293b/ffffff?text=Detail+View+2",
    "https://placehold.co/800x800/1e293b/ffffff?text=Detail+View+3",
    "https://placehold.co/800x800/1e293b/ffffff?text=Detail+View+4",
  ]

  const heroImages = [
    "/images/hero/amalfi.png",
    "/images/hero/spello.png",
    "/images/hero/como.png",
    "/images/hero/argentario.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const amalfiDetails = [
    "/images/details/amalfi_detail_1.png",
    "/images/details/amalfi_detail_2.png",
    "/images/details/amalfi_detail_3.png",
    "/images/details/amalfi_detail_4.png",
  ]

  const spelloDetails = [
    "/images/details/spello_detail_1.png",
    "/images/details/spello_detail_2.png",
    "/images/details/spello_detail_3.png",
    "/images/details/spello_detail_4.png",
  ]

  const argentarioDetails = [
    "/images/details/Argentario_kitchen.jpg",
    "/images/details/Argentario_master_bedroom.jpg",
    "/images/details/Argentario_master_bathroom.jpg",
    "/images/details/Argentario_livingroom.jpg",
  ]

  const romeDetails = [
    "/images/details/rome_detail_1.png",
    "/images/details/rome_detail_2.png",
    // We only generated 2 out of 4 for Rome before quote hit, so we mix placeholders
    "https://placehold.co/800x800/1e293b/ffffff?text=Tuscan+Terracotta+Loggia",
    "https://placehold.co/800x800/1e293b/ffffff?text=Chef+Grade+Modern+Kitchen",
  ]

  const comoDetails = [
    "/images/details/como_detail_1.png",
    "/images/details/como_detail_2.png",
    "/images/details/como_detail_3.png",
    "/images/details/como_detail_4.png",
  ]


  const tp = t('portfolio.projects');

  const portfolioItems = [
    {
      id: 1,
      location: tp[0].location,
      description: tp[0].description,
      detailsText: tp[0].detailsText,
      carouselImages: amalfiDetails,
      beforeImage: "/images/portfolio/amalfi_before_aligned.png", // Existing
      afterImage: "/images/portfolio/amalfi_after.png",
    },
    {
      id: 2,
      location: tp[1].location,
      description: tp[1].description,
      detailsText: tp[1].detailsText,
      carouselImages: spelloDetails,
      beforeImage: "/images/portfolio/spello_before_aligned.png", // Existing
      afterImage: "/images/portfolio/spello_after_1771781231456.png",
    },
    {
      id: 3,
      location: tp[2].location,
      description: tp[2].description,
      detailsText: tp[2].detailsText,
      carouselImages: argentarioDetails,
      beforeImage: "/images/portfolio/Argentario_before.png",
      afterImage: "/images/portfolio/Argentario_after.jpg",
    },
    {
      id: 4,
      location: tp[3].location,
      description: tp[3].description,
      detailsText: tp[3].detailsText,
      carouselImages: romeDetails,
      beforeImage: "/images/portfolio/rome_before.png",
      afterImage: "/images/portfolio/rome_after.png",
    },
    {
      id: 5,
      location: tp[4].location,
      description: tp[4].description,
      detailsText: tp[4].detailsText,
      carouselImages: comoDetails, // Will update when quota resets
      beforeImage: "/images/portfolio/como_before.png",
      afterImage: "/images/portfolio/como_after.png",
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
                Elio<span className="text-brand-blue">Genesis</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#services" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.services')}</a>
              <a href="#portfolio" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.portfolio')}</a>
              <a href="#testimonials" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.testimonials')}</a>
              <a href="#credentials" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors">{t('nav.credentials')}</a>
            </div>

            {/* CTA Button & Language Switcher */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-2 text-sm font-medium">
                <button onClick={() => setLanguage('en')} className={`transition-colors text-xs font-bold ${language === 'en' ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}`}>EN</button>
                <div className="text-slate-300">|</div>
                <button onClick={() => setLanguage('it')} className={`transition-colors text-xs font-bold ${language === 'it' ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}`}>IT</button>
                <div className="text-slate-300">|</div>
                <button onClick={() => setLanguage('ru')} className={`transition-colors text-xs font-bold ${language === 'ru' ? 'text-brand-blue' : 'text-slate-400 hover:text-slate-600'}`}>RU</button>
              </div>
              <a 
              href="https://wa.me/393519363404?text=Hello%20I%20would%20like%20a%20consultation" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-slate-900 hover:bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/40 flex items-center gap-2 group"
>
  {t('nav.consultation')}
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>

            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image Carousel with Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          {heroImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Luxury Italian Architecture"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:w-2/3">
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight mb-8">
              {t('hero.title1')} <br />
              <span className="text-brand-blue italic">{t('hero.title2')}</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="bg-brand-blue hover:bg-brand-blue/80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center gap-2 group shadow-xl">
                {t('hero.viewPortfolio')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex justify-center items-center">
                {t('hero.ourServices')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nest Seekers International Partnership */}
      <section className="bg-slate-900 border-y border-slate-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">{t('exclusive.partnership')}</span>
          <div className="flex items-center gap-4">
            <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-white font-light">
              Nest Seekers <span className="font-bold">International</span>
            </span>
          </div>
          <a href="https://www.facebook.com/kathleen.canape" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:text-brand-blue transition-colors">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center text-slate-300 font-bold group-hover:border-brand-blue transition-colors">
              KC
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-200 group-hover:text-brand-blue transition-colors">Kathleen Canape</p>
              <p className="text-xs text-slate-400">{t('exclusive.advisor')}</p>
            </div>
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('services.tag')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{t('services.title')}</h3>
            <p className="text-lg text-slate-600">{t('services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t('services.items').map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CheckCircle2 className="w-10 h-10 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white clip-path-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('portfolio.tag')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{t('portfolio.title1')} <br /><span className="italic font-light text-slate-300">{t('portfolio.title2')}</span></h3>
            </div>
            <p className="text-slate-400 max-w-md md:text-right">{t('portfolio.subtitle')}</p>
          </div>

          <div className="mt-12 space-y-12">
            {portfolioItems.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                location={item.location}
                description={item.description}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                onViewDetails={() => setSelectedProject(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('testimonials.tag')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{t('testimonials.title')}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t('testimonials.items').map((testimonial, idx) => {
              const image = [
                "/images/people/client_giulia.png",
                "/images/people/client_marco.png",
                "/images/people/client_eleanor.png"
              ][idx];
              return (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-beige fill-brand-beige" />)}
                    </div>
                    <p className="text-slate-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                    {image ? (
                      <img src={image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl uppercase">{testimonial.name.charAt(0)}</div>
                    )}
                    <div>
                      <h5 className="font-bold text-slate-900 flex items-center gap-2">
                        {testimonial.name}
                        <a href="#" className="text-brand-blue hover:text-brand-blue/80"><ExternalLink className="w-4 h-4" /></a>
                      </h5>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('partners.tag')}</h2>
            <h3 className="text-3xl md:text-3xl font-serif text-slate-900">{t('partners.title')}</h3>
          </div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden group">
          {[false, true].map((isDuplicate) => (
            <div key={isDuplicate ? 'dup' : 'orig'} className={`${isDuplicate ? 'absolute top-0 animate-marquee2' : 'animate-marquee'} whitespace-nowrap flex items-center gap-12 py-4`}>
              {/* EMI - Special Featured Partner */}
              <a href="https://edilemi.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center hover:opacity-100 transition-opacity mx-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-end">
                    {/* EMI Logo Graphic - Exact Match */}
                    <div style={{ transform: 'translateY(4px)' }}>
                      <svg width="85" height="55" viewBox="0 0 85 55" fill="none" className="shrink-0 overflow-visible">
                        {/* 3D Yellow Wedges with gaps */}
                        <path d="M37 11 L47 18 L47 55 L37 55 Z" fill="#FFF200" />
                        <path d="M49 14.5 L59 21.5 L59 55 L49 55 Z" fill="#FFF200" />
                        <path d="M61 18 L71 25 L71 55 L61 55 Z" fill="#FFF200" />

                        {/* Orange House Front */}
                        <path d="M0 25 L35 7 L35 55 L0 55 Z" fill="#D37D4B" />
                        {/* White Window */}
                        <rect x="8" y="32" width="10" height="10" fill="white" />
                        {/* White Door */}
                        <rect x="23" y="35" width="8" height="20" fill="white" />
                      </svg>
                    </div>
                    {/* EMI Text */}
                    <span className="text-[56px] font-black tracking-tighter ml-2" style={{ color: '#000000', lineHeight: 0.8, fontFamily: '"Arial Black", Impact, sans-serif' }}>EMI</span>
                  </div>
                  {/* Subtitle */}
                  <span className="text-[13px] font-bold tracking-[0.08em] uppercase mt-2 w-full text-center" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>Costruzioni Edili</span>
                </div>
              </a>

              {/* Branded Partners with authentic colors */}
              {[
                { name: "Knauf", color: "#003B7E" },
                { name: "Mapei", color: "#004F9F" },
                { name: "Kerakoll", color: "#8DC63F" },
                { name: "Fassa Bortolo", color: "#E30613" },
                { name: "Weber", color: "#00A651" },
                { name: "Vimar", color: "#003366" },
                { name: "BTicino", color: "#007DC3" },
                { name: "Daikin", color: "#009FE3" },
                { name: "Mitsubishi", color: "#E60012" },
                { name: "Velux", color: "#C8102E" },
                { name: "Scrigno", color: "#1D1D1B" },
                { name: "Gyproc", color: "#0072CE" },
                { name: "Italcementi", color: "#1E3A5F" },
                { name: "Buzzi Unicem", color: "#004B87" },
                { name: "Marazzi", color: "#1A1A1A" },
                { name: "Florim", color: "#2C2C2C" },
                { name: "Jacuzzi", color: "#C09553" },
                { name: "Villeroy & Boch", color: "#003D6A" },
                { name: "Grohe", color: "#005CA9" },
                { name: "Geberit", color: "#004990" },
                { name: "Hansgrohe", color: "#00694E" },
                { name: "Fantini", color: "#1A1A1A" },
                { name: "Gessi", color: "#8B7355" },
                { name: "Dornbracht", color: "#2B2B2B" },
                { name: "Salvatori", color: "#A0927C" },
                { name: "Antolini", color: "#B8860B" },
                { name: "Margraf", color: "#6B4C3B" },
                { name: "Boffi", color: "#1C1C1C" },
                { name: "Porcelanosa", color: "#1E1E1E" },
              ].map((brand, idx) => (
                <span
                  key={isDuplicate ? `dup-${idx}` : idx}
                  className="text-2xl font-bold font-sans uppercase tracking-widest mx-8 transition-all duration-300 cursor-default opacity-60 hover:opacity-100"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">{t('credentials.tag')}</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{t('credentials.title')}</h3>
            <p className="text-lg text-slate-600">{t('credentials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Document Image side */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue/10 transform -rotate-3 rounded-2xl"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100 h-[400px] flex flex-col justify-center items-center text-center">
                <ShieldCheck className="w-16 h-16 text-brand-blue mb-4" />
                <h4 className="text-xl font-bold font-serif mb-2">{t('credentials.docTitle')}</h4>
                <p className="text-slate-500 max-w-xs mb-6">{t('credentials.docDesc')}</p>
                <button className="text-brand-blue font-medium hover:underline flex items-center gap-1">{t('credentials.viewDoc')} <ExternalLink className="w-4 h-4" /></button>
                {/* Will overlay generated document image here later if needed */}
              </div>
            </div>

            {/* Professionals side */}
            <div className="space-y-8">
              {[
                { title: t('credentials.prof1Title'), doc: "Arch. Lorenzo Ricci", reg: "Ordine Architetti Roma N. 14592", image: "/images/people/arch_ricci.png" },
                { title: t('credentials.prof2Title'), doc: "Geom. Matteo Conti", reg: "Collegio Geometri Firenze N. 8234", image: null }
              ].map((prof, idx) => (
                <div key={idx} className="flex gap-6 items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                    {prof.image ? (
                      <img src={prof.image} alt={prof.doc} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">{prof.doc.charAt(0)}</div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-1">{prof.title}</p>
                    <h5 className="text-xl font-bold text-slate-900 mb-1">{prof.doc}</h5>
                    <p className="text-sm text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded inline-block">{prof.reg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <span className="text-2xl font-serif font-bold tracking-tight text-white block mb-4">
            Elio<span className="text-brand-blue">Genesis</span>
          </span>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
