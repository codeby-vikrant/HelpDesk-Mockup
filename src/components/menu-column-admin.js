import { MdDashboard, MdOutlineSettings } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/menu-column.css";
import { IoDocumentTextOutline } from "react-icons/io5";

const MenuColumnAdmin = () => {
  return (
    <aside className="menu-column">
      <div className="menu-option">
        <MdDashboard className="menu-icon" />
        <Link to="/dashboard" className="menu-option-link">
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="menu-option">
        <FaTicket className="menu-icon" />
        <Link to="/new-ticket" className="menu-option-link">
          <span>Database</span>
        </Link>
      </div>
      <div className="menu-option">
        <MdOutlineSettings className="menu-icon" />
        <span>Setting</span>
      </div>
      <div className="menu-option">
        <IoDocumentTextOutline className="menu-icon" />
        <span>User Log History</span>
      </div>
    </aside>
  );
};

export default MenuColumnAdmin;
