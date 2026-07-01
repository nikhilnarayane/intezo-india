import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Beautiful Interior Transformation',
    content:
      'INTEZO INDIA transformed our space with creativity and precision. The team delivered a modern, functional design that exceeded our expectations.',
    user: {
      id: 1,
      name: 'Rahul Sharma',
      professional: 'Interior Design',
      photo: '1.png',
    },
  },
  {
    id: 2,
    title: 'Professional Website Development',
    content:
      'Our new website is fast, responsive, and beautifully designed. The team delivered exactly what our business needed.',
    user: {
      id: 1,
      name: 'Priya Patel',
      professional: 'Software/Website Development',
      photo: '2.png',
    },
  },
  {
    id: 3,
    title: 'Outstanding Mobile App Solution',
    content:
      'The mobile app is intuitive, secure, and performs flawlessly. Their development team was professional from start to finish.',
    user: {
      id: 1,
      name: 'Amit Verma',
      professional: 'Mobile App Development',
      photo: '3.png',
    },
  },
  {
    id: 4,
    title: 'Reliable Software Partner',
    content:
      'The custom software streamlined our operations and improved efficiency. We appreciate their technical expertise and timely support.',
    user: {
      id: 1,
      name: 'Vikram Desai',
      professional: 'Software Development',
      photo: '4.png',
    },
  },
  {
    id: 5,
    title: 'Trusted Consulting Services',
    content:
      'Their architectural planning and IT consultancy helped us make informed decisions and achieve outstanding project results.',
    user: {
      id: 1,
      name: 'Sneha Kulkarni',
      professional: 'Architecture & IT Consultancy',
      photo: '5.png',
    },
  },
]
