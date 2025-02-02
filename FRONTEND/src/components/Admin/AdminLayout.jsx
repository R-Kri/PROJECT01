import { useState } from "react"
import PropTypes from "prop-types"
import { Link, Outlet } from "react-router-dom"
import { Home, Plane, Hotel, Package, Menu } from "lucide-react"

const NavLink = ({ to, icon: Icon, label }) => (
  <Link to={to} className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
    {Icon && <Icon size={18} />}
    <span className="ml-2">{label}</span>
  </Link>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
}

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <button className="md:hidden fixed top-4 left-4 z-20 bg-white p-2 rounded-md shadow-md" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <aside
        className={`w-64 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 h-full z-10`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <NavLink to="/admin" icon={Home} label="Dashboard" />
          <NavLink to="/admin/flights" icon={Plane} label="Manage Flights" />
          <NavLink to="/admin/hotels" icon={Hotel} label="Manage Hotels" />
          <NavLink to="/admin/packages" icon={Package} label="Manage Tour Packages" />
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <Outlet />
        {children}
      </main>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node,
}

export default AdminLayout

