import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function NeochildEngagement() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 overflow-hidden px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <motion.h2 
          variants={itemVariants}
          className="font-onest font-semibold text-[20px] md:text-[24px] uppercase tracking-[0.1em] text-[#030213] mb-10 md:mb-14"
        >
          BUILT FOR CLARITY AND ENGAGEMENT
        </motion.h2>

        <div className="flex flex-col gap-8 md:gap-10">
          <motion.p 
            variants={itemVariants}
            className="font-onest text-[16px] md:text-[18px] leading-[1.7] text-[#030213]/80"
          >
            The design of the Neo Childcare website directly translates the wireframe priorities into a live interface 
            that successfully manages cognitive load, enhances visual appeal, and guides user interaction. 
            A clear visual and informational hierarchy is established immediately: the bold hero statement 
            defines the mission, followed by a clean, grid-based presentation of products. Each service 
            is encapsulated in a distinct, consistently styled card with an icon, brief explanatory text, 
            and a prominent “Learn more” call-to-action (CTA). This modular approach allows users to scan 
            and digest complex healthcare offerings in manageable pieces, significantly reducing cognitive overload. 
            Strategic visual spacing, restrained color palettes, and ample breathing room around these elements 
            further contribute to a calm, trustworthy, and visually appealing aesthetic that resonates 
            with the sensitive nature of maternal and child health.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="font-onest text-[16px] md:text-[18px] leading-[1.7] text-[#030213]/80"
          >
            Interaction and credibility are woven seamlessly into the layout to foster trust and encourage conversion. 
            Testimonials and social proof, such as the “Hear from moms like you” section and the repeated impact 
            metrics (e.g., “1000+ Caregivers Engaged”), are positioned as natural breaks in the informational flow. 
            They provide tangible evidence of value without disrupting the user’s journey. Key CTAs like 
            “Book a consultation” and “Join the community” are visually emphasized and placed at logical 
            decision points, ensuring no conversion opportunity is missed. Furthermore, the inclusion of 
            trusted partner logos and a blog section with relevant articles (“Child Sexual Abuse – flagging the Signs”) 
            positions Neo not just as a service provider, but as a credible authority and supportive community hub, 
            building trust through association and valuable content.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
