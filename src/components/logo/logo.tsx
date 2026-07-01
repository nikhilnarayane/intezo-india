import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'


interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      
      <Typography
        variant="h5"
        component="h5"
        className="logoCenter"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }} >
        <Image src="/images/logo.png" alt="INTEZOINDIA icon" width={90} height={90} quality={97} />
          <span>&nbsp;INTEZO&nbsp;INDIA</span>&nbsp;SOLUTIONS
      </Typography>
      
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
