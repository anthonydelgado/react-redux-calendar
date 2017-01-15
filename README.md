# react-redux-calendar

For this assignment, you will be building a very simple Calendar application. To build this application it should take you about 48 working hours maximum (including familiarizing with concepts for Redux). 

Please use the following technologies/frameworks to build this application: MySQL, Node with Express, React with Redux, and HTML5 with Bootstrap.

Guide

Database 
Please use MySQL
Create a table called events
Each row in the events table should have the following columns: id, title, description, event_type_id, created_date, updated_date (use your best judgement in determining the column types for each column)
Create a table called event_types
Each row in the event_types table should have the following columns: id, name, created_date (use your best judgement in determining the column types for each column)
API 
Please use Node in combination with Express
Have an endpoint at /eventTypes that publishes all the event types from the event_types table with a GET request, and creates a new event type with a POST request (we won’t worry about updating or deleting event types for this assignment)
Have an endpoint at /events that returns all events from the events table with a GET request, and adds an event with a POST request
Have an endpoint at /events/<id> that returns the event for that id with a GET request, updates the event with that id with a PUT request, and deletes the event with that id with a DELETE request
Have an endpoint at /events/eventType?id=<event_type_id> which returns all the events for that event type
UI 
Please use React in combination with Redux, and HTML5 in combination with Bootstrap
This application will have two routes (/ and /eventTypes)
The root route (/) or the main page of the application will simply be the calendar with all the events
The users route (/eventTypes) will be a list of all the event types currently in the application
Start with the /eventTypes route
Along with a list of all the event types, there should be a button called “Add New Event Type”
When I click on that button, a modal should pop up which should let me create a new event type and save that type to the event_type table
Create three test event types (Home, Work, School, or Test 1, Test 2, Test 3 or anything you want)
Proceed to the / main route
Along with a list of all the calendar events neatly formatted (in calendar format if possible), here should be a button called “Add New Event” 
When I click on it, it should open up a modal with the following fields: Event Title (max 100 characters), Description (no max characters), Event Type (which will be a drop-down menu of the event types currently in the system)
Each calendar event in the list should show the title of the event, and the event type
Each calendar event should also have an edit and a delete button which lets me edit and delete that event respectively
Clicking on the actual event title should bring up a modal that displays more information on that calendar event (Title, Description, Event Type, Created Date, Updated Date)
