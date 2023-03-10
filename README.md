# IT5007 Tutorial Setup and Submission

* Download the docker image from https://mynbox.nus.edu.sg/u/n-nIx4ppyOqN6cjj/ac7a0cb7-3c49-4b0d-91c1-8deaf0244862?l
* For Windows, navigate to the download folder, and launch powershell and import the image as follows
```docker load -i docker_image_mongo.tar```
* Launch a container from this image using
```docker run -p 127.0.0.1:3000:3000/tcp --name tutorial4 -dit it5007_tutorial:t4 bash```
* Use VSCode (with Docker plugin installed) to i) start the container and ii) attach shell to the container.
* Download the skeleton code for the tutorial
  * Using Git clone: 
    - ```cd /home```
    - $ ```git clone <your own github classroom repository url for T4> it5007-tutorial4```

# Working on the project
* ```cd /home/it5007-tutorial4/``` from VSCode and work on the problem.
* As usual, the first step in any newly downloaded repository is to run ```npm install``` to install dependencies.
* Compilation: The code may not compile when you say ```npm run compile```. This is because, the code is incomplete. [Hint: If you want to test out a small code change you have added, comment all incomplete functions and try to compile. This may not always work but it is worth the try.]
* Execution: As usual, you can run the code using ```npm start```. The code is not yet complete/compiled. So, you may need to add some code before you can execute the code.

# MongoDB Specific Commands
* MongoDB needs to be started in Docker container before you can test T4 code. 
* You can start MongoDB server (mongod) using the command: ```systemctl start mongod```
* How to check if MongoDB server is running: ```ps aux | grep mongod```. This will return the details of the running MongoDB server process. For example: ```mongodb    428 19.0  0.8 1517420 112404 ?      Ssl  02:57   0:00 /usr/bin/mongod --config /etc/mongod.conf```.
* Testing with MongoDB client: ```mongo```. You can try out some of the commands taught in the Lecture.
* Initializing the project DB with initial traveller list. The code for this needs to be written by the student in scripts/init.mongo.js (Q1). Once this is written, you can test it out using the command: ```mongo tickettoride scripts/init.mongo.js```.


# IT5007 Tutorial Submission
* Commit your changes. Push your changes. Commit will create a new version corresponding to your code changes. Push will push it to the remote repository for TAs and Instructor to evaluate. You miss either step, your code will not be available for evaluation!
* Git commit should be used for committing your code. ```git commit -am "relevant message for commit"```. In this command, -a option adds the modified files to the list of files to be committed and -m option allows you to specify a commit message (e.g., "added blacklist feature").
* Push the code to your PRIVATE github classroom repository.
  * Navigate to /home/it5007-tutorial4. 
  * You can check if origin is correct with the following command: ```git remote -v```. Make sure that the url listed is your own T4 url.
  * To push the changes: $```git push origin```
  * If you are coding in a branch use the following command instead: $```git push -u origin <mybranchname>```
  * For the submission, create a file with the following contents:
    - Github repo link and branch name.
    - Steps to set up your application after cloning/downloading the repository (including steps to add more packages if needed)
    - How to launch your application
    - mention all features you have implemented.
