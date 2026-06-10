import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative flex flex-col items-center"
        >
          <div className="relative inline-block mb-3">
            <img 
              src="https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-1/720588527_122105712711351971_4098404925484543584_n.webp?stp=c349.0.840.840a_dst-png&cstp=mx840x840&ctp=s200x200&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFOp29MFF9BE0CLQQP9H_YZF6a5cbUUtOkXprlxtRS06bniizUiLvp5JhlIKdq2r6u6SB_apRGC76Au0BHvdTuz&_nc_ohc=fZIsRximASgQ7kNvwFF1QLJ&_nc_oc=AdquT7KUjXS_LI_XH4Bs_LYoAVY8kTlLxmNYljaQGsNqmhZifxwgl2kbN3IVGUUGRkQ&_nc_zt=24&_nc_ht=scontent.fdac96-1.fna&_nc_gid=8lFLRzjzStYSjJC570Cjig&_nc_ss=7b2a8&oh=00_Af_LCR16p2Bv9tdS6SgjnwCKmA4OcsLus0rJHWbrbjkDBQ&oe=6A2EFBE0" 
              alt="Pear" 
              className="w-24 h-24 rounded-full border-4 border-slate-900 object-cover shadow-xl"
            />
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-slate-900 rounded-full"></div>
          </div>
          <h2 className="text-xl font-display font-semibold text-white tracking-tight">Pear Ray</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          Accepting new clients
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white max-w-4xl leading-[1.1]"
        >
          Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Revenue</span> With Data-Driven Marketing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl font-light"
        >
          Hi, I'm <strong className="text-white font-medium">Nirob</strong>. A Growth-Focused Digital Marketer helping small businesses attract more customers, build a stronger online presence, and multiply ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors"
          >
            Start Growing Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            Explore Services
          </a>
        </motion.div>
        
        {/* Metric Ribbons */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-slate-800/50 w-full"
        >
          {[
            { label: "Ad Spend Managed", value: "$500k+" },
            { label: "Average ROAS", value: "3.5x+" },
            { label: "Client Satisfaction", value: "100%" },
            { label: "Projects Delivered", value: "50+" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span className="text-3xl lg:text-4xl font-display font-bold text-white">{stat.value}</span>
              <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
