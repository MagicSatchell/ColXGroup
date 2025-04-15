import Link from "next/link"
import Image from "next/image"

const navigation = {
  main: [
    { name: "About Us", href: "#" },
    { name: "Our Portfolio", href: "#" },
    { name: "Services", href: "#" },
    { name: "Technology", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Cookie Settings", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0d2c4b] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4 sm:mb-6">
              <Image src="/colx-logo.png" alt="ColX Group" width={90} height={20} className="h-5 w-auto" />
            </Link>
            <h3 className="text-lg sm:text-xl font-medium mb-4">Collect smarter, not harder</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-sm font-medium mb-3 sm:mb-4">Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-4 md:mb-0">© 2023 ColX Group. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
