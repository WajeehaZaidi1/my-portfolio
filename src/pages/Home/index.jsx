import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import Profile2 from "../../components/Profile2";
import Workflow from "../../components/Workflow";
import Portfolio from "../../components/Portfolio";
import ProjectIdea from "../../components/Projectidea";
import Blogs from "../../components/Blogs";
import Skills from "../../components/Skills";
import ProjectDiscussion from "../../components/ProjectDiscussion";
import Footer from "../../components/Footer";
import ResumeModal from "../../components/ResumeModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Navbar openModal={openModal} />
      <section id="about">
        <Profile />
      </section>
      <Profile2 openModal={openModal} />
      <Workflow />
      <section id="projects">
        <Portfolio />
      </section>
      <ProjectIdea />
      <Blogs />
      <Skills />
      <section id="contact">
        <ProjectDiscussion />
      </section>
      <Footer />

      {/* Resume Modal */}
      {isModalOpen && (
        <ResumeModal
          isOpen={isModalOpen}
          onClose={closeModal}
          resumeUrl="public/Resume.pdf" // Replace with the actual resume URL
        />
      )}
    </>
  );
};

export default Home;
