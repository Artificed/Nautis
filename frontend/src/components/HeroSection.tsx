import { PERSONAL_DATA } from "../lib/constants/personal-data";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-200 to-blue-300 opacity-60 animate-float"></div>

        <div className="absolute top-16 left-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-200 to-pink-200 opacity-50 animate-float-slow animation-delay-1000"></div>
        
        <div className="absolute bottom-32 left-16 w-28 h-28 rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 opacity-55 animate-float-slower animation-delay-2000"></div>
        
        <div className="absolute bottom-24 right-24 w-36 h-36 rounded-3xl bg-gradient-to-br from-teal-300 to-cyan-400 opacity-50 animate-float animation-delay-3000"></div>
        
        <div className="absolute top-1/2 right-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-200 to-pink-200 opacity-45 animate-float-slow animation-delay-4000"></div>
        
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-200 to-indigo-300 opacity-40 animate-float-slower"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi. I'm {PERSONAL_DATA.name.split(' ')[0]}.
              <br />
              <span className="text-gray-700">A Developer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              I'm also a passionate programmer and AI enthusiast, bringing innovative solutions to life with a keen eye for creating engaging experiences.
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              
              <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                <img
                  src={PERSONAL_DATA.profileImage}
                  alt={PERSONAL_DATA.name}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
