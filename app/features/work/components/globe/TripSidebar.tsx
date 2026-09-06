import { Trip } from './data';

export const TripSidebar = ({ trip, onClose }: { trip: Trip; onClose: () => void }) => (
  <div className="absolute top-20 left-4 z-20 w-80 max-h-[calc(100%-6rem)] flex flex-col bg-custom-dark-alt/95 backdrop-blur-md p-5 rounded-xl border border-border text-custom-light shadow-2xl overflow-y-auto custom-scrollbar pointer-events-auto">
    <div className="flex justify-between items-start mb-4 sticky top-0 bg-custom-dark-alt/95 py-1 z-10">
      <div>
        <h3 className="font-semibold text-lg leading-tight">{trip.name}</h3>
        <p className="text-sm text-custom-light/60 mt-1">{trip.season}</p>
      </div>
      <button
        onClick={onClose}
        className="text-xs bg-custom-dark hover:bg-border px-3 py-1.5 rounded-md border border-border transition-colors cursor-pointer shrink-0 ml-2"
      >
        Close
      </button>
    </div>

    <div className="flex flex-col gap-3 relative">
      {trip.destinations.map((dest, i) => (
        <div key={dest.id} className="flex gap-3 relative z-0">
          <div className="flex flex-col items-center mt-1 w-4 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-custom-light z-10"></div>
            {i !== trip.destinations.length - 1 && (
              <div className="w-[2px] h-full bg-border flex-1 -mt-1 -mb-1"></div>
            )}
          </div>
          <div className="pb-4">
            <p className="font-medium text-sm">{dest.name}</p>
            <p className="text-xs text-custom-light/60 mb-2">{dest.timeSpent}</p>
            <div className="flex gap-1.5 flex-wrap">
              {dest.activities.map((act) => (
                <span
                  key={act}
                  className="text-[10px] bg-custom-dark border border-border px-1.5 py-0.5 rounded text-custom-light/90"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
