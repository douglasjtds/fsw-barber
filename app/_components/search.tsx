"use client"

import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
// import { z } from "zod"
// import { useForm } from "react-hook-form"

// const formSchema = z.object({
//   search: z.string().trim().min(1)
//  })
// import { Button } from "./_components/ui/button"

const Search = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: "",
  //   },
  // })

  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push(`/barbershops?search=${search}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        placeholder="Faça sua busca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </form>
  )
}

export default Search
