import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useTheme } from "next-themes"

export function GameByteProcessModal() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"
  
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({"namespace": "enterprise-demo"})
      cal("ui", {"hideEventTypeDetails": true, "layout": "month_view"})
    })()
  }, [])
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          size="sm" 
          className="w-full text-xs"
        >
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 border-none max-w-[70vw] rounded-xl overflow-hidden">
        <DialogTitle className="sr-only">Supercharge Your Studio with GameByte</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 h-[800px]">
          {/* Info Panel */}
          <div className="p-8 flex flex-col bg-white dark:bg-black relative h-full overflow-y-auto border-r border-gray-200 dark:border-gray-800">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8 mt-0 flex-shrink-0">
                <Image 
                  src={isDarkMode ? "/logo.png" : "/logo.png"} 
                  alt="Kortix Logo" 
                  width={60} 
                  height={21} 
                  className="h-6 w-auto"
                />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-foreground flex-shrink-0">
  AI Power for Game Studios
</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg flex-shrink-0">
  Unlock faster prototyping, smarter content creation, and seamless production. GameByte brings AI-driven workflows to your team—so you can focus on building great games.
</p>
              
              <div className="space-y-8 mb-auto flex-shrink-0">
                <div className="transition-all duration-300 hover:translate-x-1 group">
                  <h3 className="text-base md:text-lg font-medium mb-3 flex items-center">
                    <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full inline-flex items-center justify-center mr-3 text-sm group-hover:shadow-md transition-all duration-300">1</span>
                    <span>Ideate</span>
                  </h3>
                  <p className="text-base text-muted-foreground ml-10">
  Share your vision, mechanics, or art style—GameByte captures your creative intent.
</p>
                </div>
                
                <div className="transition-all duration-300 hover:translate-x-1 group">
                  <h3 className="text-base md:text-lg font-medium mb-3 flex items-center">
                    <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full inline-flex items-center justify-center mr-3 text-sm group-hover:shadow-md transition-all duration-300">2</span>
                    <span>Generate</span>
                  </h3>
                  <p className="text-base text-muted-foreground ml-10">
  Instantly get assets, levels, scripts, or design docs tailored for your project.
</p>
                </div>
                
                <div className="transition-all duration-300 hover:translate-x-1 group">
                  <h3 className="text-base md:text-lg font-medium mb-3 flex items-center">
                    <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full inline-flex items-center justify-center mr-3 text-sm group-hover:shadow-md transition-all duration-300">3</span>
                    <span>Ship</span>
                  </h3>
                  <p className="text-base text-muted-foreground ml-10">
  Accelerate production, automate the grind, and launch with confidence.
</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex-shrink-0">
                <p className="text-base font-medium mb-3">Why GameByte?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <p className="text-sm text-muted-foreground">Cut dev time & costs</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <p className="text-sm text-muted-foreground">Streamline pipelines</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <p className="text-sm text-muted-foreground">Boost quality & consistency</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <p className="text-sm text-muted-foreground">Scale your studio</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <p className="text-sm text-muted-foreground">24/7 creative power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#171717] h-full overflow-hidden">
            <div className="h-full overflow-auto">
              <Cal 
                namespace="enterprise-demo"
                calLink="canerdogan/15min"
                style={{width:"100%", height:"100%"}}
                config={{
                  layout: "month_view",
                  hideEventTypeDetails: "false",
                }}
              />
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
} 