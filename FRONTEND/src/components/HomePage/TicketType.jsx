import React, { useState } from "react"
import { PlaneTakeoffIcon as AirplaneTakeoff, Repeat, MoreHorizontal } from "lucide-react" // Import icons from lucide-react

const TicketType = () => {
  const [selectedTicket, setSelectedTicket] = useState("one-way")

  const handleSelection = (value) => {
    setSelectedTicket(value)
  }

  const ticketOptions = [
    { value: "one-way", label: "One Way", icon: AirplaneTakeoff },
    { value: "round-trip", label: "Round Trip", icon: Repeat },
    { value: "multi-city", label: "Multi City", icon: MoreHorizontal },
  ]

  return (
    <div className="bg-white p-4 rounded-lg mt-10">
      <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {ticketOptions.map((option) => (
          <li
            key={option.value}
            className={`
              ${selectedTicket === option.value ? "bg-blue-300 font-semibold" : ""}
              rounded-full pr-2 cursor-pointer transition-colors duration-200
            `}
            onClick={() => handleSelection(option.value)}
          >
            <span className="flex items-center px-2 py-2">
              <input
                type="radio"
                checked={selectedTicket === option.value}
                onChange={() => handleSelection(option.value)}
                className="mr-2"
              />
              <option.icon className="h-4 w-4 mr-2" />
              {option.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TicketType

