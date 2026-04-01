import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
    autoSave: true,
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Settings</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Theme</h3>
                <p className="text-sm text-slate-600 mt-1">Light theme</p>
              </div>
              <select className="px-4 py-2 border border-blue-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>

            <hr className="border-slate-200" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Notifications
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Get analysis alerts and updates
                </p>
              </div>
              <button
                onClick={() => handleToggle("notifications")}
                className={`w-12 h-6 rounded-full transition ${
                  settings.notifications ? "bg-blue-500" : "bg-slate-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    settings.notifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <hr className="border-slate-200" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Auto Save
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Automatically save your progress
                </p>
              </div>
              <button
                onClick={() => handleToggle("autoSave")}
                className={`w-12 h-6 rounded-full transition ${
                  settings.autoSave ? "bg-blue-500" : "bg-slate-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    settings.autoSave ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
