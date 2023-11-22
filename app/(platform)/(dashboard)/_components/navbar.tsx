import { Plus } from "lucide-react"
import { OrganizationSwitcher } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"



export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full border-b shadow-sm bg-white flex items-center">
      {/* Mobile Sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button size='sm' className="rounded-sm hidden mb:block h-auto py-1.5 px-2">
          Create
        </Button>
        <Button size='sm' className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }
          }}
        />
      </div>
    </nav>
  )
}