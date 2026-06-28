import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../useLanguage';

const BeforeAfterSlider = ({ beforeImage, afterImage, location, description, onViewDetails }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const { t } = useLanguage();

    const handleMove = useCallback((clientX) => {
        if (!containerRef.current || !isDragging) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    }, [isDragging]);

    const handleMouseMove = useCallback((e) => handleMove(e.clientX), [handleMove]);
    const handleTouchMove = useCallback((e) => handleMove(e.touches[0].clientX), [handleMove]);
    const handleStopDragging = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleStopDragging);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleStopDragging);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleStopDragging);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleStopDragging);
        };
    }, [isDragging, handleMouseMove, handleTouchMove, handleStopDragging]);

    return (
        <div className="flex flex-col gap-6 mb-20">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between px-4 sm:px-0">
                <div>
                    <h3 className="text-3xl font-serif text-white mb-2">{location}</h3>
                    <p className="text-slate-400 max-w-2xl">{description}</p>
                </div>
                <button
                    onClick={onViewDetails}
                    className="text-brand-blue hover:text-white transition-colors flex items-center gap-1 group whitespace-nowrap"
                >
                    {t('portfolio.viewDetails')}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div
                ref={containerRef}
                className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-800"
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
            >
                {/* After Image (Background) */}
                {afterImage ? (
                    <img src={afterImage} alt="After Renovation" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                ) : (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">After Image Placeholder</div>
                )}

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white shadow-xl">
                    {t('portfolio.after')}
                </div>

                {/* Before Image (Foreground, clipped if different) */}
                {beforeImage !== afterImage && (
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                    >
                        {beforeImage ? (
                            <img src={beforeImage} alt="Before Renovation" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                        ) : (
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-700 text-slate-400">Before Image Placeholder</div>
                        )}

                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white shadow-xl">
                            {t('portfolio.before')}
                        </div>
                    </div>
                )}

                {/* Slider Handle (Only show if images are different) */}
                {beforeImage !== afterImage && (
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                            <div className="flex gap-1">
                                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-400"></div>
                                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-400"></div>
                                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-400"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
