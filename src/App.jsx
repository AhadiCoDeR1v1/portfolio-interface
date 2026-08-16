import { portfolioData } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import SkillsMatrix from "./components/SkillsMatrix";
import Certifications from "./components/Certifications";
import PeerReviewBanner from "./components/PeerReviewBanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/components.css";

export default function App() {
  const { profile, education, certifications, caseStudies, skillsMatrix, peerReview } = portfolioData;

  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <Navbar profile={profile} />

      {/* Main Single Page Portfolio Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero profile={profile} />

        {/* 2. Featured Engineering Case Studies (5 Projects) */}
        <CaseStudies caseStudies={caseStudies} />

        {/* 3. Technical Profile & Skills Matrix */}
        <SkillsMatrix matrix={skillsMatrix} />

        {/* 4. Education & Verified Certifications Track */}
        <Certifications education={education} certifications={certifications} />

        {/* 5. Peer Engineering Audit Banner */}
        <PeerReviewBanner peerReview={peerReview} />

        {/* 6. Contact & Direct Transmission Section */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />
    </div>
  );
}