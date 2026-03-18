# Web Attendance Tracking Application

A modern **Single Page Application (SPA)** designed to streamline and digitize event attendance tracking. The platform replaces paper-based lists and manual processes with a secure, real-time system.


## Overview

This application enables event organizers to create and manage events while allowing participants to quickly confirm attendance via QR codes or access codes.

**Goals:**
- Eliminate manual attendance tracking
- Reduce human error
- Provide real-time visibility
- Enable easy data export and reporting


## Features

### For Event Organizers

- **Event Management**
  - Create single or recurring events
  - Automatic generation of event instances

- **Access Codes**
  - Unique code per event
  - Available as text or QR code

- **Real-Time Monitoring**
  - Live attendee list
  - Timestamped confirmations

- **Event Status Automation**
  - `CLOSED` → before start  
  - `OPEN` → during event  
  - `CLOSED` → after event  

- **Data Export**
  - CSV / XLSX reports
  - Per event or grouped events


### For Participants

- **Quick Attendance Confirmation**
  - Scan QR code or enter access code
  - Instant browser-based confirmation


## Tech Stack

### Frontend
- React.js
- SPA architecture
- Responsive design
- QR code scanning support

### Backend
- Node.js + Express
- RESTful API (JSON)
- JWT authentication
- Business logic for:
  - Code generation
  - Event state automation
  - Attendance tracking

### Database
- PostgreSQL
- ORM for migrations, queries, and exports


## Workflow

1. Organizer creates an event or recurring group  
2. System generates event instances and access codes  
3. Event opens automatically at scheduled time  
4. Organizer displays QR code  
5. Participants scan or enter the code  
6. Attendance is recorded instantly  
7. Reports can be exported  


## Future Improvements

- Google / SSO authentication  
- Email or push notifications  
- Analytics dashboard  
- Calendar integrations (Google Calendar, Outlook)
