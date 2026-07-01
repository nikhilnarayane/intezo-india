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
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}>
           <Box component="img"
              src="/images/logo.png"
              sx={{
                width: {
                  xs: 40,
                  sm: 50,
                  md: 50,
                },
                height: "auto",
              }}
            />
        {/* <Image className="logo" src="/images/logo.png" alt="INTEZOINDIA icon" width={50} height={50} quality={97} /> */}
          <span>&nbsp;INTEZO&nbsp;INDIA</span>&nbsp;SOLUTIONS
      </Typography>
      
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
