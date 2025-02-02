import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Plus, Edit, Trash2, X, Search } from "lucide-react"
import ConfirmationModal from "./ConfirmationModal"

const PackageManagement = ({ initialPackages }) => {
  const [packages, setPackages] = useState(initialPackages)
  const [newPackage, setNewPackage] = useState({ name: "", destination: "", duration: "", price: "" })
  const [editingPackage, setEditingPackage] = useState(null)
  const [errors, setErrors] = useState({})
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [packageToDelete, setPackageToDelete] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPackages, setFilteredPackages] = useState(packages)

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase()
    const filtered = packages.filter(
      (pkg) =>
        pkg.name.toLowerCase().includes(lowercasedFilter) || pkg.destination.toLowerCase().includes(lowercasedFilter),
    )
    setFilteredPackages(filtered)
  }, [searchTerm, packages])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (editingPackage) {
      setEditingPackage({ ...editingPackage, [name]: value })
    } else {
      setNewPackage({ ...newPackage, [name]: value })
    }
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = (pkg) => {
    const newErrors = {}
    if (!pkg.name.trim()) newErrors.name = "Package name is required"
    if (!pkg.destination.trim()) newErrors.destination = "Destination is required"
    if (!pkg.duration || pkg.duration <= 0) newErrors.duration = "Valid duration is required"
    if (!pkg.price || pkg.price <= 0) newErrors.price = "Valid price is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const packageToValidate = editingPackage || newPackage
    if (validateForm(packageToValidate)) {
      if (editingPackage) {
        setPackages(packages.map((p) => (p.id === editingPackage.id ? editingPackage : p)))
        setEditingPackage(null)
      } else {
        setPackages([...packages, { ...newPackage, id: Date.now() }])
        setNewPackage({ name: "", destination: "", duration: "", price: "" })
      }
    }
  }

  const handleEdit = (pkg) => {
    setEditingPackage(pkg)
  }

  const handleDelete = (pkg) => {
    setPackageToDelete(pkg)
    setIsDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    setPackages(packages.filter((pkg) => pkg.id !== packageToDelete.id))
    setIsDeleteModalOpen(false)
    setPackageToDelete(null)
  }

  const cancelEdit = () => {
    setEditingPackage(null)
    setErrors({})
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Tour Packages</h2>
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <p>Total Packages: {packages.length}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={editingPackage ? editingPackage.name : newPackage.name}
              onChange={handleInputChange}
              placeholder="Package Name"
              className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="destination"
              value={editingPackage ? editingPackage.destination : newPackage.destination}
              onChange={handleInputChange}
              placeholder="Destination"
              className={`w-full p-2 border rounded ${errors.destination ? "border-red-500" : ""}`}
            />
            {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
          </div>
          <div>
            <input
              type="number"
              name="duration"
              value={editingPackage ? editingPackage.duration : newPackage.duration}
              onChange={handleInputChange}
              placeholder="Duration (days)"
              className={`w-full p-2 border rounded ${errors.duration ? "border-red-500" : ""}`}
            />
            {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
          </div>
          <div>
            <input
              type="number"
              name="price"
              value={editingPackage ? editingPackage.price : newPackage.price}
              onChange={handleInputChange}
              placeholder="Price"
              className={`w-full p-2 border rounded ${errors.price ? "border-red-500" : ""}`}
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {editingPackage && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 text-gray-800 p-2 rounded flex items-center"
            >
              <X size={18} className="mr-2" /> Cancel
            </button>
          )}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded flex items-center">
            {editingPackage ? (
              <>
                <Edit size={18} className="mr-2" /> Update Package
              </>
            ) : (
              <>
                <Plus size={18} className="mr-2" /> Add Package
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
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration (days)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPackages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">${pkg.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(pkg)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDelete(pkg)} className="text-red-600 hover:text-red-900">
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
        message={`Are you sure you want to delete package ${packageToDelete?.name}?`}
      />
    </div>
  )
}

PackageManagement.propTypes = {
  initialPackages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default PackageManagement

