import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-orange-600 mb-4 leading-none">404</div>
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Page Not Found</h1>
        <p className="text-stone-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
