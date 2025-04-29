# Tests Documentation

This directory contains all the tests for the Borkacle application. The tests are organized by type and component to maintain a clear structure.

## Overview

- **Components Tests**: Tests for React components
- **Hooks Tests**: Tests for custom React hooks
- **Utils Tests**: Tests for utility functions

## Test Files

### Component Tests

#### `kpi-dashboard.test.tsx`
Tests the KPI Dashboard component functionality:
- Renders the KPI dashboard component correctly
- Handles loading states when fetching data
- Displays KPI data correctly when loaded
- Handles filtering and date range selection

#### `kpi-persona-dashboard.test.tsx`
Tests the KPI Persona Dashboard component:
- Renders correctly with user information
- Displays persona-specific KPI data
- Handles data filtering and time period selection
- Tests interactions with the dashboard controls

#### `task-board.test.tsx`
Tests the Task Board component:
- Renders the task board with columns and tasks
- Tests drag and drop functionality for tasks
- Verifies task filtering and searching
- Tests task creation, editing, and deletion

### Hook Tests

#### `hooks/use-mobile.test.tsx`
Tests the `useIsMobile` custom hook which detects if the current viewport is mobile:

1. **Desktop Viewport Test**
   - Sets window.innerWidth to desktop size (1024px)
   - Verifies hook returns `false` indicating not mobile

2. **Mobile Viewport Test**
   - Sets window.innerWidth to mobile size (500px)
   - Verifies hook returns `true` indicating mobile view

3. **Viewport Change Test**
   - Tests the hook's reaction to changes in viewport size
   - Starts with desktop size and verifies initial state
   - Changes to mobile size and verifies the hook updates accordingly

4. **Desktop Viewport Snapshot**
   - Creates a snapshot of the hook's return value for desktop view
   - Ensures future changes don't unexpectedly alter behavior

5. **Mobile Viewport Snapshot**
   - Creates a snapshot of the hook's return value for mobile view
   - Serves as a reference for expected mobile detection

## Running Tests

To run all tests:
```bash
npm test
```

To run a specific test file:
```bash
npm test -- path/to/test.tsx
```

To update snapshots:
```bash
npm test -- -u
``` 