# EmployeeCreator

![Demonstration of the employee creator app](./employeeCreatorFrontEnd/src/assets/EmployeeCreator.gif)

## MVP

Demonstrate understanding of RESTful APIs in Java and React Typescript frontend. This web application show allow for the creation, listing, modification, and deletion of employees. The schema is not supplied.

## Stack

This project utilizes Spring Boot, Java, Typescript, React, and MySQL.

## Design Goals / Approach

### Front-end

Having used several of these apps during my last few roles, I wanted to do some extra design on top of the white-on-white boxy designs you would normally see. I went for an 80's style terminal interface - something you might see in the 'Fallout' universe. To fit that aesthetic, I also wanted to make it as a dedicated terminal so the entire application is visible on the same single page the whole time.

I think I hit this by the broad strokes, and got to stretch some of my design skills. This is something I want to continue to develop.

### Back-end

I used two tables for the data. The main table contains all the information about a user such as first name, last name, email, and contact number. The second table just houses the three employment types of full-time, part-time and casual.

Each entity has it's own creation and updation DTOs, as well as CRUD mapping. In hindsight this was overkill, but good for my own practice.

## Features

- Full CRUD application, with the ability to add, list, edit and delete employees
- In-application logging on the bottom-left side console.
- Ability to filter employees by employment type and with a text filter.

## Known issues

- Toast notifications are a hangover of testing, and can be removed
- A persistent issue exists where adding an employee sometimes does not refresh the parent component (in the middle of the application).

## Future Goals

- Remove the toast notifications, as they are now redundant and do not fit the design aesthetic.
- Add full testing. Currently there's only some on the front-end and none in the back-end.
- More robust data validation on both the front and back-end.
- Host the project.

## Change logs

    Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

    21/03/2024
    Created the 'employees' table in the backend, with controller, service and repo. Yet to add the 'type' table and link it over, once that's hooked up it'll be time to move on to the front end side of the application.

    23/03/2024
    Backend completed, ran into some real trouble trying to link tables over - issue came from having FK column name and another column in the linked table as the same name.
    Started the front-end, service mappings completed
    Basic page layout completed
    Data successfully being called - will check all CRUD tomorrow but it's working in Postman so no problems expected.
    Majority of work from here on out will be styling and testing

    24/03/2024
    Added both contexts in to the front-end, feels like I'm really getting the hang of TypeScript.
    Added in icon library, and had a few more ideas to add to the project. A 'notes' section on the employee should be put in, but means I'll be messing around with the back-end again. Might implement it if I have time, but IRL it may be abstracted out to a HR application, where this could be seen as more of a 'time and attendance' app. Zod schema updated, needs a bit more work.

    25/03/2024
    Spent a lot of time today debugging the context calls interacting with the form, specifically with pre-filling it based on a selected user. The 'currently-employed' boolean is still not working correctly, and I want to reinforce the zod schema. Once that's done, it's onto implementing the delete functionality which should be easy. Started the styling today and found an appropriate font - there won't be too much visual jazz to this project so will hopefully have that completed tomorrow.

    26/03/2024
    Debugging a state management issue while using textboxes took several hours today, but it's fixed. The issue was well documented online, and seemed to be caused by preventDefault() and onChange interfered with checkboxes. Other than that, basically all styling of the app was completed today, and I created a quick function to load a bunch of dummy employees so a user can quickly see how the app works. I did come across an issue of select inputs not being stylable. It clashes with the theme I've chosen for the app, but from what I can tell online there are very, very few styling options for input elements - I don't think there's anything I can do except design my way around select elements in the future.

## What did you struggle with?

    Testing and validation remain difficult for me. This needs to be a focus on future projects.
