import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  const navigationLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Acerca de', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 20 }} />,
      text: 'tu.email@ejemplo.com',
      link: 'mailto:tu.email@ejemplo.com',
    },
    {
      icon: <Phone sx={{ fontSize: 20 }} />,
      text: '+57 300 123 4567',
      link: 'tel:+573001234567',
    },
    {
      icon: <LocationOn sx={{ fontSize: 20 }} />,
      text: 'Bogotá, Colombia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      url: 'https://github.com/tu-usuario',
      name: 'GitHub',
    },
    {
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/tu-perfil',
      name: 'LinkedIn',
    },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        borderTop: '1px solid rgba(100, 181, 246, 0.2)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Información personal */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mi Portafolio
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras 
              y eficientes. Siempre buscando nuevos desafíos y oportunidades de crecimiento.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Navegación */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Navegación
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navigationLinks.map((link, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(5px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: info.link ? 'pointer' : 'default',
                    '&:hover': info.link ? {
                      color: 'primary.main',
                      transform: 'translateX(3px)',
                    } : {},
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <Box sx={{ color: 'primary.main' }}>
                    {info.icon}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(100, 181, 246, 0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Desarrollado con ❤️ usando React y Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;