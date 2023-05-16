import { Container } from '@mui/system'
import React from 'react'

interface formProps{
    children: any
}

export default function FromWrapper(props:formProps) {
    const {children} = props
  return (
    <>
    <Container fixed>
        {children}
    </Container>
    </>
  )
}
