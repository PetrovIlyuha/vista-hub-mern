import Logo76x from "../../assets/VistaHub_76x.png";

export const BusinessLogo = () => {
  return (
    <div className="flex items-center font-bold text-gray-600">
      <img src={Logo76x} alt="app logo branding" className="w-16 mt-2 -mr-3" />
      <div className="hidden flex-col text-lg text-center lg:block">
        <h3>VistaHub</h3>
        <div className="flex items-center text-xs">
          <span className="h-[2px]  bg-gray-500 w-5 rounded-md mx-2"></span>
          <p>Window to Your Success</p>
          <span className="h-[2px] bg-gray-500 w-5 rounded-md mx-2"></span>
        </div>
      </div>
    </div>
  );
};
