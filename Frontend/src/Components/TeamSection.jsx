 import { motion } from 'framer-motion';

import team1 from '../assets/team_1.png';
import team2 from '../assets/team_2.png';
import team3 from '../assets/team_3.png';

const teams = [
  {
    id: 1,
    textAlign: 'left',
    title: 'Build the right team to scale',
    desc: `Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term—not the case with freelancers. Our delivery model helps you cut costs and deliver within budget.`,
    image: team1,
    quote: '“Someone so quick to identify larger problem with the software as we decided to expand our scope to build new modules.”',
     
  },
  {
    id: 2,
    textAlign: 'right',
    title: 'Scale your development efficiently',
    desc: `Our proven model accelerates software delivery while maintaining high quality. Whether it's building a new platform or scaling your current stack, our flexible teams adapt to your goals and timelines.`,
    image: team2,
    quote: '“A reliable partner who aligns with our mission and delivers on time. Saved us months of hiring!”',
 
  },
  {
    id: 3,
    textAlign: 'left',
    title: 'Scale your development efficiently',
    desc: `Our proven model accelerates software delivery while maintaining high quality. Whether it's building a new platform or scaling your current stack, our flexible teams adapt to your goals and timelines.`,
    image: team3,
    quote: '“A reliable partner who aligns with our mission and delivers on time. Saved us months of hiring!”',
    
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -80 : 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
});

const TeamSection = () => {
  return (
    <section id='how-it-works' className="py-24 px-6 bg-white">
      <motion.h2
        className="text-center text-4xl font-bold mb-16 leading-tight"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-gray-700">Way of building</span>{' '}
        <span className="text-purple-700">Great Software</span>
      </motion.h2>

      <div className="space-y-24 max-w-7xl mx-auto">
        {teams.map((team, i) => (
          <motion.div
            key={team.id}
            className={`flex flex-col lg:flex-row ${
              team.textAlign === 'right' ? 'lg:flex-row-reverse' : ''
            } items-center gap-10 relative`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Image with top/bottom half-circle */}
            <motion.div
              className="relative w-full lg:w-[45%]"
              variants={slideIn(team.textAlign === 'left' ? 'left' : 'right')}
            >
              <img
                src={team.image}
                alt="team"
                className="rounded-xl shadow-lg w-full h-[320px] object-cover"
              />

              {/* Top Half Circle */}
              <div
                className={`absolute w-10 h-10 bg-purple-500 rounded-full ${
                  team.textAlign === 'left'
                    ? 'top-[-20px] left-[-20px]'
                    : 'top-[-20px] right-[-20px]'
                }`}
              ></div>

              {/* Bottom Half Circle */}
              <div
                className={`absolute w-10 h-10 bg-pink-500 rounded-full ${
                  team.textAlign === 'left'
                    ? 'bottom-[-20px] right-[-20px]'
                    : 'bottom-[-20px] left-[-20px]'
                }`}
              ></div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-[55%] text-left"
              variants={slideIn(team.textAlign === 'left' ? 'right' : 'left')}
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {team.title}
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{team.desc}</p>
              <blockquote className="italic text-purple-700 text-md font-medium mb-4 border-l-4 border-purple-300 pl-4">
                {team.quote}
              </blockquote>
           
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
