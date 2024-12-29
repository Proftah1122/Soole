export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-16 w-16">
        <img 
          src="https://res.cloudinary.com/df7a0vgug/image/upload/v1734990679/IMG-20241223-WA0018_e3gcbh_e_background_removal_f_png_zpq8su.png"
          alt="Sọ́ọ̀lẹ̀ Logo"
          className="w-full h-full object-contain"
        />
        <div className="absolute -inset-1 blur-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 animate-pulse -z-10"></div>
      </div>
      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Sọ́ọ̀lẹ̀
      </span>
    </div>
  );
};