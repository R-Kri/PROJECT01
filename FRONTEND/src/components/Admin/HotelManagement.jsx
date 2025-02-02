import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Plus, Edit, Trash2, X, Search } from "lucide-react"
import ConfirmationModal from "./ConfirmationModal"

const HotelManagement = ({ initialHotels }) => {
  const [hotels, setHotels] = useState(initialHotels)
  const [newHotel, setNewHotel] = useState({ name: "", location: "", pricePerNight: "" })
  const [editingHotel, setEditingHotel] = useState(null)
  const [errors, setErrors] = useState({})
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [hotelToDelete, setHotelToDelete] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredHotels, setFilteredHotels] = useState(hotels)

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase()
    const filtered = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(lowercasedFilter) || hotel.location.toLowerCase().includes(lowercasedFilter),
    )
    setFilteredHotels(filtered)
  }, [searchTerm, hotels])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (editingHotel) {
      setEditingHotel({ ...editingHotel, [name]: value })
    } else {
      setNewHotel({ ...newHotel, [name]: value })
    }
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = (hotel) => {
    const newErrors = {}
    if (!hotel.name.trim()) newErrors.name = "Hotel name is required"
    if (!hotel.location.trim()) newErrors.location = "Location is required"
    if (!hotel.pricePerNight || hotel.pricePerNight <= 0) newErrors.pricePerNight = "Valid price is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const hotelToValidate = editingHotel || newHotel
    if (validateForm(hotelToValidate)) {
      if (editingHotel) {
        setHotels(hotels.map((h) => (h.id === editingHotel.id ? editingHotel : h)))
        setEditingHotel(null)
      } else {
        setHotels([...hotels, { ...newHotel, id: Date.now() }])
        setNewHotel({ name: "", location: "", pricePerNight: "" })
      }
    }
  }

  const handleEdit = (hotel) => {
    setEditingHotel(hotel)
  }

  const handleDelete = (hotel) => {
    setHotelToDelete(hotel)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    setHotels(hotels.filter((hotel) => hotel.id !== hotelToDelete.id))
    setIsDeleteModalOpen(false)
    setHotelToDelete(null)
  }

  const cancelEdit = () => {
    setEditingHotel(null)
    setErrors({})
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Hotels</h2>
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <p>Total Hotels: {hotels.length}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={editingHotel ? editingHotel.name : newHotel.name}
              onChange={handleInputChange}
              placeholder="Hotel Name"
              className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="location"
              value={editingHotel ? editingHotel.location : newHotel.location}
              onChange={handleInputChange}
              placeholder="Location"
              className={`w-full p-2 border rounded ${errors.location ? "border-red-500" : ""}`}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
          <div>
            <input
              type="number"
              name="pricePerNight"
              value={editingHotel ? editingHotel.pricePerNight : newHotel.pricePerNight}
              onChange={handleInputChange}
              placeholder="Price per Night"
              className={`w-full p-2 border rounded ${errors.pricePerNight ? "border-red-500" : ""}`}
            />
            {errors.pricePerNight && <p className="text-red-500 text-sm mt-1">{errors.pricePerNight}</p>}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {editingHotel && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 text-gray-800 p-2 rounded flex items-center"
            >
              <X size={18} className="mr-2" /> Cancel
            </button>
          )}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded flex items-center">
            {editingHotel ? (
              <>
                <Edit size={18} className="mr-2" /> Update Hotel
              </>
            ) : (
              <>
                <Plus size={18} className="mr-2" /> Add Hotel
              </>
            )}
          </button>
        </div>
      </form>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price per Night
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredHotels.map((hotel) => (
              <tr key={hotel.id}>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">${hotel.pricePerNight}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(hotel)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDelete(hotel)} className="text-red-600 hover:text-red-900">
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
        message={`Are you sure you want to delete hotel ${hotelToDelete?.name}?`}
      />
    </div>
  )
}

HotelManagement.propTypes = {
  initialHotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default HotelManagement

