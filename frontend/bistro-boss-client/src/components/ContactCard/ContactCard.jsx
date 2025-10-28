import React from 'react'

export default function ContactCard() {
  return (
    <div className="max-w-xs mx-auto bg-yellow-400 rounded-2xl shadow-lg p-8 flex flex-col items-center mb-6">
      <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-2xl text-blue-600 mb-4">
        📞
      </div>
      <h3 className="text-lg font-semibold mb-2">Call Us</h3>
      <p className="text-base font-medium text-gray-800 tracking-wide">
        +88 0192345678910
      </p>
    </div>
  );
}

