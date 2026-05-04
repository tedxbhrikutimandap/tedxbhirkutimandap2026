export const BackgroundEffects = () => {
  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none select-none bg-black"
      style={{
        background:
          "radial-gradient(circle at 10% 0%, rgba(235, 0, 40, 0.14), transparent 34rem), radial-gradient(circle at 90% 100%, rgba(235, 0, 40, 0.12), transparent 32rem), #000",
      }}
    >
      <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_50%_45%,rgba(235,0,40,0.05),transparent_40rem)]" />
    </div>
  );
};
