import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Fade,
} from '@mui/material';
import { Code, Timeline, CheckCircle } from '@mui/icons-material';

const About = () => {
  const stats = [
    {
      icon: <Timeline sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '3+',
      label: 'Años de Experiencia',
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '25+',
      label: 'Proyectos Completados',
    },
    {
      icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '10+',
      label: 'Tecnologías Dominadas',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Acerca de Mí
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Conoce más sobre mi trayectoria y experiencia como desarrollador
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1200}>
              <Box>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Mi Historia
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Soy un desarrollador Full Stack apasionado por la tecnología y la innovación. 
                  Mi viaje en el desarrollo web comenzó hace más de 3 años, y desde entonces 
                  he estado constantemente aprendiendo y adaptándome a las nuevas tecnologías.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Me especializo en crear aplicaciones web modernas y escalables utilizando 
                  tecnologías como React, Node.js, y bases de datos tanto SQL como NoSQL. 
                  Mi enfoque se centra en escribir código limpio, mantenible y eficiente.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Cuando no estoy programando, me gusta mantenerme actualizado con las últimas 
                  tendencias tecnológicas, contribuir a proyectos de código abierto y compartir 
                  conocimientos con la comunidad de desarrolladores.
                </Typography>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={4} md={12} key={index}>
                  <Fade in timeout={1400 + index * 200}>
                    <Card
                      sx={{
                        bgcolor: 'background.paper',
                        border: '1px solid rgba(100, 181, 246, 0.2)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(100, 181, 246, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', py: 3 }}>
                        <Box sx={{ mb: 2 }}>
                          {stat.icon}
                        </Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 1,
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;