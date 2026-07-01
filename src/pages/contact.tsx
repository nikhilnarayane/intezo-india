import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const ContactPage: NextPageWithLayout = () => {
  return (
    <Box sx={{ py: 12, px: 2, textAlign: 'center' }}>
      <Typography component="h1" variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }}>
        Reach out to us for any questions, inquiries, or support. We will get back to you shortly.
      </Typography>
    </Box>
  )
}

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ContactPage
