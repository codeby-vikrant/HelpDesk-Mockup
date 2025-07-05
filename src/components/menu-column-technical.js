import { MdAnalytics, MdDashboard } from "react-icons/md";
import { FaTicketSimple } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/menu-column.css";

const MenuColumnTechnical = () => {
  return (
    <aside className="menu-column">
      <div className="menu-option">
        <MdDashboard className="menu-icon" />
        <Link to="/dashboard" className="menu-option-link">
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="menu-option">
        <FaTicketSimple className="menu-icon" />
        <span>My Ticket</span>
      </div>
      <div className="menu-option">
        <MdAnalytics className="menu-icon" />
        <span>Performance</span>
      </div>
    </aside>
  );
};

export default MenuColumnTechnical;
