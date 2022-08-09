import { setDefaultResultOrder } from 'dns'
import Link from 'next/link'




function Footer() {
  return (
    <div class="grid content-center space-y-12 h-96 w-full, bg-blue-900">
    <div class="flex flex-row h-8 w-full justify-center space-x-9 text-sm text-sky-500">
        <div>
          <Link href="/">
          <a>Managed development</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>Pricing</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>Quick fix</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>Our woork</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>App builder</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>App builder</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>Marketplace</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>About Us</a>
          </Link>
        </div>
        <div>
          <Link href="/">
          <a>Log in</a>
          </Link>
        </div>               
    </div>
      <div class="flex justify-center content-center">
       <img src="https://i.ibb.co/HpXLH0B/footer-logo.png" class="max-w-full h-auto" alt="footer-logo"></img>
      </div>
    </div>
  )
}



export default Footer