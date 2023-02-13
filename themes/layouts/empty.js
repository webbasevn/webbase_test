import React from 'react'
import { Box } from '@mui/material'

export default function EmptyLayout( { children }) {

    return (
        <Box sx={{
            width: '100%',
            bgcolor: '#ffffff',
            m: 0,
            p: 0
        }}>
            {children}
        </Box>
    )
}