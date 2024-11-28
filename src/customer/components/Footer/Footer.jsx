import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import React from 'react';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    border: 'none',
    color: '#f1f1f1',
    ...theme.applyStyles('dark', {
      backgroundColor: '#fff',
    }),
  }));

  
const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 , bgcolor: '#1A2027'}}>
            <Grid container spacing={4} size={{ xs: 12, md: 7, lg: 8 }}>
              <Grid size={{ xs: 6, lg: 3 }}>
                <Item>
                <Box
                    id="Company"
                    sx={{ fontSize: '24px', fontWeight: 'bold', center: 'center' }}
                >
                    Company
                </Box>
                  <Box component="ul" aria-labelledby="Company" sx={{ pl: 0, mt: 3 }}>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Partners</li>
                  </Box>
                </Item>
              </Grid>
              <Grid size={{ xs: 6, lg: 3 }}>
              <Item>
                <Box
                    id="Company"
                    sx={{ fontSize: '24px', fontWeight: 'bold', center: 'center' }}
                >
                    Solutions
                </Box>
                  <Box component="ul" aria-labelledby="Company" sx={{ pl: 0, mt: 3 }}>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                        <li>Support</li>
                  </Box>
                </Item>
              </Grid>
              <Grid size={{ xs: 6, lg: 3 }}>
              <Item>
                <Box
                    id="Company"
                    sx={{ fontSize: '24px', fontWeight: 'bold', center: 'center' }}
                >
                    Company
                </Box>
                  <Box component="ul" aria-labelledby="Company" sx={{ pl: 0, mt: 3 }}>
                        <li>Guides</li>
                        <li>API Status</li>
                  </Box>
                </Item>
              </Grid>
              <Grid size={{ xs: 6, lg: 3 }}>
              <Item>
                <Box
                    id="Company"
                    sx={{ fontSize: '24px', fontWeight: 'bold', center: 'center' }}
                >
                    Company
                </Box>
                  <Box component="ul" aria-labelledby="Company" sx={{ pl: 0, mt: 3 }}>
                        <li>Claim</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              flexDirection={{ xs: 'column', sm: 'row' }}
              sx={{ fontSize: '12px', mt: 15 }}
              size={12}
            >
              <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                <Item>
                    <p>©2024 My Company. All rights reserved.</p>
                    <p>This template is made with love by <a href="https://github.com/daccuong-uit">Daccuong-UIT</a>.</p>
                </Item>
              </Grid>
            </Grid>
        </Box>
      );    
}

export default Footer;