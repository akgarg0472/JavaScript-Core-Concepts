/*
    By default, if an event is occured on the parent element, then it propagates towards its all childs in sequence. This phenomena is known as "Event Capturing" (and is disabled by default).
    Similarly, if a child element triggeres an event, then the same event propagates towards its all parent elements in sequence. This phenomena is known as "Event Bubbling".

    We can control the event propagation by passing third boolean argument to addEventListener method. This argument handles the event capturing behavious. By default, this argument is false indicating that the events will be bubbled out, they will not be captured.

    event.stopPropagation() method can be invoked to stop the propagation of events.



                                    ↓         GREATGRANDPARENT         ↑
                                    ↓                                  ↑
                                    ↓           GRANDPARENT            ↑
                            (Event Capturing)                   (Event Bubbling)
                                    ↓             PARENT               ↑ 
                                    ↓                                  ↑
                                                  CHILD                 
*/

document.addEventListener("click", () => {
  console.log("Document click handler");
});

document.getElementById("greatgrandparent").addEventListener("click", () => {
  console.log("Great grandparent click handler");
});

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent click handler");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent click handler");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child click handler");
});
