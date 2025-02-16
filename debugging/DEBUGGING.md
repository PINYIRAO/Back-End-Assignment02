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

## Scenario 2: when the request handling ends

-   **Breakpoint Location:** [File and line number]

Answer: line 24 in branchController.ts
-   **Objective:** [What you are investigating or trying to understand]

Answer: watch when the request handling ends 

### Debugger Observations

-   **Variable States:** [List key variables and their values]

Answer: I don't need to observe it in the scenario.
-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]

Answer: I don't need to observe it in the scenario.
-   **Behavior:** 

Answer:
After run "res.status(200).json(branches);", the response is generated and sent to the client.

### Analysis

-   What did you learn from this scenario?

Answer: res.json could be the end the request handling process.
-   Did you observe any unexpected behavior? If so, what might be the cause?

Answer: No for this moment.
-   Are there areas for improvement or refactoring in this part of the code?

Answer: No for this moment.
-   How does this enhance your understanding of the overall project?

Answer: I have learned that when is the time for request handling process ending.


## Scenario 3: when query parameters not provided, what would happen when get their values?

-   **Breakpoint Location:** [File and line number]

Answer: line 29 in employeeController.ts
-   **Objective:** [What you are investigating or trying to understand]

Answer: watch the parameters default value when not provided

### Debugger Observations

-   **Variable States:** [List key variables and their values]

Answer: when I sent a request only providing department parameter in query, I got the variable values through the code
"const { department, branchId }: EmployeeQueryParams = req.query;":
department: IT
branchId: undefined
-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]

Answer: I don't need to observe it in the scenario.
-   **Behavior:** 

Answer:
When the parameter not provided in query, it would be set as the default value undefined

### Analysis

-   What did you learn from this scenario?

Answer: how to deal with query parameter.
-   Did you observe any unexpected behavior? If so, what might be the cause?

Answer: No for this moment.
-   Are there areas for improvement or refactoring in this part of the code?

Answer: No for this moment.

-   How does this enhance your understanding of the overall project?

Answer: I have learned that the paramter would be undefined when not provided which could let me how to defined the type in TS project.
