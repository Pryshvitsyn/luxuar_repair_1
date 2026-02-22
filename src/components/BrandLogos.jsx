import React from 'react';

// Placeholder data – replace with real logo URLs and names
const logos = [
    { name: 'EMI', src: '/images/logos/emi-logo.svg' },
    { name: 'Company A', src: '/images/logos/company-a.svg' },
    { name: 'Company B', src: '/images/logos/company-b.svg' },
    { name: 'Company C', src: '/images/logos/company-c.svg' },
    { name: 'Luxury Brand 1', src: '/images/logos/luxury1.svg' },
    { name: 'Luxury Brand 2', src: '/images/logos/luxury2.svg' },
    { name: 'Luxury Brand 3', src: '/images/logos/luxury3.svg' },
    { name: 'Luxury Brand 4', src: '/images/logos/luxury4.svg' },
    { name: 'Luxury Brand 5', src: '/images/logos/luxury5.svg' },
    { name: 'Luxury Brand 6', src: '/images/logos/luxury6.svg' },
    { name: 'Luxury Brand 7', src: '/images/logos/luxury7.svg' },
    { name: 'Luxury Brand 8', src: '/images/logos/luxury8.svg' },
    { name: 'Luxury Brand 9', src: '/images/logos/luxury9.svg' },
];

export default function BrandLogos() {
    return (
        <section className="py-12 bg-slate-50" id="partners">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif text-center text-slate-900 mb-8">Our Luxury Partners</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="brand-logo w-24 h-auto object-contain"
                            />
                            <span className="mt-2 text-sm text-slate-600">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
