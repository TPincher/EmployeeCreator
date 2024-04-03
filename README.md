# EmployeeCreator

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: Github Workflow Badges}
Demo & Snippets

    Include hosted link
    Include images of app if CLI or Client App

Requirements / Purpose

    MVP
    purpose of project
    stack used and why

Build Steps

    how to build / run project
    use proper code snippets if there are any commands to run

Design Goals / Approach

    Design goals
    why did you implement this the way you did?

Features

    What features does the project have?
    list them...

Known issues

    Remaining bugs, things that have been left unfixed
    Features that are buggy / flimsy

Future Goals

    What are the immediate features you'd add given more time

Change logs

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

What did you struggle with?

    What? Why? How?

Licensing Details

    What type of license are you releasing this under?

Further details, related projects, reimplementations

    Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
    If it's an API, is there a client app that works with this project? link it
