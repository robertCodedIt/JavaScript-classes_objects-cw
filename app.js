// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
//  Create a function that prints all properties. Create an instance of the class and use the function.
   class GitRepo{
constructor(userName,fileName,descriptionOfRepo,code)
    {
this.name = userName;
this.file = fileName;
this.description = descriptionOfRepo;
this.code = code;
    }
        }

        // ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. 
// Create a method to change the rating 
// and another one to change the yearReleased properties using prompt.
//  Create an instance of the class and use the two methods you created.








    let git = ( ) =>
        {
            let newGit = new GitRepo('@RobertACreatedIt','app.js','this is my code for class','x = 2x+34');
       
            console.log(newGit)
        }
let movie = ( )=>
    {

    }
let main = ( ) => 
    {
        git();
        movie();
    }  
    main();
