# CAnalytics features

![CAnalytics user interface](./img/interface.png)

We developed a collaborative information analysis tool, CAnalytics, to support teams of analysts in identifying, visualizing, integrating and assessing facts from multiple sources. The design is informed by our paper prototype studies, where we examined  communication patterns and team's spontaneously created artifacts when teams were engaged in a complex crime scenario. We also take suggestions from empirical studies conducted by Chin et al. [@Chin2009] and Kang and Stasko [@Kang2011] when making design decisions.  

## Annotation for data modeling
CAnalytics supports evidence modeling through annotation. In the document view users can select and highlight snippets of information and annotate them as a type of entity such as a person, location, events, etc., or as a relationship between entities. Unlike in other entity-based systems such as [@Bier2010, @Stasko2008], in which natural language processing techniques are employed to extract and model entities automatically, we use annotation to allow analysts to manually create evidence objects of interest. Authors of the entity-based systems themselves admitted that natural language processing is not accurate enough to identify all entities correctly. But there are other problems with automatic data modeling. For example, NLP is weak at modeling relationships between entities, mostly limited to "cooccurrence" in the same document, usually too superficial to be useful in hypothesis development. And perhaps the most problematic is that fact the NLP treats all pieces of information equally with no awareness of the problem at hand. We posit that information analysis is a progressive process, wherein analysts place varying priority on evidence depending on how they frame the problem. Manual annotation allows for greater user control; users can decide their own information of interest and granularity that best suits their ad-hoc analytic needs.

Users can add attributes to the annotated object, e.g. add time attribute in event, coordinate in location. Thus each annotation is a data object that embeds information of evidence entity. Users can also make reference to other objects in the attribute; for example, users can add people objects involved in an event. A few utilities are available to facilitate data input, e.g. geocoding address, auto-completion of existing data objects. Annotation also records the source where a data object was created---users can always re-access the data objects in its original context of the problem document, a critical requirement emphasized by \cite{Chin2009}.

In sum, users accomplish three things when creating an annotation: 1. highlight critical information in the document; 2. model data objects in preparation for later visualization and analysis; 3. connecting data object with source of document for evidence provenance. Annotations are synchronized in real time for collaborative evidence collection.


Annotations are immediately shared with collaborators. 
Our tool supports real-time collaborative editing, similar to the Google Tools. Users can open several concurrent editors to collaboratively edit multiple annotations and events. User created data objects are immediately shared within a team. As far as we know, this tool is the first to support multi-concurrent editing, which we think can improve fine grain coordination and awareness in complex collaborative work. The tool also includes a notepad, in which users can collaboratively compile a document, similar to Google Doc.

CAnalytics supports information analysis by automatically organizing user created objects in multiple coordinated views, including table, timeline, map, and node-link graph---tools that are most frequently used in information analysis tasks \cite{Carroll2013}. Each visualization provides a way to schematize data: timeline organizes data by time, map by location, node-link graph by relationships, and table by attributes. Figure \ref{fig:canalytics} shows an example of the multiple visualizations in our tool: when an annotation is created in the document module, with information about time, location, participants, and their relationships, a new event is created in the timeline module, a new location is created in the map module, and new people are created in the node-link graph module with a typed edges representing relationships among the people (or new edges are added to existing nodes).

Different views are coordinated; that is, when users do a filter on a piece of information in one views, related information in other views will be highlighted. Filtering on different views/schematization provides different analytic strategies; e.g. timeline offers filtering by time, map offers filtering by location, and node-link graph offers filtering by related data objects.

Based on default view of evidence, users can continue to schematize it. For example, users can drag the nodes in the node-link graph to make clusters. Users can also create a relationship in the graph by drawing a link between two nodes and input relationship attributes.

\subsection{Awareness features for coordination}

CAnalytics has a number of awareness features, including real time data sharing, a notification system,  a design we named ``tool coordinator'', a message tool, and a history tool. As mentioned before, annotations and data objects created by collaborators are immediately shared. Annotations will be highlighted in the exact position on teammate's document view, indicating which part of the document teammates are working on. Data objects will be visualized in multiple views together with existing data, keeping latest gathered information available to the team. A notification system sends individual's actions to the team, in the form of a text box in the top right corner of the workspace, keeping the team up to date with collaborator's actions. To reduce notification noise, instead of broadcasting whatever actions, we define a set of rules to determine which actions will be notified. For example, the action that creates an entity will be notified, but that re-layouts a view will not. Tool coordinator refers to a small indicator on the tool menu bar, suggesting who is working on the tool.

