import { Button } from './Button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from './Card'

import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { Badge } from './Badge'
import Image from 'next/image'

const recentProjects = [
  {
    title: 'Site Redesign',
    client: 'Hopelab',
    description:
      'New full-stack headless CMS site with a custom React frontend.',
    tech: ['React', 'Next.js', 'Typescript', 'GraphQL', 'WordPress'],
    image: '/screenshots/hopelab-stories-1.png',
    link: '/work/hopelab',
  },
  {
    title: 'SaaS Subscriptions',
    client: 'NextMe',
    description:
      'B2B SaaS subscription management and feature gating.',
    tech: ['React', 'Next.js', 'TypeScript', 'Laravel', 'Stripe'],
    image: '/screenshots/nextme-plan-page.png',
    link: '/work/nextme',
  },
  {
    title: 'Waitlist Management',
    client: 'NextMe',
    description:
      'Waitlist dashboard for managing multiple queues, custom fields, guest signup, notifications, and more.',
    tech: ['React', 'Next.js', 'TypeScript', 'Laravel', 'Websockets'],
    image: '/screenshots/nextme-waitlist.png',
    link: '/work/nextme',
  },
]

const RecentWork = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Real solutions for real businesses
          </p>
        </div>
        <Button
          asChild
          variant="outline"
        >
          <Link href="/work">
            View All Projects
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentProjects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-border/50 hover:border-highlight/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="tilt-3d-container group aspect-video bg-muted/30 relative overflow-hidden">
              <div className="tilt-3d w-full h-full group-hover:scale-100 transition-transform duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 overlay-gradient pointer-events-none shadow-depth" />
              </div>
            </div>

            <CardHeader>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  {project.client}
                </Badge>
                <CardTitle className="group-hover:text-highlight transition-colors">
                  {project.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>{project.description}</CardDescription>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-0 h-auto text-highlight hover:text-highlight/80"
                  href={project.link}
                >
                  <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default RecentWork
