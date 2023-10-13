"use client"
import React, { useState } from 'react';
import BlogSection from './BlogSection';
import ProjectSection from './ProjectSection';

const WorkDetails = () => {
  const [activeTab, setActiveTab] = useState('projects'); // Initialize the active tab as 'projects'

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab when a tab is clicked
  };

  return (
    <main>
      <div className="flex w-full text-2xl sm:text-4xl text-center transition-all duration-300 cursor-pointer">
        <div
          className={`w-1/2 border-white h-16 sm:h-20 pt-4 rounded-full transition-all duration-300 ${activeTab === 'projects' ? 'active-tab bg-white' : ''
            }`}
          onClick={() => handleTabClick('projects')}
        >
          Projects
        </div>
        <div
          className={`w-1/2 h-16 sm:h-20 pt-4 rounded-full transition-all duration-300 ${activeTab === 'blogs' ? 'active-tab bg-white' : ''
            }`}
          onClick={() => handleTabClick('blogs')}
        >
          Blogs
        </div>
      </div>
      <div>
        <div>
          {activeTab === 'projects' && <div>
            <ProjectSection />
          </div>}
          {activeTab === 'blogs' && <div>
            <BlogSection />
          </div>}
        </div>
      </div>
    </main>
  );
};

export default WorkDetails;
