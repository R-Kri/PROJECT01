import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Plus, Edit, Trash2, X, Search } from "lucide-react"
import ConfirmationModal from "./ConfirmationModal"

const FlightManagement = ({ initialFlights }) => {
  const [flights, setFlights] = useState(initialFlights)
  const [newFlight, setNewFlight] = useState({ flightNumber: "", origin: "", destination: "", departureTime: "" })
  const [editingFlight, setEditingFlight] = useState(null)
  const [errors, setErrors] = useState({})
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [flightToDelete, setFlightToDelete] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFlights, setFilteredFlights] = useState(flights)

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase()
    const filtered = flights.filter(
      (flight) =>
        flight.flightNumber.toLowerCase().includes(lowercasedFilter) ||
        flight.origin.toLowerCase().includes(lowercasedFilter) ||
        flight.destination.toLowerCase().includes(lowercasedFilter),
    )
    setFilteredFlights(filtered)
  }, [searchTerm, flights])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (editingFlight) {
      setEditingFlight({ ...editingFlight, [name]: value })
    } else {
      setNewFlight({ ...newFlight, [name]: value })
    }
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = (flight) => {
    const newErrors = {}
    if (!flight.flightNumber.trim()) newErrors.flightNumber = "Flight number is required"
    if (!flight.origin.trim()) newErrors.origin = "Origin is required"
    if (!flight.destination.trim()) newErrors.destination = "Destination is required"
    if (!flight.departureTime) newErrors.departureTime = "Departure time is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const flightToValidate = editingFlight || newFlight
    if (validateForm(flightToValidate)) {
      if (editingFlight) {
        setFlights(flights.map((f) => (f.id === editingFlight.id ? editingFlight : f)))
        setEditingFlight(null)
      } else {
        setFlights([...flights, { ...newFlight, id: Date.now() }])
        setNewFlight({ flightNumber: "", origin: "", destination: "", departureTime: "" })
      }
    }
  }

  const handleEdit = (flight) => {
    setEditingFlight(flight)
  }

  const handleDelete = (flight) => {
    setFlightToDelete(flight)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    setFlights(flights.filter((flight) => flight.id !== flightToDelete.id))
    setIsDeleteModalOpen(false)
    setFlightToDelete(null)
  }

  const cancelEdit = () => {
    setEditingFlight(null)
    setErrors({})
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Flights</h2>
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search flights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <p>Total Flights: {flights.length}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="flightNumber"
              value={editingFlight ? editingFlight.flightNumber : newFlight.flightNumber}
              onChange={handleInputChange}
              placeholder="Flight Number"
              className={`w-full p-2 border rounded ${errors.flightNumber ? "border-red-500" : ""}`}
            />
            {errors.flightNumber && <p className="text-red-500 text-sm mt-1">{errors.flightNumber}</p>}
          </div>
          <div>
            <input
              type="text"
              name="origin"
              value={editingFlight ? editingFlight.origin : newFlight.origin}
              onChange={handleInputChange}
              placeholder="Origin"
              className={`w-full p-2 border rounded ${errors.origin ? "border-red-500" : ""}`}
            />
            {errors.origin && <p className="text-red-500 text-sm mt-1">{errors.origin}</p>}
          </div>
          <div>
            <input
              type="text"
              name="destination"
              value={editingFlight ? editingFlight.destination : newFlight.destination}
              onChange={handleInputChange}
              placeholder="Destination"
              className={`w-full p-2 border rounded ${errors.destination ? "border-red-500" : ""}`}
            />
            {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
          </div>
          <div>
            <input
              type="datetime-local"
              name="departureTime"
              value={editingFlight ? editingFlight.departureTime : newFlight.departureTime}
              onChange={handleInputChange}
              min={new Date().toISOString().slice(0, 16)}
              className={`w-full p-2 border rounded ${errors.departureTime ? "border-red-500" : ""}`}
            />
            {errors.departureTime && <p className="text-red-500 text-sm mt-1">{errors.departureTime}</p>}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {editingFlight && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 text-gray-800 p-2 rounded flex items-center"
            >
              <X size={18} className="mr-2" /> Cancel
            </button>
          )}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded flex items-center">
            {editingFlight ? (
              <>
                <Edit size={18} className="mr-2" /> Update Flight
              </>
            ) : (
              <>
                <Plus size={18} className="mr-2" /> Add Flight
              </>
            )}
          </button>
        </div>
      </form>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Flight Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Departure Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredFlights.map((flight) => (
              <tr key={flight.id}>
                <td className="px-6 py-4 whitespace-nowrap">{flight.flightNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{flight.origin}</td>
                <td className="px-6 py-4 whitespace-nowrap">{flight.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(flight.departureTime).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(flight)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDelete(flight)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete flight ${flightToDelete?.flightNumber}?`}
      />
    </div>
  )
}

FlightManagement.propTypes = {
  initialFlights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flightNumber: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      departureTime: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default FlightManagement

