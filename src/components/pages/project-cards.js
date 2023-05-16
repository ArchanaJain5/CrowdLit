import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard(props, onCardClick) {
    const { project } = props;
    console.log(project);
    if (!project || project.length === 0) {
      return null; // or display a message or placeholder
    }
    const handleCardClick = () => {
        onCardClick(project);
     };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={project.cover_image}
      />
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
}