import { Section, SectionHeading } from './ui/Section';
import { motion } from 'motion/react';
import { Target, Megaphone, Video, PenTool } from 'lucide-react';

const services = [
  {
    title: "Facebook & Instagram Ads",
    description: "Highly targeted campaigns designed to convert. From cold traffic to retargeting, I cover the entire funnel.",
    icon: Target,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  },
  {
    title: "Google Ads",
    description: "Capture high-intent search traffic. I optimize for the right keywords to bring ready-to-buy customers to your site.",
    icon: Megaphone,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20"
  },
  {
    title: "Ads Creative & Video",
    description: "Scroll-stopping visuals and promotional videos that tell your brand story and compel viewers to take action.",
    icon: Video,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    title: "Content Marketing",
    description: "Strategic content that builds authority, nurtures your audience, and organically grows your online presence.",
    icon: PenTool,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  }
];

export default function Services() {
  return (
    <Section id="services" className="bg-slate-950">
      <SectionHeading 
        subtitle="My Expertise" 
        title="Everything you need to scale your business online." 
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-colors group`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${service.bgColor} ${service.borderColor}`}>
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </div>
            <h3 className="text-2xl font-display font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
