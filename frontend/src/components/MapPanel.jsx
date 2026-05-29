import indiaMap from "../assets/india-map.png";

export default function MapPanel() {
  return (
    <div className="glass rounded-lg p-5">
      <h2 className="text-2xl font-black mb-4">
        Route Map
      </h2>

      <div className="relative">
        <img
          src={indiaMap}
          alt="India Map"
          className="w-full rounded-lg"
        />

        {/* Goa */}
        <div className="absolute left-[32%] top-[70%]">
          <div className="bg-aqua px-2 py-1 rounded-full text-xs font-bold">
            Goa
          </div>
        </div>

        {/* Udaipur */}
        <div className="absolute left-[35%] top-[40%]">
          <div className="bg-aqua px-2 py-1 rounded-full text-xs font-bold">
            Udaipur
          </div>
        </div>

      </div>
    </div>
  );
}