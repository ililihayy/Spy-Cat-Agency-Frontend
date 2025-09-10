# Spy Cat Agency Frontend

A frontend application for managing spy cats, built with Next.js and TypeScript.

## Features

- View list of spy cats
- Add new cats
- Edit existing cats' salary
- Delete cats
- API error handling

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Component styling
- **React Hooks** - State management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ililihayy/Spy-Cat-Agency-Frontend
   cd Spy-Cat-Agency-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Integration

This frontend connects to the Spy Cat Agency API. Ensure your backend is running on the configured API URL before starting the application.
