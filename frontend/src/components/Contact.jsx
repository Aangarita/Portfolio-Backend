import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Fade,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
} from '@mui/icons-material';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Email',
      value: 'tu.email@ejemplo.com',
      link: 'mailto:tu.email@ejemplo.com',
    },
    {
      icon: <Phone sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Teléfono',
      value: '+57 300 123 4567',
      link: 'tel:+573001234567',
    },
    {
      icon: <LocationOn sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Ubicación',
      value: 'Bogotá, Colombia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub sx={{ fontSize: 30 }} />,
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      color: '#333',
    },
    {
      icon: <LinkedIn sx={{ fontSize: 30 }} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-perfil',
      color: '#0077b5',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await contactAPI.createContact(formData);
      
      if (response.data.success) {
        setSnackbar({
          open: true,
          message: '¡Mensaje enviado exitosamente! Te contactaré pronto.',
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        severity: 'error',
      });
      console.error('Error sending contact form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              Contacto
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6} sx={{ width: '100%', maxWidth: 1200, justifyContent: 'center' }}>
          {/* Información de contacto */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1200}>
              <Box>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Información de Contacto
                </Typography>
                
                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{
                          bgcolor: 'background.default',
                          border: '1px solid rgba(100, 181, 246, 0.2)',
                          '&:hover': {
                            borderColor: 'primary.main',
                            transform: 'translateX(5px)',
                          },
                          transition: 'all 0.3s ease',
                          cursor: info.link ? 'pointer' : 'default',
                        }}
                        onClick={() => info.link && window.open(info.link, '_blank')}
                      >
                        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                          <Box sx={{ mr: 3 }}>
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                              {info.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {info.value}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* Redes sociales */}
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Sígueme en:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          bgcolor: 'background.default',
                          border: '1px solid rgba(100, 181, 246, 0.2)',
                          color: 'text.primary',
                          '&:hover': {
                            bgcolor: social.color,
                            color: 'white',
                            transform: 'translateY(-3px)',
                            boxShadow: `0 8px 25px ${social.color}40`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Formulario de contacto */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1400}>
              <Card
                sx={{
                  bgcolor: 'background.default',
                  border: '1px solid rgba(100, 181, 246, 0.2)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Envíame un Mensaje
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                      variant="outlined"
                    />
                    
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                      variant="outlined"
                    />
                    
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                      variant="outlined"
                    />
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<Send />}
                      disabled={loading}
                      sx={{
                        bgcolor: 'primary.main',
                        py: 1.5,
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(100, 181, 246, 0.3)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {loading ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;