# Todo List

### Difficulty

Beginner

### Instructions

The starting template for the application can be found inside `src/index.html`.

The task is to write a simple todo list application that:

- Allows the user to add a task.
  - The task will be added to the existing list of tasks and has the state of active.
  - An active task will have a **Complete** button and a **Delete** button.
- Allows the user to mark am active task as complete.
  - The task will be decorated with a strikethrough.
  - The **Complete** button will not be shown, instead show **Uncomplete**.
- Allows the user to mark a completed task as active.
- Allows the user to delete a task.
  - The task will be removed from the list of existing tasks.

The markup for an active task and a completed task is being shown in `index.html`, you are required to remove these task templates after completing the applicaton.

You are not allowed to use any JavaScript MVC framework / library (e.g. React, Angular, Backbone). The application has to be built with jQuery or vanilla JavaScript. Utility libraries (e.g. Underscore) is allowed.

### Bonus

1. Persist the todo list state across sessions using a storage option of your choice.
2. Show confirmation prompts before removal of tasks.
3. Allow editing of text of active tasks.
4. Show a count of total tasks / active tasks / completed tasks.
5. Add a button to remove all completed tasks.
6. Tests?
