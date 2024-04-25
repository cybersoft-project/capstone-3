import React from 'react'
import OfferCard from '../../components/OfferCard/OfferCard';

const Offer = () => {
    return (
        <div className="container mx-auto px-4 py-8" id="offer" style={{"scrollMarginTop": "30vh"}}>
            <h2 className="text-2xl font-bold text-center mb-8">Offers For You</h2>

            <div className="grid grid-cols-2 gap-4">
                <OfferCard />
                {/* <div className="card bg-white shadow-md rounded-md">
                    <div className="card-header flex items-center justify-between p-4">
                        <h3 className="text-lg font-medium">PVR Super Saver Offer</h3>
                        <span className="text-gray-500">See all+</span>
                    </div>
                    <div className="card-body p-4">
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <span className="inline-block w-10 h-10 rounded-full bg-teal-500"></span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">FLAT 100 OFF</p>
                                    <p className="text-xs text-gray-500">On first movie ticket</p>
                                </div>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="inline-block w-10 h-10 rounded-full bg-indigo-500"></span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">BUY 1 GET 1 FREE</p>
                                    <p className="text-xs text-gray-500">On popcorn & beverages</p>
                                </div>
                            </li>
                        </ul>
                        <div className="flex items-center justify-end">
                            <button className="btn btn-primary">Use Code PVRSUPERSAVER</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-white shadow-md rounded-md">
                    <div className="card-header flex items-center justify-between p-4">
                        <h3 className="text-lg font-medium">BookMyShow Offer</h3>
                        <span className="text-gray-500">See all+</span>
                    </div>
                    <div className="card-body p-4">
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <span className="inline-block w-10 h-10 rounded-full bg-pink-500"></span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">FLAT 50 OFF</p>
                                    <p className="text-xs text-gray-500">On movie tickets</p>
                                </div>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="inline-block w-10 h-10 rounded-full bg-yellow-500"></span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">GET 10% CASHBACK</p>
                                    <p className="text-xs text-gray-500">On payments using Paytm</p>
                                </div>
                            </li>
                        </ul>
                        <div className="flex items-center justify-end">
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Offer