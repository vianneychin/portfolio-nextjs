import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import types from 'tailwindcss'

export const metadata: Metadata = {
  title: {
    template: '%s - Vianney Chin',
    default: 'Vianney Chin - Full Stack Software Engineer',
  },
  description:
    "I'm Vianney, a full stack software engineer based in Los Angeles, California. I'm currently working remotely as a Lead Full Stack Software Engineer at Digital Media Management where I'm building interesting full stack web apps for a wide range of influencers and brands such as Creator Lab.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
