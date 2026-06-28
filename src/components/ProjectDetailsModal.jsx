import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../useLanguage';

const ProjectDetailsModal = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, []);

    if (!project) return null;

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 400); // Wait for exit animation
    };

    return (
        <div className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Sliding Drawer */}
            <div
                className={`relative w-full md:w-[600px] bg-white h-full shadow-2xl flex flex-col transition-transform duration-500 will-change-transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex-shrink-0 p-6 flex justify-between items-center border-b border-slate-100">
                    <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase">{t('modal.title')}</h2>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
                    <h3 className="text-3xl font-serif text-slate-900 mb-6">{project.location}</h3>

                    <div className="prose prose-slate mb-10">
                        <p className="text-slate-600 leading-relaxed">{project.detailsText}</p>
                    </div>

                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">{t('modal.highlights')}</h4>

                    {/* Animated 4 Pics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-1000">
                        {project.carouselImages?.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-square rounded-xl overflow-hidden shadow-lg animate-slide-in-right opacity-0 bg-slate-100"
                                style={{
                                    animationDelay: `${idx * 150 + 300}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Detail ${idx + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                                    <span className="text-white text-sm font-medium opacity-90">{t('modal.detailView')} {idx + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50">
                    <button
                        onClick={handleClose}
                        className="w-full bg-slate-900 hover:bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
                    >
                        {t('modal.close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
