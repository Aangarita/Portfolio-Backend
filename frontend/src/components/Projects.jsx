import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Fade,
  CircularProgress,
  Alert,
} from '@mui/material';
import { GitHub, Launch, Star } from '@mui/icons-material';
import { projectsAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getProjects();
        if (response.data.success) {
          // Ordenar proyectos: featured primero, luego por orden
          const sortedProjects = response.data.data.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return a.order - b.order;
          });
          setProjects(sortedProjects);
        }
      } catch (err) {
        setError('Error al cargar los proyectos');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Alert severity="error">{error}</Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      id="projects"
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
              Proyectos
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Una selección de mis trabajos más destacados y proyectos personales
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Fade in timeout={1200 + index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    border: project.featured ? '2px solid' : '1px solid rgba(100, 181, 246, 0.2)',
                    borderColor: project.featured ? 'primary.main' : undefined,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: project.featured 
                        ? '0 15px 40px rgba(100, 181, 246, 0.3)'
                        : '0 10px 30px rgba(0,0,0,0.3)',
                    },
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                >
                  {project.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 1,
                      }}
                    >
                      <Chip
                        icon={<Star />}
                        label="Destacado"
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                  )}
                  
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.imageUrl || 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={project.name}
                    sx={{
                      objectFit: 'cover',
                      filter: 'brightness(0.8)',
                      '&:hover': {
                        filter: 'brightness(1)',
                      },
                      transition: 'filter 0.3s ease',
                    }}
                  />
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {project.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {project.shortDescription || project.description}
                    </Typography>
                    
                    {project.techStack && (
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.techStack.split(',').map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech.trim()}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(100, 181, 246, 0.1)',
                                color: 'primary.main',
                                fontSize: '0.75rem',
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                    
                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHub />}
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: 'text.secondary',
                          color: 'text.secondary',
                          '&:hover': {
                            borderColor: 'primary.main',
                            color: 'primary.main',
                          },
                        }}
                      >
                        Código
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<Launch />}
                        href={project.portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        }}
                      >
                        Ver Demo
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;