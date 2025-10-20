import { Event, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Event[]> {
  // Sample data - replace with actual data from your database
  return [
    {
      id: "1",
      title: "Next.js Workshop: Building Modern Web Apps",
      date: "2025-11-05",
      location: "Milan, Italy",
      type: "Workshop",
      status: "Upcoming",
      attendees: 45,
    },
    {
      id: "2",
      title: "AI & Machine Learning Meetup",
      date: "2025-10-28",
      location: "Virtual",
      type: "Meetup",
      status: "Upcoming",
      attendees: 120,
    },
    {
      id: "3",
      title: "Fonderia Hackathon 2025",
      date: "2025-10-25",
      location: "Milan, Italy",
      type: "Hackathon",
      status: "Ongoing",
      attendees: 85,
    },
    {
      id: "4",
      title: "Web3 & Blockchain Conference",
      date: "2025-10-15",
      location: "Milan, Italy",
      type: "Conference",
      status: "Completed",
      attendees: 200,
    },
    {
      id: "5",
      title: "Startup Founders Meetup",
      date: "2025-10-10",
      location: "Virtual",
      type: "Meetup",
      status: "Completed",
      attendees: 75,
    },
    {
      id: "6",
      title: "React & TypeScript Workshop",
      date: "2025-11-12",
      location: "Milan, Italy",
      type: "Workshop",
      status: "Upcoming",
      attendees: 60,
    },
    {
      id: "7",
      title: "DevOps Best Practices",
      date: "2025-11-20",
      location: "Virtual",
      type: "Workshop",
      status: "Upcoming",
      attendees: 90,
    },
    {
      id: "8",
      title: "Design Systems Conference",
      date: "2025-09-30",
      location: "Milan, Italy",
      type: "Conference",
      status: "Completed",
      attendees: 150,
    },
  ]
}

export default async function EventsPage() {
  const data = await getData()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Events
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
            Join us at our upcoming workshops, meetups, and conferences. Build connections, learn new skills, and grow with the Fonderia community.
          </p>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
