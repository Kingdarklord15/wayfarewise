# WayfareWise – AI-Powered Travel Planner

WayfareWise is a travel planning web application that helps users discover destinations, compare travel options, and generate personalized itineraries based on their preferences.

The goal of this project is to simplify trip planning by using AI-assisted recommendations that consider factors such as budget, travel style, season, group type, and interests.

---

## Features

### Smart Destination Recommendations
Users can receive destination suggestions based on:

- Budget
- Season
- Travel mood
- Group type
- Interests
- Trip duration

### AI Itinerary Generation
Generate day-wise travel plans including:

- Activities
- Attractions
- Local experiences
- Suggested schedules

### Budget-Aware Planning
Destinations are evaluated according to the user's budget constraints to help identify suitable options.

### Preference-Based Matching
Recommendations are personalized using user preferences and semantic similarity techniques.

### Interactive Maps
View destinations and travel locations visually through map integration.

### Travel Insights
Users can explore destination information such as:

- Estimated costs
- Ratings
- Trip suitability
- Destination highlights

### Dashboard
Users can save and manage their generated travel plans.

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router

### Backend

- Flask
- Python

### AI / ML Components

- OpenAI API
- Sentence Transformers
- Semantic Similarity Matching

### Data Processing

- Pandas
- NumPy

### Maps

- Mapbox

---

## Project Structure

```text
WayfareWise/
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── services/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── data/
│
└── README.md