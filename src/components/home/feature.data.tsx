import React, { ReactNode } from 'react'
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined'
import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined'
import TrendingUpOutlined from '@mui/icons-material/TrendingUpOutlined'
import PublicOutlined from '@mui/icons-material/PublicOutlined'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Reliable & Cost-effective',
    description: 'To provide reliable and cost-effective business solutions.',
    icon: <LightbulbOutlined />,
  },
  {
    title: 'Customer Satisfaction.',
    description: 'To maintain the highest standards of professionalism and customer satisfaction.',
    icon: <HandshakeOutlined />,
  },
  {
    title: 'Modern Technologies',
    description: 'To adopt modern technologies and industry best practices.',
    icon: <TrendingUpOutlined />,
  },
  {
    title: 'Trust & Quality',
    description: 'To establish long-term business relationships based on trust and quality.',
    icon: <PublicOutlined />,
  },
]
