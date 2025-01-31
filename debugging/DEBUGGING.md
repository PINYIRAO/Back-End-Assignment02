# Debugging Analysis

## Scenario 1: create a new employee

-   **Breakpoint Location:** [File and line number]
Answer: line 71 in employeeService.ts
-   **Objective:** [What you are investigating or trying to understand]
Answer: watch how new employee created  

### Debugger Observations

-   **Variable States:** [List key variables and their values]
Answer: 
variable name: newEmployee
variable value:
{
  id: 36,
  name: "pinyi",
  position: "software developer",
  department: "IT",
  email: "PINYI.R@example.com",
  phone: "123-456-7890",
  branchId: 1,
}
-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]
Answer: I don't need to observe it in the scenario.
-   **Behavior:** 
Answer:
The application create a new employee with the values provided in the request body and assign a unique epmloyee id for it.

### Analysis

-   What did you learn from this scenario?
Answer: destructure the object could make the code more simple and readable.
-   Did you observe any unexpected behavior? If so, what might be the cause?
Answer: No for this moment.
-   Are there areas for improvement or refactoring in this part of the code?
Answer: At this moment, there are no obvious areas for improvement or refactoring.
-   How does this enhance your understanding of the overall project?
Answer: I found that if there is extra properties not related to the employee, it also could be stored in the employee data, so we need data validation for request body or model validation when create new employee.

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
