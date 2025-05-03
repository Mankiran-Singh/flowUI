import { Home, Bell, ShoppingBag, MessageCircle, Wallet, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6">LOGO</h1>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-lg font-medium">
            <Home size={20} /> <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 text-lg font-medium text-gray-500">
            <Bell size={20} /> <span>Notifications</span>
          </li>
          <li className="flex items-center space-x-3 text-lg font-medium text-gray-500">
            <ShoppingBag size={20} /> <span>Shop</span>
          </li>
          <li className="flex items-center space-x-3 text-lg font-medium text-gray-500">
            <MessageCircle size={20} /> <span>Conversation</span>
          </li>
          <li className="flex items-center space-x-3 text-lg font-medium text-gray-500">
            <Wallet size={20} /> <span>Wallet</span>
          </li>
          <li className="flex items-center space-x-3 text-lg font-medium text-gray-500">
            <User size={20} /> <span>My Profile</span>
          </li>
          <li className="flex items-center space-x-3 text-lg font-medium text-gray-500">
            <Settings size={20} /> <span>Settings</span>
          </li>
        </ul>
      </div>
      <Button variant="ghost" className="flex items-center space-x-3">
        <LogOut size={20} /> <span>Log out</span>
      </Button>
    </div>
  );
};

export default Sidebar;
