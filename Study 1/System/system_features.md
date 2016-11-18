# CAnalytics Features

## Collaborative evidence identification

A critical challenge for information analysts is building an adequate preliminary data model, and insuring that the data model is employed effectively in hypothesis development and evaluation. This is an open challenge. Standard methods often do not support it at all; for example, Analysis of Competing Hypotheses (ACH) assumes that data has been modeled, and that relevant evidence can be adduced appropriately to various hypotheses, but provides no structured support for either.

In Stasko et al. (2008)'s report of their design of Jigsaw, one requirement they learnt is dynmaic data modeling for visualization:

> "In a workshop of intelligence analysis professionals, 46 working groups generated a list of the top 10 needs for intelligence analysis tool development. One item was ‘Dynamic Data Processing and Visualization’ that was further elaborated as follows:

> ‘Solutions are needed that transcend what is typically described as ‘visualization’ -- _in contrast to a predominantly ‘passive’ relationship between the system that displays complex visualizations and the analyst who still must digest and interpret them. What is needed is a much more interactive and dynamic relationship in which the analyst is better able to explore the information within the visualization_.’" (Stasko et al. 2008, pp.130-131)

Our tool supports the identification and modeling of evidence through semantic annotation. Users can highlight critical information about entities such as people, location, and events, as well as relationships among them, directly over the document view.


We use annotation to enable human analysts to construct their data model in the analysis. Unlike in the entity-based systems (e.g. Entity Workspace and Jigsaw), we use manual highlighting for entities of interest.This allows for greater user control, allows more integrated source data objects to be identified, and avoids the user problems associated with automatic identification of disaggregated people, locations and times (Bier et al., 2006a).

- Greater control. Users can decide their own information granularity and information interest that best suits their ad-hoc analytic needs. For example, analysts can collect only high-level events when they first go through the documents. In a later stage when they are investigating a specific event, they can model further details.
- Organize objects. Users will be able to organize data objects with respect to persons, locations, and date/times.
- Semantic annotation. By 'semantic' annotation, we mean that the annotation is not only about highlight and note, but with attributes of data object that is to be modeled. Users can manually add attributes and metadata to annotations associated with data objects. The system provides a few utilities facilitate data input, e.g. geocoding and reverse geocoding for efficient location input, auto-completion of existing data objects for data association.

When users are explicitly creating an annotation, they are also implicitly creating a provenance of the modeled entity--- annotation records the source where a data object was created. Users can always re-access the data objects in its original context of the problem document, a critical requirement emphasized by Chin et al. (2009).


## Collaborative evidence schematization


## Collaborative hypothesis generation

Insofar as stating unknowns is a difficult task, at least making what analysts do know more explicit and the assumptions that they made increases a large amount of transparency into their analysis

### References
Stasko, J., Görg, C., \& Spence, R. (2008). Jigsaw: supporting investigative analysis through interactive visualization. Information Visualization, 7(2), 118–132. doi:10.1057/palgrave.ivs.9500180
