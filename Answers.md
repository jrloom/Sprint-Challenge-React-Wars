# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library for JavaScript that creates a virtual DOM instead of interacting directly with the DOM.  

It is declarative, making code "more predictable and easier to debug." It also allows for more user interactivity without performance hits because it doesn't have to update and re-render the entire DOM.

It is component-based, and components manage their own states.

It is scalable, and can get a website or app built in little time.


2. What does it mean to think in react?

It means reacting to user input, making changes based on that input, and not changing what doesn't need to be changed.


3. Describe state.

State is a store of data used to update a component when a user interacts with it.


4. Describe props.

Props send data to components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that effects somethign outside the scope of a function. An API call, for instance, has to communicate with a third party. That request creates logs, etc - all outside of the function's scope.

We can use the useEffect() hook to sync side effects to state or prop changes.
