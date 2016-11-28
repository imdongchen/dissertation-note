# System Architecture

<!-- TODO: explain the react analogy -->

A critical challenge of collaborative tools is to keep synchronicity of states of systems across users. A user interaction changes system states. For example, when the user creates an entity, the data pool changes; when the user reconfigure the network graph, the view state changes. A key enabler of team awareness is to ensure teammates are utilizing a synchronized state of the system. When one user changes the state of his/her system, the change should also be applied to the state of his/her collaborator's system. If the system goes out of synchronization, a collaboration breakdown would occur [@cite_something]
<!-- FIXME cite the paper that people had coordination problem when reading different page-->

Maintaining state synchronicity is technically challenging for groupware developers, especially when the tool affords complex user interactions. A common implementation of user interaction is event-driven approach: An action performed by the user is translated into an event, and makes changes to one or more user interface components. However, this approach could be difficult to maintain in a distributed system. An event can cause change to a local UI component, as well as be broadcast to collaborator's system and cause change to a remote UI component. In turn, the change of a component could cause changes to other local components and remote components. To some extent, the groupware developer no longer understands what changes a component, and the state of the groupware would become out of control.

We propose a state-centered approach to overcome the issue. As Figure ?? shows, an event manager takes control of all events, whether they are local or remote events. The event manager dispatches events to different event handlers and makes changes to a central state manager. Whenever the state changes, the state manager sends a signal to related UI components, and the components make their own change accordingly.

<!-- TODO describe the event workflow; reuse of event? -->

![CAnalytics system architecture](../system/img/architecture.jpg)


