import { Event, columns } from "./columns"
import { DataTable } from "./data-table"
import { createClient } from "@/lib/supabase/server"
import { CreateEventModal } from "@/components/create-event-modal"

async function getData(): Promise<Event[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false })

  if (error) {
    console.error("Error fetching events:", error)
    return []
  }

  return data || []
}

async function checkIsAdmin(): Promise<boolean> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return false

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single()

  return profile?.is_admin || false
}

export default async function EventsPage() {
  const data = await getData()
  const isAdmin = await checkIsAdmin()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Events
            </h1>
            <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
              Join us at our upcoming workshops, meetups, and conferences. Build connections, learn new skills, and grow with the Fonderia community.
            </p>
          </div>
          {isAdmin && (
            <div className="ml-4">
              <CreateEventModal />
            </div>
          )}
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
