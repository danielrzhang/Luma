import { isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import LogOutButton from '@/components/LogOutButton'

const RootLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated()

  if (!isUserAuthenticated) {
    redirect("/sign-in")
  }
  
  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between p-4 w-full flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Luma</h2>
        </Link>
        <LogOutButton />
      </nav>

      {children}
    </div>
  )
}

export default RootLayout