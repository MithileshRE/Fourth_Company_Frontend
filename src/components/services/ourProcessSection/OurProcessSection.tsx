import Section from "../../common/Section/Section";
import TabularStructure from "../../common/tabularStructure/TabularStructure";
import './OurProcessSection.css';

const OurProcessSection = () => {
    const steps = [
        {
          title: "1. Initial Consultation",
          description: [
            "Discuss career goals, skills, and preferences.",
            "Provide a clear overview of services and fees.",
          ],
        },
        {
          title: "2. Profile Enhancement",
          description: [
            "Optimize your resume and LinkedIn profile to highlight strengths.",
            "Conduct mock interviews with personalized feedback.",
          ],
        },
        {
          title: "3. Job Matching & Applications",
          description: [
            "Identify job opportunities aligned with your skills and goals.",
            "Offer tailored cover letter and application support.",
          ],
        },
        {
          title: "4. Interview Coordination",
          description: [
            "Schedule interviews that fit your availability.",
            "Provide ongoing guidance through the process.",
          ],
        },
        {
          title: "5. Offer Negotiation",
          description: [
            "Assist with evaluating offers and negotiating terms.",
          ],
        },
        {
          title: "6. Post-Placement Support",
          description: [
            "Help with transitioning into your new role.",
            "Follow up to ensure satisfaction and resolve concerns.",
          ],
        },
        {
          title: "7. Visa Assistance",
          description: [
            "Guide international candidates through visa options and documentation.",
          ],
        },
      ];

    return (
        <Section
            backgroundColor="#EAEAEA"
            designRight=""
            className="our-process-section"
        >
            <div className="container our-process-container">
                <h1>Our Process</h1>
                <p className="our-process-description">
                At HashTech Info, we are dedicated to bridging the gap between ambitious talent and their dream careers. Our tailored approach helps clients navigate the complexities of today’s job market, turning challenges into opportunities. Our multi-step process guides you from application to acceptance, making your career journey smoother and more successful.
                </p>
                <TabularStructure steps={steps} />
            </div>
        </Section>

    );
};

export default OurProcessSection;