import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Attract qualified leads and customers effortlessly.",
  "Maximize your Return on Ad Spend (ROAS).",
  "Build a recognizable, trusted online brand.",
  "Free up your time to focus on operations.",
  "Data-driven decisions, no guesswork.",
  "Engaging creatives that actually convert."
];

export default function ValueProp() {
  return (
    <Section id="about" className="bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image Placeholder or abstract visual */}
          <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-950 relative z-10 border border-slate-700 p-8 flex flex-col justify-end group">
             <img 
               src="https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-6/720805330_122105714775351971_3144348807023295102_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1143&ctp=s960x960&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFuQOcig_2uhiPCIylUsJzLzHj3DqxewCbMePcOrF7AJpW6EfIX12KxswIPAkntPh0l_iYr_l1cCScFVlOwmhW6&_nc_ohc=E4Ukc4gIrk4Q7kNvwHwPAkw&_nc_oc=AdqTZp6oBAOcRNtorMrOBlxdY2Aw0e9xs6nIwqXiErDZrlW1K3l_1KvrOaavoW1cjsI&_nc_zt=23&_nc_ht=scontent.fdac96-1.fna&_nc_gid=8lFLRzjzStYSjJC570Cjig&_nc_ss=7b2a8&oh=00_Af_p9ASvK2ah-oN_94xudnQMwAYh37cXaMtAzbarw4Dm3A&oe=6A2F2D64" 
               alt="Nirob Profile" 
               className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
             <div className="relative z-20 bg-slate-950/80 backdrop-blur border border-slate-800 p-6 rounded-2xl">
               <p className="text-lg font-medium text-white mb-2">"More than just a marketer."</p>
               <p className="text-sm text-slate-400">I partner with you as an extension of your team, treating your ad budget like my own.</p>
             </div>
          </div>
          
          {/* Decorative element behind */}
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-600/30 blur-3xl rounded-full z-0" />
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Why small businesses choose me.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-10"
          >
            Small businesses often waste thousands on ads that don't convert. I bring a holistic, growth-focused approach that ties every compelling video and every ad campaign directly to your bottom line.
          </motion.p>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.05) }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
