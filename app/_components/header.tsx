import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
      </CardContent>
      <Button size="icon" variant="outline">
        <MenuIcon></MenuIcon>
      </Button>
    </Card>
  )
}

export default Header
