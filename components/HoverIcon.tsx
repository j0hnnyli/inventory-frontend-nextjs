import { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
  icon : ReactNode;
  name : string ;
  fn: () => void;
}

const HoverIcon = ({ icon, name, fn } : Props) => {

  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger onClick={fn}>
        {icon}
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default HoverIcon