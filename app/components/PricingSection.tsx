"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    features: ['Basic LLM access', 'Editor integration'],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Pro',
    price: { monthly: 19, yearly: 190 },
    features: ['All Free features', 'Multi-LLM support', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true
  }
];

const PricingSection = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Pricing</h2>
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        <button
          onClick={() => setBilling('monthly')}
          className={`px-4 py-2 rounded-l-lg font-semibold border border-blue-200 ${billing === 'monthly' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling('yearly')}
          className={`px-4 py-2 rounded-r-lg font-semibold border border-blue-200 ${billing === 'yearly' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}
        >
          Yearly <span className="ml-1 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded">Save 20%</span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center w-full max-w-4xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7, type: 'spring' }}
            className={`relative p-8 rounded-2xl shadow w-full md:w-72 flex flex-col items-center border-2 ${plan.highlight ? 'border-blue-600 bg-blue-50 z-10' : 'border-blue-100 bg-blue-100/60'} ${plan.highlight ? 'scale-105' : ''}`}
          >
            {plan.highlight && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow"
              >
                Most Popular
              </motion.div>
            )}
            <h3 className="font-semibold mb-2 text-lg text-blue-900">{plan.name}</h3>
            <div className="mb-4 text-3xl font-bold text-blue-700">
              ${plan.price[billing]}
              <span className="text-base font-normal text-blue-500">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
            </div>
            <ul className="mb-4 text-sm text-blue-800 space-y-1">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className={`px-4 py-2 rounded-xl font-semibold ${plan.highlight ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-blue-700 hover:bg-blue-200'} transition w-full mt-2 focus:outline-none focus:ring-4 focus:ring-blue-300`}>{plan.cta}</button>
          </motion.div>
        ))}
      </div>
      {/* Feature Comparison Table */}
      <div className="mt-12 w-full max-w-2xl bg-blue-50 rounded-xl shadow p-6 overflow-x-auto">
        <h4 className="font-bold text-blue-900 mb-4">Feature Comparison</h4>
        <table className="w-full text-sm text-blue-800">
          <thead>
            <tr>
              <th className="text-left py-2">Feature</th>
              {plans.map((plan) => (
                <th key={plan.name} className="text-center py-2">{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Basic LLM access</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="py-2">Editor integration</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="py-2">Multi-LLM support</td>
              <td className="text-center">—</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="py-2">Priority support</td>
              <td className="text-center">—</td>
              <td className="text-center">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingSection; 