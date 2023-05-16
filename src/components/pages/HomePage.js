import React from 'react';
import Navbar from './NavBar'; // Assuming you have the AppBar component defined in a separate file
import {
  Stack,
  Button,
  Typography,
  Grid
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectCard from './project-cards';
import {useState , useEffect} from 'react' 
import axios from 'axios';

const theme = createTheme();

const HomePage = () => {
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
    <div>
    <div>
      <Navbar />
      <Grid container alignItems="center">
      <Grid item xs={2}>
        <Typography variant="h3" sx={{ marginTop: '20px' }}>
          Projects
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Button variant="contained" color="primary" size="small">
          Launch project
        </Button>
      </Grid>
     </Grid>
    </div>
    <div style={{ margin: '40px 0' }}>
    <Stack spacing={3} direction='row'>
        <Button variant='contained' color='primary'>
          All
        </Button>
        <Button variant='contained' style={{ backgroundColor: 'transparent', color:'black' }}>
          Education
        </Button>
        <Button variant='contained' style={{ backgroundColor: 'transparent', color:'black' }}>
          History
        </Button>
        <Button variant='contained'style={{ backgroundColor: 'transparent', color:'black' }}>
          Biology
        </Button>
        <Button variant='contained' style={{ backgroundColor: 'transparent', color:'black' }}>
          Art
        </Button>
        <Button variant='contained' style={{ backgroundColor: 'transparent', color:'black' }}>
          Music
        </Button>
      </Stack>
    </div>
    <Grid container spacing={3} >
            {projects.map((project) => (
              <Grid item
                xs={12}
                md={6}
                lg={4}
                key={project._id}
              >
                <ProjectCard key={project._id} project={project}  />
              </Grid>
            ))}
          </Grid>


    </div>
    </ThemeProvider>
  );
};

export default HomePage;