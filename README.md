# exercism-typescript

## Starting an exercise

1. Pick an exercise from: https://exercism.org/tracks/typescript/exercises.

2. Download the exercise locally via CLI. See the command in the right block on the exercise page.

3. Navigate to the exercise folder in your machine. Install all dev
   dependencies in package.json by running `yarn install` command.

4. Commit and push the start files to GitHub. Commit message should be as follows: `Started <exercise name> exercise`.

5. Find the stub file i.e. the main ts file (usually it's the file that has the name of the exercise). Write your solution there.

6. Test your solution by running `yarn test` inside the exercise directory. In the .test.js file some of the tests are excluded. Enable all of them by changing `xit` to `it`.

7. Once done, submit your solution by running `exercism submit <stub-file-name>.ts` command. Just to be clear, replace `<stub-file-name>` with the file name of your stub file.

8. Commit and push your solution to GitHub. Commit message should be as follows: `Solved <exercise name> exercise`.
