import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, ExternalLink } from "lucide-react"
import { GameByteProcessModal } from "@/components/sidebar/gamebyte-enterprise-modal"

export function CTACard() {
  return (
    <div className="flex flex-col space-y-2 py-2 px-1">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">GameByte Demo</span>
        <span className="text-xs text-muted-foreground mt-0.5">Create game in a click for your company</span>
      </div>
      <div className="flex flex-col space-y-2">
        <GameByteProcessModal />
        {/* <Link href="https://cal.com/canerdogan/15min" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs"
          >
            Schedule Demo
            <ExternalLink className="ml-1.5 h-3 w-3" />
          </Button>
        </Link> */}
      </div>
      
      <div className="flex items-center mt-1">
        <Link 
          href="https://gamebyte.ai/careers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <Briefcase className="mr-1.5 h-3.5 w-3.5" />
          Join Our Team! 🚀
        </Link>
      </div>
    </div>
  )
}
