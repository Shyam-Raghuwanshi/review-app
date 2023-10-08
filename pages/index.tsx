import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/query/user'

const HomePage: NextPage = () => {
  const { user } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace(`http://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}/signin`)
    }
  }, [router, user])

  return (
    <div>
      <Head>
        <title>Review App</title>
      </Head>
      <main className="flex h-screen w-screen items-center justify-center">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl">
            Hello {user?.firstName} {user?.lastName} 👋🏻
          </h1>
          <Link href={`http://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}/dashboard`}><Button className='mt-3'>
            Go to Dashboard
          </Button></Link>
        </div>
      </main>
    </div>
  )
}

export default HomePage
