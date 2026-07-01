import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/Managing Director.png',
    name: 'Balaji Puri',
    category: 'Founder & Managing Director',
    description:
      'Leads the company with a vision for innovation, ensuring excellence across design, architecture, and technology solutions.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/senior-archtech.png',
    name: 'Neha Kulkarni',
    category: 'Senior Interior Designer',
    description:
      'Specializes in creating modern, functional, and aesthetically pleasing spaces tailored to clients lifestyles and business needs.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/lead-software-engineer.png',
    name: 'Kishori Narayane',
    category: 'Lead Software Engineer',
    description:
      'Develops scalable software, websites, and mobile applications with a focus on performance, security, and user experience.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/chief-architect.png',
    name: 'Priya Deshmukh',
    category: 'Chief Architect & Space Planner',
    description:
      'Designs sustainable architectural solutions and efficient space plans that combine creativity with practical functionality.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