The message tool enables real time team communication. Chat history is also persistent for traceability. We design a ``mention'' feature---users can refer to created entities and relationships in the workspace when they are composing a message. We believe this will improve communication efficiency because analysts are often observed to mention critical information entities in face-to-face discussion. \cite{Carroll2013}. When the message receiver hovers over the object, attributes of the object shows up, ensuring that the team is talking about the same thing (as \cite{Carroll2013} observed, one frequent collaboration breakdown is misunderstanding of the object in discussion).

The system maintains a persistent log of time-stamped individual activities. A history tool presents who did what to which object at when. Together with the notification system, users who work synchronously can be informed of others' activity continuingly, and be aware of the bigger picture of team's activity; users who work asynchronously will be able to use the history to reconstruct their work status and become aware of changes beyond the point of their last interaction.

Different from awareness features developed in existing systems which are simply read-only text, the awareness information in our system is closely integrated with the analytic environment. For example, data objects that are changed and presented in the history view are clickable links. Users can hover over to read detailed attributes and click to do a filter on the object.


The system also includes a simple notepad implementation to support collaborative hypothesis generation. We integrate Etherpad \footnote{Etherpad url}, an open sourced collaborator editor much like Google Doc, for teams to compose their hypotheses. Users can insert tables (e.g. an ACH matrix) and images (views of evidence schematization). However, by the time of this study, we have not developed any advanced features specific for the task of information analysis, and usage of the editor for hypothesis generation is not the emphasis of this paper.








---------------

## Collaborative evidence identification

Our tool supports the identification and modeling of evidence through semantic annotation. Users can highlight critical information about entities such as people, location, and events, as well as relationships among them, directly over the document view.


We use annotation to enable human analysts to construct their data model in the analysis. Unlike in the entity-based systems (e.g. Entity Workspace and Jigsaw [@gorg2015]), we use manual annotation for entities of interest. While algorithms for named entity recognition have improved significantly, developers of the entity-based systems (e.g. @gorg2015]) admitted that the accuracy of automatic entity extraction is not sufficient to support human analysis. Besides, relationships identified by algorithms are limited to co-occurrence of entities in the same document, whereas meaningful relationships implicit in documents that are of more importance to analysts are not possible. Manual annotation allows for greater user control, allows more integrated source data objects to be identified, and avoids the user problems associated with automatic identification of disaggregated people, locations and times [@Bier2006a].

- Greater control. Users can decide their own information granularity and information interest that best suits their ad-hoc analytic needs. For example, analysts can collect only high-level events when they first go through the documents. In a later stage when they are investigating a specific event, they can annotate further details.
- Annotate relationships. Analysts are able to annotate relationships that are implicit in the document. For example, a person might be a member of an organization, and an event involves XXX people. These relationships are critical to make the right hypothesis, and are beyond simple co-occurrence that can be identified by algorithms.
- Semantic annotation. By 'semantic' annotation, we mean that the annotation is not only about highlight and note, but with attributes of data object that is to be modeled. The system automatically generates input fields for appropriate attributes according to the entity types. For instance, an event has time, location, and people involved, whereas a person has job and gender attributes. Users can also manually add other attributes. The system provides a few utilities to facilitate data input, for example, place name and coordinates are auto completed as users type in a location, and existing data objects are selectable as users try to cross refer to them.

When users are explicitly creating an annotation, they are also implicitly creating a provenance of the modeled entity--- annotation records the source where a data object was created. As observed in Carroll et al.'s [@Carroll2013] empirical study, while integrating information in a visual artifact helps sharing and pooling information with teammates, the action also removes problem information from its original context. Participants often forget what an entity refers to and why it is positioned in the artifact. Entities in CAnalytics are linked back to annotations, which in turn are linked to locations of documents where they were created. Users can always re-access the data objects for provenance, a critical requirement emphasized by Chin et al. (2009).


## Collaborative evidence schematization


## Collaborative hypothesis generation

Insofar as stating unknowns is a difficult task, at least making what analysts do know more explicit and the assumptions that they made increases a large amount of transparency into their analysis

### References
Stasko, J., Görg, C., \& Spence, R. (2008). Jigsaw: supporting investigative analysis through interactive visualization. Information Visualization, 7(2), 118–132. doi:10.1057/palgrave.ivs.9500180
