import { Plane, Hotel, Package, Users, TrendingUp } from "lucide-react"
import PropTypes from "prop-types"

const DashboardCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-blue-500 bg-opacity-75">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div className="ml-4">
          <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
          <p className="text-lg font-semibold text-gray-700">{value}</p>
        </div>
      </div>
      {trend && (
        <div className={`flex items-center ${trend.type === "increase" ? "text-green-500" : "text-red-500"}`}>
          <TrendingUp size={18} className="mr-1" />
          <span>{trend.value}%</span>
        </div>
      )}
    </div>
  </div>
)

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  trend: PropTypes.shape({
    type: PropTypes.oneOf(["increase", "decrease"]),
    value: PropTypes.number,
  }),
}

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Flights" value="150" icon={Plane} trend={{ type: "increase", value: 5 }} />
        <DashboardCard title="Total Hotels" value="75" icon={Hotel} trend={{ type: "increase", value: 3 }} />
        <DashboardCard title="Tour Packages" value="30" icon={Package} trend={{ type: "decrease", value: 2 }} />
        <DashboardCard title="Users" value="1,234" icon={Users} trend={{ type: "increase", value: 10 }} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-4">New flight added: FL004 from London to New York</li>
            <li className="py-4">Hotel Sunset Resort updated its pricing</li>
            <li className="py-4">New tour package created: Asian Explorer</li>
            <li className="py-4">User John Doe made a new booking</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

