import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-500 to-cyan-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">CodeFootprint</h1>
          <p className="text-xl opacity-90 mb-6">
            Understand your codebase like never before
          </p>
          <p className="text-lg opacity-80">
            Analyze code complexity, dependencies, and performance metrics with
            powerful insights built for developers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-slate-600 text-sm">Codebases Analyzed</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-slate-600 text-sm">Developer Teams</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <p className="text-slate-600 text-sm">Issues Found</p>
          </div>
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why CodeFootprint?
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Get Started Fast
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Upload your project and get instant insights in seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📈</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Track Progress
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Monitor improvements over time with detailed metrics and
                    reports.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔧</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Actionable Insights
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Get recommendations to improve code quality and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-700 mb-6">Ready to analyze your code?</p>
          <button className="bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-12 rounded-lg hover:shadow-md transition">
            Start Analyzing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
