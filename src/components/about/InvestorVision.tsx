
'use client';

import { aboutContent } from '@/content/aboutContent';

const InvestorVision = () => {
    return (
        <section className="bg-ink text-paper py-24 border-t border-white/10">
            <div className="section-shell">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Header */}
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl font-display mb-6 text-gold">{aboutContent.investors.title}</h2>
                        <p className="text-mist/80 text-lg leading-relaxed mb-8">
                            {aboutContent.investors.intro}
                        </p>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-xl font-display mb-4 text-white">Commitment to Investors</h4>
                            <ul className="space-y-2">
                                {aboutContent.investors.commitment.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-mist">
                                        <span className="text-gold">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="mb-12">
                            <h3 className="text-2xl font-display mb-4">Strategic Vision</h3>
                            <p className="text-lg text-mist leading-relaxed italic border-l-4 border-gold pl-6">
                                {aboutContent.investors.vision}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {aboutContent.investors.pillars.map((pillar, idx) => (
                                <div key={idx} className="bg-stone/5 p-6 rounded-xl hover:bg-stone/10 transition-colors">
                                    <h4 className="text-xl font-display mb-3 text-gold">{pillar.title}</h4>
                                    <p className="text-mist/80 text-sm leading-relaxed">{pillar.description}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-2xl font-display mb-4">Investment Proposition</h3>
                            <p className="text-mist leading-relaxed mb-6">{aboutContent.investors.proposition}</p>
                            <p className="text-lg font-medium text-white">{aboutContent.investors.closing}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorVision;
