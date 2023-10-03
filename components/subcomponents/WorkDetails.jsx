"use client"
import React, { useState } from 'react';
import BlogSection from './BlogSection';

const WorkDetails = () => {
  const [activeTab, setActiveTab] = useState('projects'); // Initialize the active tab as 'projects'

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab when a tab is clicked
  };

  return (
    <main>
      <div className="flex w-full text-4xl text-center border-b border-white">
        <div
          className={`w-1/2 border-white h-20 pt-4 ${
            activeTab === 'projects' ? 'active-tab' : ''
          }`}
          onClick={() => handleTabClick('projects')}
        >
          Projects
        </div>
        <div
          className={`w-1/2 h-20 pt-4 ${
            activeTab === 'blogs' ? 'active-tab' : ''
          }`}
          onClick={() => handleTabClick('blogs')}
        >
          Blogs
        </div>
      </div>
      <div>
        <div>
          {activeTab === 'projects' && <div>Here is the projects</div>}
          {activeTab === 'blogs' && <div>
            <BlogSection/>
            </div>}
        </div>
      </div>
    </main>
  );
};

export default WorkDetails;
