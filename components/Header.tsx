import Link from 'next/link'

const routes = [
  { label: "Managed development", path: "/managed-development" },
  { label: "Pricing", path: "/prcing"},
  { label: "Quick fix", path: "/quick-fix" },
  { label: "Out work", path: "/our-work" },
  { label: "App builder", path:"/app-builder" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "About us", path: "/about-us"},
  { label: "Login", path: "/log-in"},
]



function Header() {
  return (
    <div className="grid content-center space-y-12 h-20 w-full, bg-purple-dark">
    <div className="flex h-4 w-full justify-center items-center space-x-7 text-sm text-primary">
        <div className="flex justify-center h-8">
            <img src="https://i.ibb.co/vHkHTqw/logo-5.png" className="max-w-full h-auto" alt="header-logo"></img>
        </div>        
        {
        routes.map((headerItem, key) => (
            <div key={key}>
              <Link href={headerItem.path}>
                {headerItem.label}
              </Link>
            </div>
        ))
      }          
    </div>
    </div>
  )
}

export default Header