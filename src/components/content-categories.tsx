import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Newspaper, Briefcase, Microscope, Landmark, Heart, Utensils, Plane } from "lucide-react"

export default function ContentCategories() {
  const categories = [
    {
      id: 1,
      name: "Literatura",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      name: "Noticias",
      icon: <Newspaper className="h-6 w-6" />,
      color: "bg-red-100 text-red-700",
    },
    {
      id: 3,
      name: "Negocios",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-700",
    },
    {
      id: 4,
      name: "Ciencia",
      icon: <Microscope className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 5,
      name: "Política",
      icon: <Landmark className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-700",
    },
    {
      id: 6,
      name: "Salud",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: 7,
      name: "Gastronomía",
      icon: <Utensils className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: 8,
      name: "Viajes",
      icon: <Plane className="h-6 w-6" />,
      color: "bg-teal-100 text-teal-700",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      {categories.map((category) => (
        <Link key={category.id} href={`/categoria/${category.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className={`rounded-full p-3 ${category.color}`}>{category.icon}</div>
              <h3 className="mt-3 text-center text-sm font-medium">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
