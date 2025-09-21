import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Fade,
} from '@mui/material';
import {
  Code,
  Storage,
  Build,
  Web,
} from '@mui/icons-material';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Web sx={{ fontSize: 40, color: 'primary.main' }} />,
      skills: ['JavaScript', 'TypeScript', 'React', 'CSS', 'HTML'],
      color: '#64b5f6',
    },
    {
      title: 'Backend',
      icon: <Code sx={{ fontSize: 40, color: 'secondary.main' }} />,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
      color: '#f48fb1',
    },
    {
      title: 'Herramientas',
      icon: <Build sx={{ fontSize: 40, color: '#81c784' }} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      color: '#81c784',
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
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
              Habilidades
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Tecnologías y herramientas que domino para crear soluciones completas
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1200 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'background.default',
                    border: `1px solid ${category.color}40`,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 15px 35px ${category.color}30`,
                      borderColor: category.color,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        color: category.color,
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          sx={{
                            bgcolor: `${category.color}20`,
                            color: category.color,
                            border: `1px solid ${category.color}40`,
                            '&:hover': {
                              bgcolor: `${category.color}30`,
                              transform: 'scale(1.05)',
                            },
                            transition: 'all 0.2s ease',
                            fontWeight: 500,
                          }}
                        />
                      ))}
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

export default Skills;