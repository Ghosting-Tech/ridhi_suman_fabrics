import OverlayContent from "../OverlayContent";

const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center space-y-8">
      <div>
        <h2 className="text-4xl xl:text-5xl font-bold text-white mb-2 xl:mb-4">
          Already have an account?
        </h2>

        <p className="lg:text-base xl:text-lg text-white">
          Sign in with your Phone number & password
        </p>
      </div>

      <button
        className="py-2 xl:py-3 px-6 bg-transparent rounded-full text-center text-white font-bold uppercase ring-2 ring-white hover:scale-105 hover:bg-white/50 hover:shadow active:scale-95 ease-in hover:text-gray-800 transition-all"
        onClick={(e) => {
          setIsAnimated(!isAnimated);
        }}
      >
        Sign In
      </button>

      <OverlayContent
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
        heading={"Already have an account?"}
        paragraph={"Sign in with your Phone number & password"}
        buttonLabel={"Sign In"}
      />
    </div>
  );
};

export default LeftOverlayContent;
