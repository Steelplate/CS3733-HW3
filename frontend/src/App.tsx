import React, { useState } from 'react';
import './App.css';
import { TextField, MenuItem, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

interface ServiceRequest {
  employeeName: string;
  priority: string;
  location: string;
  recipientName: string;
  cardMessage: string;
  flowerType: string;
  deliveryDateTime: string;
  status: string;
}

const flowerOptions = [
  { label: 'All Occasion Classic - $65.00 – $90.00', value: 'All Occasion Classic' },
  { label: 'Classic Dozen Roses - $90.00', value: 'Classic Dozen Roses' },
  { label: 'Colorful Elegance - $84.00 – $103.00', value: 'Colorful Elegance' },
  { label: 'Dish Garden - $65.00', value: 'Dish Garden' },
  { label: 'Go-To-Two! - $70.00', value: 'Go-To-Two!' },
  { label: 'Holland Spring - $55.00 – $74.00', value: 'Holland Spring' },
  { label: 'Large Orchid Plant - $90.00', value: 'Large Orchid Plant' },
  { label: 'Orchid Festival - $70.00 – $88.00', value: 'Orchid Festival' },
  { label: 'Our Go-To Arrangement - $70.00', value: 'Our Go-To Arrangement' },
  { label: 'Small and Sweet - $65.00', value: 'Small and Sweet' },
  { label: 'Small and Sweet II - $65.00', value: 'Small and Sweet II' },
  { label: 'Summer Sunshine Sunflowers - $64.00 – $85.00', value: 'Summer Sunshine Sunflowers' },
  { label: 'Welcome Baby Boy - $65.00 – $90.00', value: 'Welcome Baby Boy' },
  { label: 'Welcome Baby Girl - $65.00 – $90.00', value: 'Welcome Baby Girl' },
];

const priorities = ['Low', 'Medium', 'High', 'Emergency'];
const statuses = ['unassigned', 'assigned', 'inprogress', 'completed'];

function App() {

  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);

  const [formData, setFormData] = useState({
    employeeName: '',
    priority: '',
    location: '',
    recipientName: '',
    cardMessage: '',
    flowerType: '',
    deliveryDateTime: '',
    status: 'unassigned',
  });

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setServiceRequests([...serviceRequests, formData]);

    setFormData({
      employeeName: '',
      priority: '',
      location: '',
      recipientName: '',
      cardMessage: '',
      flowerType: '',
      deliveryDateTime: '',
      status: 'unassigned',
    });

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setFormData(prevState => ({

      ...prevState,
      [name]: value,

    }));

  };

  return (

      <div className="App">

        <h1>Flower Delivery Service Request Form</h1>

        <form onSubmit={handleSubmit} style={{ margin: '20px' }}>

          <TextField
              label="Employee Name"
              variant="outlined"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              style={{ margin: '10px' }}
          />

          <TextField
              select
              label="Priority"
              variant="outlined"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{ margin: '10px' }}
          >
            {priorities.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
            ))}
          </TextField>

          <TextField
              label="Location"
              variant="outlined"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={{ margin: '10px' }}
          />

          <TextField
              label="Recipient Name"
              variant="outlined"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              style={{ margin: '10px' }}
          />

          <TextField
              label="Card Message"
              variant="outlined"
              name="cardMessage"
              multiline
              maxRows={4}
              value={formData.cardMessage}
              onChange={handleChange}
              style={{ margin: '10px' }}
          />

          <TextField
              select
              label="Flower Type"
              variant="outlined"
              name="flowerType"
              value={formData.flowerType}
              onChange={handleChange}
              style={{ margin: '10px' }}
          >
            {flowerOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
            ))}
          </TextField>

          <TextField
              type="datetime-local"
              label="Delivery Date and Time"
              variant="outlined"
              name="deliveryDateTime"
              InputLabelProps={{ shrink: true }}
              value={formData.deliveryDateTime}
              onChange={handleChange}
              style={{ margin: '10px' }}
          />

          <TextField
              select
              label="Status"
              variant="outlined"
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{ margin: '10px' }}
          >
            {statuses.map(status => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
            ))}
          </TextField>

          <Button type="submit" variant="contained" color="primary" style={{ margin: '10px' }}>
            Submit Request
          </Button>

        </form>

        <List component="nav" aria-label="service requests">

          {serviceRequests.map((request, index) => (

              <React.Fragment key={index}>

                <ListItem>

                  <ListItemText
                      primary={`Request by ${request.employeeName} for ${request.recipientName}: "${request.flowerType}" delivery on ${request.deliveryDateTime}`}
                      secondary={`Priority: ${request.priority}, Location: ${request.location}, Card Message: "${request.cardMessage}", Status: ${request.status}`}
                  />

                </ListItem>

                <Divider />

              </React.Fragment>

          ))}

        </List>

      </div>

  );

}

export default App;
