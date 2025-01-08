import React from 'react';

function LocationSearchPanel({ setPanelOpen, setVechilePanelOpen }) {
    const locations = [
        "24B, Near Kapoor's cafe, Sherians Coding School, Bhopal",
        "24B, Near Basak's cafe, Sherians Coding School, Bhopal",
        "22B, Near Malhotra's cafe, Sherians Coding School, Bhopal",
        "24B, Near Saha's cafe, Sherians Coding School, Bhopal",
        "24B, Near Singhania's cafe, Sherians Coding School, Bhopal",
    ];

    return (
        <div className="p-1">
            {/* Render the list of locations */}
            {locations.map((location, index) => (
                <div
                    key={index}
                    onClick={() => { setVechilePanelOpen(true); setPanelOpen(false) }}
                    className="flex items-center border-2 p-3 border-gray-200 hover:border-black rounded-xl justify-start gap-4 my-2 transition-all duration-300"
                >
                    <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                        <i className="ri-map-pin-fill text-black"></i>
                    </h2>
                    <h4 className="font-medium leading-tight text-gray-800">
                        {location}
                    </h4>
                </div>
            ))}
        </div>
    );
}

export default LocationSearchPanel;
