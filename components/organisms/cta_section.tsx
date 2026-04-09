export function CTASection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-screen-xl mx-auto editorial-gradient rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary rounded-full blur-[120px] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Elevate Your Career?
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-10">
            Join thousands of professionals who have transformed their lives
            through InginKerja premium global placement program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform">
              Get Started Today
            </button>
            {/* <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors">
              Consult an Expert
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
