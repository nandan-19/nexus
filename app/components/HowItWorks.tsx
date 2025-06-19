"use client"
import React from 'react';

const steps = [
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/terminal.svg" alt="Install" className="w-10 h-10 text-blue-600" />,
    title: 'Install Nexus AI CLI',
    desc: 'Get started by installing the Nexus AI CLI in your terminal.'
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/edit-3.svg" alt="Connect" className="w-10 h-10 text-blue-600" />,
    title: 'Connect to Your Editor',
    desc: 'Integrate seamlessly with VSCode, Neovim, or your favorite editor.'
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cpu.svg" alt="Choose LLM" className="w-10 h-10 text-blue-600" />,
    title: 'Choose Your LLM',
    desc: 'Select from open-source or commercial LLMs for your needs.'
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/zap.svg" alt="Start Coding" className="w-10 h-10 text-blue-600" />,
    title: 'Start Coding with AI',
    desc: 'Enjoy context-aware, AI-powered assistance as you code!'
  }
];

const HowItWorks = () => (
  <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-10 text-blue-900 drop-shadow">How It Works</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {steps.map((step, i) => (
        <div key={step.title} className="flex flex-col items-center bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-64 border border-blue-100">
          <div className="mb-4">{step.icon}</div>
          <h3 className="font-semibold mb-2 text-lg text-blue-900">Step {i + 1}: {step.title}</h3>
          <p className="text-blue-800 text-center text-base">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks; 