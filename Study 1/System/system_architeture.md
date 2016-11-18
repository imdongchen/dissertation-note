# System Architecture

<!-- TODO: explain the react analogy -->

A common implementation of user interaction is event-based. An action performed by the user is translated into an event, and makes changes to one or more user interface components. In a distributed system, however, things become more complicated. The event could be from a local action (performed by the user), or from a remote action (performed by a collaborator). An event can change a component, and in turn the component could cause change to another component. 
