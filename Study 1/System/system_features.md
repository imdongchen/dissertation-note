# CAnalytics Features

## Collaborative evidence identification

A critical challenge for information analysts is building an adequate preliminary data model, and insuring that the data model is employed effectively in hypothesis development and evaluation. This is an open challenge. Standard methods often do not support it at all; for example, Analysis of Competing Hypotheses (ACH) assumes that data has been modeled, and that relevant evidence can be adduced appropriately to various hypotheses, but provides no structured support for either.

In Stasko et al. (2008)'s report of their design of Jigsaw, one requirement they learnt is dynmaic data modeling for visualization:

> "In a workshop of intelligence analysis professionals, 46 working groups generated a list of the top 10 needs for intelligence analysis tool development. One item was ‘Dynamic Data Processing and Visualization’ that was further elaborated as follows:

> ‘Solutions are needed that transcend what is typically described as ‘visualization’ -- _in contrast to a predominantly ‘passive’ relationship between the system that displays complex visualizations and the analyst who still must digest and interpret them. What is needed is a much more interactive and dynamic relationship in which the analyst is better able to explore the information within the visualization_.’" (Stasko et al. 2008, pp.130-131)

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
