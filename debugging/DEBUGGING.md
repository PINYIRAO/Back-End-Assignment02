# Debugging Analysis

## Scenario 1: track the employee validation Joi schema being created

-   **Breakpoint Location:** [File and line number]

Answer: line 13 in employeeValidation.ts
-   **Objective:** [What you are investigating or trying to understand]

Answer: Check whether it works to apply method-type based judgement during schema creation.

### Debugger Observations

-   **Variable States:** [List key variables and their values]
Answer: 
variable name: method
variable value:
"POST"

-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]
Answer: I don't need to observe it in the scenario.

-   **Behavior:** 
Answer:
When I send a post method, it shows the judgement works.

### Analysis

-   What did you learn from this scenario?
Answer: I could combine the condition judgement to create more simple code to meet the business requirements.

-   Did you observe any unexpected behavior? If so, what might be the cause?
Answer: Yes. When I started the debugger in vscode, I found the code would stop at the breakpoint. But at that time, I sent no request. It didn't make sense. When I looked into it, I found that in route configuration, I configured the validate middleware in the invocation immediately mode.

-   Are there areas for improvement or refactoring in this part of the code?
Answer: At this moment, there are no obvious areas for improvement or refactoring.

-   How does this enhance your understanding of the overall project?
Answer: The debugging scenario helped me gain a deeper understanding of function invocation and reference.

## Scenario 2: when the document couldnot be found while trying to delete it
-   **Breakpoint Location:** [File and line number]
Answer: line 165 in firestoreRepository.ts

-   **Objective:** [What you are investigating or trying to understand]
Answer: the process mechanism when there is no specific document in firestore 

### Debugger Observations
-   **Variable States:** [List key variables and their values]
Answer: 
variable name: docSnap
variable value:
there is an exists property in docSnap, when the docSnap has no content, it would be false

-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]
Answer: I don't need to observe it in the scenario.

-   **Behavior:** 
Answer:
When we query a document by its specific ID and the document is not found, we can use the DocumentSnapshot.exists property to determine whether the document exists or not.

### Analysis
-   What did you learn from this scenario?
Answer: how to judge if there is a document has the specific id

Answer: No for this moment.
-   Are there areas for improvement or refactoring in this part of the code?
Answer: No for this moment.

-   How does this enhance your understanding of the overall project?
Answer: when no documents match the query conditions, Firestore does not raise an error. We need to handle this case manually and raise an error by ourself if we want to provide a user-friendly experience.


## Scenario 3: Watch how the error-handling middleware function handles errors when a document does not exist

-   **Breakpoint Location:** [File and line number]
Answer: line 56 in errorHandler.ts

-   **Objective:** [What you are investigating or trying to understand]
Answer: watch the error object handled and the process of error handling

### Debugger Observations
-   **Variable States:** [List key variables and their values]
Answer:
variable: err,
value:
code:"DOCUMENT_NOT_FOUND"
name:"RepositoryError"
statuscode:404
message:"Document not found in collection employees with id po8ih8rM3mHBRr2oFyrZ"

-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]
Answer: I don't need to observe it in the scenario.

-   **Behavior:** 
Answer:
When the program throws an error, the error handler takes over and provides the user with a meaningful response, including error details.

### Analysis

-   What did you learn from this scenario?
Answer: I learned when the error handler is triggered, and how it will end the request processing.

-   Did you observe any unexpected behavior? If so, what might be the cause?
Answer: No for this moment.

-   Are there areas for improvement or refactoring in this part of the code?
Answer: No for this moment.

-   How does this enhance your understanding of the overall project?
Answer: I have learned that the error handler can provide the user with a consistent and meaningful response, depending on whether the program itself provides meaningful error messages and a consistent error type definition.
