# Debugging Analysis

## Scenario 1: check if I need to deal with the "\\n"

- **Breakpoint Location:** [File and line number]
  Answer:
  line 23 in firebaseConfig.ts

- **Objective:** [What you are investigating or trying to understand]

Answer:
check if I need to replace the "\\n" with "\n" while parsing the serviceaccount env.

### Debugger Observations

- **Variable States:** [List key variables and their values]
  Answer:
  When I using the dotenv to get the process environment variables, in the debug console terminal,
  I used the "console.log(FIREBASE.PRIVATE_KEY)" to check output to see if they break into new lines confirm that the newline character still has taken effect.

- **Call Stack:** [Summarize the function sequence leading to the breakpoint]
  Answer:
  I don't need to observe it in the scenario.

- **Behavior:**
  Answer:
  The output string break into new lines, and the server could start normally

### Analysis

- What did you learn from this scenario?
  Answer: I couldn't see the "\\n" in the .env file and I checked after parsing by dotenv, the "\n" characters still are effective, so I think I maybe don't need to replace the "\\n" with "\n". Maybe in the following steps, when I try to store the private key in the GitHub credentail it doesn't work. I will keep observing on this spot.

- Did you observe any unexpected behavior? If so, what might be the cause?
  Answer: At this moment, I didn't.

- Are there areas for improvement or refactoring in this part of the code?
  Answer: At this moment, there are no obvious areas for improvement or refactoring.

- How does this enhance your understanding of the overall project?
  Answer: The debugging scenario helped me gain a deeper understanding of dotenv parsing the string containing "\n".

## Scenario 2: I want to render some static resources, but it doesn't work

- **Breakpoint Location:** [File and line number]
  Answer: line 56 in app.ts

- **Objective:** [What you are investigating or trying to understand]
  Answer: the mechanism about how the express render static resources.

### Debugger Observations

- **Variable States:** [List key variables and their values]
  Answer:
  variable name: "\_\_dirname"
  variable value:D:\\rrc_polytech\\courses\\Term3_3018_Back-End_development\\assignment\\Back-End-Assignment05\\src

- **Call Stack:** [Summarize the function sequence leading to the breakpoint]
  Answer: I don't need to observe it in the scenario.

- **Behavior:**
  Answer:
  When I try to get my static resource, the express doesn't give me the right feedback.

### Analysis

- What did you learn from this scenario?
  Answer: learned about the "\_\_dirname" value and how to use path.join to concatenate the path.

Answer: No for this moment.

- Are there areas for improvement or refactoring in this part of the code?
  Answer: No for this moment.

- How does this enhance your understanding of the overall project?
  Answer: Some static resources can be easily served by the express framework..

## Scenario 3: Watch how the error-handling middleware function handles errors when a document does not exist

- **Breakpoint Location:** [File and line number]
  Answer: line 56 in errorHandler.ts

- **Objective:** [What you are investigating or trying to understand]
  Answer: watch the error object handled and the process of error handling

### Debugger Observations

- **Variable States:** [List key variables and their values]
  Answer:
  variable: err,
  value:
  code:"DOCUMENT_NOT_FOUND"
  name:"RepositoryError"
  statuscode:404
  message:"Document not found in collection employees with id po8ih8rM3mHBRr2oFyrZ"

- **Call Stack:** [Summarize the function sequence leading to the breakpoint]
  Answer: I don't need to observe it in the scenario.

- **Behavior:**
  Answer:
  When the program throws an error, the error handler takes over and provides the user with a meaningful response, including error details.

### Analysis

- What did you learn from this scenario?
  Answer: I learned when the error handler is triggered, and how it will end the request processing.

- Did you observe any unexpected behavior? If so, what might be the cause?
  Answer: No for this moment.

- Are there areas for improvement or refactoring in this part of the code?
  Answer: No for this moment.

- How does this enhance your understanding of the overall project?
  Answer: I have learned that the error handler can provide the user with a consistent and meaningful response, depending on whether the program itself provides meaningful error messages and a consistent error type definition.
