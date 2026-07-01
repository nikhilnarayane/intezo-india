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
    title: 'Innovation First',
    description: 'Deliver creative design and advanced technology solutions that drive meaningful transformation.',
    icon: <LightbulbOutlined />,
  },
  {
    title: 'Customer-Centric Excellence',
    description: 'Build lasting relationships by providing reliable, high-quality, and customized services.',
    icon: <HandshakeOutlined />,
  },
  {
    title: 'Sustainable Growth',
    description: 'Create innovative spaces and digital solutions that contribute to long-term success and sustainability.',
    icon: <TrendingUpOutlined />,
  },
  {
    title: 'Global Impact',
    description: 'Become a trusted leader recognized for excellence in interior design, architecture, and digital innovation.',
    icon: <PublicOutlined />,
  },
]
