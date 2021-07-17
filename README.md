# hw9-team-profile-generator

Simple application accepting user input to build and generate an html file for web display of individual project team members.

Users enter information for a team manager; one or more engineers; and one or more interns. All employee types are stored as objects with name (empname), ID (id), and email address (email) keys.

In addition, each employee type carries one additional key unique to that type. The manager will be prompted for an office number, while engineers will enter a GitHub user name and interns the name of a school they attend.

When users run "node index.js," the function "init" is called, displaying a welcome message ("Hello! Welcome to Team Builder 5000, a product of FRUOsoft.") before calling the first input function, "askForManagerInfo." 

First, askManagerInfo runs through the four question prompts and then loads the answers into the global constant "manager." Since there will be only one team manager, the array values are then passed along to a global constant called "sectionManager," which is the html text we want passed into the final page. Template literals allow us to put the correct value in each field.

Since there may be more than one of each remaining employee type (engineers and inters), we next call the function "addAnEmployee," which is a list prompt. The choices are to add an engineer, to add an intern, or to finish adding employees.

If users choose to add an engineer, the prompts for those data types then appear and the answers are pushed into a global variable called "engineer" = pushed because, since there may be two or more of each type, we don't want to overwrite other data already existent.

After users finish entering the information for each engineer, the code again returns to "addAnEmployee" to prompt for another user entry. 

The same process applies to adding interns, with the code then returning to the input prompt.

Each result generates a new engineer or intern card for each new entered employee, appending the resulting html code to either sectionEngineer or sectionIntern depending on type of employee inputted.

When the user indicates in the "addAnEmployee" prompt that team member entry has been completed, the application then appends all the necessary html placeholders together in a master variable. This variable is then passed through a toString, the result of which throws to fs.writeFile.

The html file is then generated, and the user gets a farewell screen thanking them for use.


