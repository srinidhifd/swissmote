export function GridBackgroundDemo() {
  return (
    <div className="relative h-[100vh] w-full bg-black flex flex-col items-center justify-center">
      {/* Subtle Grid Background with Gold Lines */}
      <div className="absolute inset-0 bg-grid-gold/[0.1] pointer-events-none"></div>

      {/* Centralized Text */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-6xl font-extrabold text-[#D4AF37] mb-4">
          Welcome to Swissmote
        </h1>
        <p className="text-xl text-[#B3B3B3] mb-6">
          Connect with top-tier talent for your projects or find your next big opportunity.
        </p>
        <p className="text-lg text-[#E0E0E0] mb-8 max-w-lg mx-auto">
          A streamlined platform that brings job seekers and recruiters together in one efficient ecosystem.
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-8 w-full max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Search jobs, companies, or skills..." 
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <button className="absolute right-0 top-0 bottom-0 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-md hover:bg-[#C5A029] transition">
            Search
          </button>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4 mt-4 justify-center">
          <button className="px-8 py-3 bg-[#0D0D0D] text-[#D4AF37] font-semibold rounded-md shadow-md hover:bg-[#1A1A1A] transition">
            Find a Job
          </button>
          <button className="px-8 py-3 bg-[#800020] text-white font-semibold rounded-md shadow-md hover:bg-[#940026] transition">
            Post a Job
          </button>
        </div>
      </div>

      {/* Illustrative Icons for Features */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-8 text-[#D4AF37] opacity-80">
        <div className="flex flex-col items-center">
          <img src="/assets/job-posting.png" alt="Job Posting" className="h-12 w-12 mb-2" />
          <p className="text-sm">Job Postings</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/candidate-search.png" alt="Candidate Search" className="h-12 w-12 mb-2" />
          <p className="text-sm">Candidate Search</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/match.png" alt="Smart Matching" className="h-12 w-12 mb-2" />
          <p className="text-sm">Smart Matching</p>
        </div>
      </div>
    </div>
  );
}