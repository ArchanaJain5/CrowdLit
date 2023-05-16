import * as React from 'react';
import Button from '@mui/material/Button';
const axios = require('axios');

export default function ProjectDetails(props){
    const handleProjectDetails = async (event) =>{
        // event.preventDefault();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let res =await fetch (
            "http://localhost:3000/api/project/get/643f45a09d10bdbc89d268b3",
            requestOptions
        )
        let data = await res.json();
        console.log(data);
    };
    return (
        <div style={{ margin: 200 }}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleProjectDetails()}
            >
              Submit
            </Button>
        </div>
      );
}
