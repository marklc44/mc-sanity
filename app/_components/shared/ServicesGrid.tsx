import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from './Card'
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa'
import { GoZap } from 'react-icons/go'

const services = [
  {
    icon: <FaCode className="h-6 w-6" />,
    title: 'Full-Stack Development',
    description:
      'End-to-end web and mobile application development with modern technologies',
  },
  {
    icon: <FaRocket className="h-6 w-6" />,
    title: 'MVP Development',
    description:
      'Rapid prototyping and MVP development to validate your ideas quickly',
  },
  {
    icon: <FaUsers className="h-6 w-6" />,
    title: 'Technical Consulting',
    description:
      'Strategic technical guidance and architecture planning for your projects',
  },
  {
    icon: <GoZap className="h-6 w-6" />,
    title: 'Performance & Scalability',
    description:
      'Optimize existing applications for better performance and scalability',
  },
]

const ServicesGrid = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          How I Can Help Your Business
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Specialized services for startups and small businesses looking to
          build and scale their digital products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border-border/50 hover:border-highlight/50 transition-colors"
          >
            <CardHeader>
              <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center text-highlight mb-4">
                {service.icon}
              </div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ServicesGrid
