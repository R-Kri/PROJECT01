import PropTypes from "prop-types"
import { X } from "lucide-react"

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Confirm Action</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
}

export default ConfirmationModal

