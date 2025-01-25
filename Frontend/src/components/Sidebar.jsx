import React from "react";
import { Home, User, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", icon: <Home />, link: "/" },
    { name: "Profile", icon: <User />, link: "/profile" },
    { name: "Settings", icon: <Settings />, link: "/settings" },
    { name: "Logout", icon: <LogOut />, link: "/logout" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        My Sidebar
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="group">
              <a
                href={item.link}
                className="flex items-center space-x-4 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-all rounded-lg"
              >
                <span>{item.icon}</span>
                <span className="text-lg">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="p-4 text-sm border-t border-gray-700">
        © 2025 My Company
      </footer>
    </div>
  );
};

export default Sidebar;
