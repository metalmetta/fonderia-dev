"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Event = {
  id: string
  title: string
  date: string
  location: string
  type: "Workshop" | "Meetup" | "Conference" | "Hackathon"
  status: "Upcoming" | "Ongoing" | "Completed"
  attendees: number
}

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "title",
    header: "Event Title",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      let statusClass = ""
      if (status === "Upcoming") {
        statusClass = "bg-blue-500/10 text-blue-500"
      } else if (status === "Ongoing") {
        statusClass = "bg-green-500/10 text-green-500"
      } else {
        statusClass = "bg-gray-500/10 text-gray-500"
      }
      return (
        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusClass}`}>
          {status}
        </div>
      )
    },
  },
  {
    accessorKey: "attendees",
    header: () => <div className="text-right">Attendees</div>,
    cell: ({ row }) => {
      const attendees = row.getValue("attendees") as number
      return <div className="text-right font-medium">{attendees}</div>
    },
  },
]
