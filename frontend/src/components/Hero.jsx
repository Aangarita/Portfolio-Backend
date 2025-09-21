import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Grid,
  Fade,
  Zoom,
} from '@mui/material';
import { Download as DownloadIcon, GitHub, LinkedIn } from '@mui/icons-material';

const Hero = () => {
  const handleDownloadCV = () => {
    // Aquí puedes poner la URL de tu CV en PDF
    const cvUrl = '/cv.pdf'; // Coloca tu CV en la carpeta public
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_TuNombre.pdf';
    link.click();
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Efectos de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)',
        }}
      />
      
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4} alignItems="center" sx={{ width: '100%', justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 500 }}
                >
                  ¡Hola! Soy
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Tu Nombre
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  sx={{ mb: 3, fontWeight: 400 }}
                >
                  Desarrollador Full Stack
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: 500, lineHeight: 1.8 }}
                >
                  Desarrollador apasionado por crear soluciones web innovadoras y eficientes. 
                  Especializado en tecnologías modernas como React, Node.js y bases de datos. 
                  Me encanta transformar ideas en aplicaciones funcionales y atractivas.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadCV}
                    sx={{
                      bgcolor: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(100, 181, 246, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Descargar CV
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<GitHub />}
                    href="https://github.com/tu-usuario"
                    target="_blank"
                    sx={{
                      borderColor: 'text.secondary',
                      color: 'text.secondary',
                      '&:hover': {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Zoom in timeout={1200}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Tu Nombre"
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 30px rgba(100, 181, 246, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 40px rgba(100, 181, 246, 0.5)',
                    },
                  }}
                />
              </Box>
            </Zoom>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;