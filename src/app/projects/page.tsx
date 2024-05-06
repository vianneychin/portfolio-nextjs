import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoGuideness from '@/images/logos/guideness.png'
import logoCreatorLab from '@/images/logos/creatorlab.png'
import logoFooodie from '@/images/logos/fooodie.png'
import dmmLogo from '@/images/logos/dmm-logo.png'

const projects = [
  {
    name: 'Creator Lab',
    description:
      'Creator Lab is a technology platform that connects creators and popular brands to collaborative opportunities with other like-minded individuals and companies.',
    link: { href: 'https://creatorlab.co/', label: 'creatorlab.co' },
    logo: logoCreatorLab,
    employer: 'Digital Media Management',
  },
  {
    name: 'Guideness',
    description:
      'Guideness is a home for experts, coaches, creators and their communities. These Guides specialize in holistic wellness, fitness, mindfulness, self-improvement and personal growth. ',
    link: { href: 'https://guideness.co/', label: 'guideness.co' },
    logo: logoGuideness,
    employer: 'Digital Media Management',
  },
  {
    name: 'Internal AI Sentiment Analysis Tool',
    description:
      'Internal tool used to track sentiment for large brands over big social media platforms  based on user and fandom comments. Automating data analysis work that would take weeks into several hours.',
    link: {
      href: 'https://digitalmediamanagement.com',
      label: 'digitalmediamanagement.com',
    },
    logo: dmmLogo,
    employer: 'Digital Media Management',
  },
  {
    name: 'Fooodiee',
    description:
      'A Tinder-esque restaurant-matching app designed to help couples effortlessly decide on their next meal, eliminating disputes over dining choices. Swipe right on your next meal.',
    link: {
      href: 'https://apps.apple.com/us/app/fooodie/id1493362633',
      label: 'apps.apple.com/fooodie',
    },
    logo: logoFooodie,
    employer: 'Co-Creator',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Major projects I've developed from the ground up that have made a significant impact."
      intro="I've created an impact and worked on several projects at Digital Media Management. I've also developed personal projects that simplify my life and the lives of others."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link
                target="_blank"
                rel="noreferrer noopener"
                href={project.link ? project.link.href : ''}
              >
                {project.name}
              </Card.Link>
              {project.employer && (
                <p className="text-zinc-500">- {project.employer}</p>
              )}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
