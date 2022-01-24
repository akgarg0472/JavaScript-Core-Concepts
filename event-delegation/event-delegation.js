/*
    Event delegation is the mechanism to handle UI events using a single event handler rather than using for each child using the event bubbling.
    In event delegation, we bind a single event handler to parent element and using the same, we handles the events of it's childs whenever it happens.
    To use event delegation, it is important to note that the event type should be same for each child. For example, click handler. We can use target value of event to determine which child element has triggered the event.

    Advantages:
        - Less memory consumption since all child have a single event handler.
        - Less lines of code
        - More readable code
        - Improves performance of webpage
    
    Disadvantages:
        - Not all events are bubbled
        - if stopPropagation() is called for a child, then it breaks the event delegation
 */

const categories = document.getElementById("categories");
categories.addEventListener("click", handleClick);

function handleClick(e) {
  console.log(`One of the category is clicked: ${e.target.id}`);
}
