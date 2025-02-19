import React, { useState } from "react";
import AccountSettings from "./AccountSettings"; 
import Notificationsetting from "./Notificationsetting"

const Setting = () => {
  const [activeTab, setActiveTab] = useState("account"); // State for active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-gray-50 p-4 rounded-lg gap-6">
      {/* Left Navigation */}
      <div className="w-64 bg-white p-6 border-r border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
        <ul className="space-y-3">
          {[
            { id: "account", label: "Account" },
            { id: "notification", label: "Notification" },
            { id: "communication", label: "Privacy and Safety" },
            { id: "messaging", label: "Communications" },
            { id: "close", label: "Close Account" },
          ].map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer p-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* View Profile Button */}
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          View Profile
        </button>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p className="mb-2">About | Settings | Support | Docs</p>
          <p className="mb-2">Help | Privacy & Terms</p>
          <p>©2025</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto bg-white">
        {activeTab === "account" && <AccountSettings />}
        {activeTab === "notification" && <Notificationsetting />}
        {activeTab === "communication" && (
          <div className="text-gray-700">Privacy and safety settings content here</div>
        )}
        {activeTab === "messaging" && (
          <div className="text-gray-700">Communications settings content here</div>
        )}
        {activeTab === "close" && (
          <div className="text-gray-700">Close account content here</div>
        )}
      </div>
    </div>
  );
};

export default Setting;