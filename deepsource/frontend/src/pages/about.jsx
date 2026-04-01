import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">About CodeFootprint</h1>
          <p className="text-lg opacity-90">
            Understanding your codebase, one layer at a time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* What is CodeFootprint */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">What We Do</h2>
          <p className="text-slate-700 leading-relaxed">
            CodeFootprint is a tool built to help developers understand what's
            going on inside their code. We analyze your projects and provide
            insights about structure, dependencies, and performance.
          </p>
        </section>

        {/* Features */}
        <section>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔍</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Code Analysis
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Deep dive into your codebase structure and spot issues
                    early.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Metrics & Insights
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Get clear metrics about your code quality and complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Performance
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Analyze and optimize your application's performance
                    footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
