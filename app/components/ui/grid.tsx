const BlueprintGrid = () => {
  return (
    <div
      className="absolute inset-0 opacity-[0.2] pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }}
    />
  );
};

export default BlueprintGrid;
