import React from 'react';

const OfferCard = ({img}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-600 text-white">
        <div>
        <img src={img} alt="" />
        </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Valid till: Mon, Sep 30, 2024</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          View
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
