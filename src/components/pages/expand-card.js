import React, { useState,useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Card, CardContent, Divider, Stack, SvgIcon, Button } from '@mui/material';
import axios from 'axios';

const theme = createTheme();
const ProjectCard = ({ project, onCardClick }) => {
  if (!project || Object.keys(project).length === 0) {
    return null;
  }

  const handleCardClick = () => {
    onCardClick(project);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }} onClick={handleCardClick}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.project_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ExpandedCard = ({ project, onClose }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Expanded card content */}
      <Button variant="outlined" onClick={onClose}>
        Close
      </Button>
    </Card>
  );
};

const ExpandCard = () => {
  const [projects, setData] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);
  useEffect(() => {
    loadProjects();
 }, []);
function loadProjects() {
  const config = {
    method: 'get',
    url: 'http://localhost:3000/api/project/list',
    params: {
      page: 1,
      limit: 10,
    },
    headers: {},
  };

  axios.request(config)
    .then((response) => {
      // Handle successful response
      // console.log(response.data);
      setData(response.data.projects);
    })
    .catch((error) => {
      // Handle error
      console.error(error);
      throw error;
    });
}  
  const handleCardClick = (project) => {
    setExpandedProject(project);
  };

  const handleCloseExpandedCard = () => {
    setExpandedProject(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {expandedProject ? (
          <ExpandedCard project={expandedProject} onClose={handleCloseExpandedCard} />
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} onCardClick={handleCardClick} />
          ))
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ExpandCard;
