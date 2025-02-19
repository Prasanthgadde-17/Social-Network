// NotificationSetting.jsx
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Import icons

const NotificationSetting = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>

      <div className="bg-white rounded-lg  p-4">
        <p className="text-gray-700 mb-4">
          Tried law yet style child. The bore of true of no be deal. Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed.
        </p>

        <div className="space-y-4">
          <NotificationItem label="Likes and Comments" description="Joy say painful removed reached end." />
          <NotificationItem label="Reply to My Comments" description="Ask a quick six seven offer see among." />
          <NotificationItem label="Subscriptions" description="Preference any astonished unreserved Mrs." />
          <NotificationItem label="Birthdays" description="Contented he gentleman agreeable do be" />
          <NotificationItem label="Events" description="Fulfilled direction use continually." />

          {/* Expandable Section (Email Notifications) */}
          <EmailNotificationsSection />

          <NotificationItem label="Push notifications" description="Rendered six say his striking confined." />
          <NotificationItem label="Weekly account summary (Pro only)" description="Rendered six say his striking confined." proOnly />
        </div>
      </div>
    </div>
  );
};

const NotificationItem = ({ label, description, proOnly }) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <label className="text-gray-700 font-medium">{label}</label>
        <p className="text-gray-500 text-sm">{description} {proOnly && <span className="text-xs text-blue-500 ml-1">(Pro)</span>}</p>
      </div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

const EmailNotificationsSection = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State for expand/collapse

  return (
    <details className={`border border-gray-300 rounded-md p-3 ${isOpen ? 'open' : ''}`}> {/* Added class conditionally */}
      <summary className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}> {/* Toggle on click */}
        <span className="text-gray-700 font-medium">Email notifications</span>
        {isOpen ? <IoIosArrowUp className="h-5 w-5 text-gray-500 transition-transform duration-300" /> : <IoIosArrowDown className="h-5 w-5 text-gray-500 transition-transform duration-300" />} {/* Conditional icon */}
      </summary>
      <div className={`mt-3 ${isOpen ? 'block' : 'hidden'}`}> {/* Show/hide content */}
        <p className="text-gray-700">As hastened oh produced prospect.</p>
      </div>
    </details>
  );
};


export default NotificationSetting;