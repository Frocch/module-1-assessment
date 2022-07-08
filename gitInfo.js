/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a version control system. It tracks changes you make in the files so you have a record of what has been done, and saves previous versions in case you need to go back to a previous version or as backup. It also allows changes by multiple people to be merged into one source, making collaboration easier."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = "GitHub is a website, where developers can store, manage, and track changes in code in a remote repository. This means the code is stored in the cloud off of their their local systems, so in case anything bad happens no progress is lost, or at least it's minimal. It also gives developers the ability to share their code and collaborate with team members and/or anybody on github by having the ability to upload and download their code for collaboration or review. "

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

const gitInitDefinition = "git init is the command to initialize Git on the current repository where the command is written. This will tell Git to start tracking all files in the repository."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition = "git clone is a command for Git, which is used to clone an existing local or remote repository to a new directory at another location."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

const gitStatusDefinition = "git status is a Git command that displays the state of the working directory and the staging area, it lets you see what changes have been staged, which haven't, and which files aren't being tracked."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition = "git add is a Git command that updates the index using the current content found in the working tree, to prepare the content staged for the next commit. "

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition = "git commit is a Git command, it captures a snapshop of the project's currently staged changes. These committed changes basically become a version of a project that you can go back to at any time."

const gitCommitCode = 'git commit -am "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = "git push is a Git command that basically uploads your local repository content to a remote repository. This is how you transfer commits from your local repo to a remote repo."