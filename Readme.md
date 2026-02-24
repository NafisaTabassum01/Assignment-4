1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    
    ANS: getElementById - Returns single element by ID.

     getElementsByClassName - select elements that have a specific class name or a set of class names. It returns a live HTMLCollection.

   querySelector - Is used to select and return the first element that matches a specified CSS selector within the document.

   querySelectorAll-select all elements within a document that match a specified group of CSS selectors.It returns a static NodeList object.

  2. How do you create and insert a new element into the DOM?

ANS: 
step-1:Create the element using the document.createElement() method.

step-2:Add content and attributes to the new element using properties like textContent, innerHTML, setAttribute().

step-3:Append the new element to a parent element via getElementById() or querySelector().

3. What is Event Bubbling? And how does it work?

ANS: Event bubbling is when an event on a child element moves up through its parent elements and triggers their event listeners, starting from the child and going up to the root.

 4. What is Event Delegation in JavaScript? Why is it useful?

ANS:Event delegation is a technique where a parent element handles events for its child elements.It is useful because it reduces memory usage and works for dynamically added elements.   

5. What is the difference between preventDefault() and stopPropagation() methods?

ANS: preventDefault() -stops the browser's default action for an event, while
     stopPropagation() - Stops the event from moving up to parent elements.
