import Link from 'next/link';

const routes = [
  { label: "Managed development", path: "/managed-development" },
  { label: "Pricing", path: "/pricing" },
  { label: "Quick fix", path: "/pricing" },
  { label: "Our work", path: "/pricing" },
  { label: "App builder", path: "/pricing" },
  { label: "Marketplace", path: "/pricing" },
  { label: "About Us", path: "/pricing" },
  { label: "Login", path: "/pricing" },
]


const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-12 h-96 w-full bg-purple-dark">
    <div className="flex flex-row h-8 w-full justify-center space-x-9 text-sm text-secondary">
      {
        routes.map((footerItem, key) => (
            <div key={key}>
              <Link href={footerItem.path}>
                {footerItem.label}
              </Link>
            </div>
        ))
      }        
    </div>
      <div className="flex justify-center items-center">
       <img src="/assets/footer_logo.png" className="h-auto" alt="footer-logo" />
      </div>
    </div>
  )
}

export default Footer