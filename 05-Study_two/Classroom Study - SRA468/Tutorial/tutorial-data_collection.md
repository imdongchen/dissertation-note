# CAnalytics Tutorial - Data Annotation

## What is CAnalytics?

## Follow step by step

1. Log in to CAnalytics [http://ca.ist.psu.edu](http://ca.ist.psu.edu) with your PSU credentials
2. CAnalytics is team-based, which means you have to join a team to start analysis in an intelligence case.
  3. In the real study case, one member in your team needs to enter Case `Training One` and creates a team name and pin.
  4. Other team members join the team in that case with the team credentials.
  5. For this tutorial case only, each of you will create your own team so that you can go through all the following steps yourself.
3. Open `Case` window to learn information about the case and your role
4. Open `Document` window
5. Start making annotaitons. You achieve two things by making an annotation:
  6. You create an entity or relationship, which structures your later analysis
  7. You preserve the context from which the entity/relationship was extracted, which will help your teammates and yourself to revisit the data source.
5. Create person entity `Jeff`, and put a note `victim`
6. Mouse over the annotation to see details
6. Create event `Theft 1` with involved person and time.
7. Create person entity `Lisa` and apply to all text `Lisa`
8. Delete the first annotation on `Lisa`, note that this does not delete the entity `Lisa`
9. Delete the second annotation on `Lisa` and choose `Delete All`. Note: deleting all annotations will archive the entity `Lisa`
15. Open `Person Table` window and restore the entity `Lisa` (or you can open history to restore the entity)
12. Create location `Rec Hall`
13. Modify the event `Theft 1` and add the location.


## Exercise

Create the following entities and relationships by making annotations on the document.

Entity  | Name  | Attribute
--|---|--
person  | Tom  |
Event  | Basketball game  | time (9-12pm), person (Jeff and Tom), location (Rec Hall)
Relationship  | teammate  | source (Tom), target (Jeff)
Event  | visit New York  | time (8/13-8/14), person (Lisa), location (New York)
Person  | Alex  |
Event  | lunch  | time (11-1pm), person (Alex and Baldric), location(IST)
Event  | debt due  | time (Aug 21), person (Baldric)
Event  | work  | time (10-1pm, every Friday, repeated), person (Jeff and Alex), location (starbucks)
Event  | money transfer  | time (2pm Aug 20), person (Baldric, Alex)


## Tips

1. Name entities and relationships descriptively and briefly. The names are what show in visualizations directly.
2. Two basic strategies might be useful when you making annotations.

  2.1 Read and annotate. Make annotations while you read through the documents

  2.2 Search and annotate. Use browser search (cmd/ctrl + F) to find text of your interest, and annotate that text.
3. The name of entities should be unique. Give different names to different entities (e.g. theft 1, theft 2)
4. Not all information is related to your question. Collect only the data that matters to your team. For entities your team created that are no longer important, feel free to archive them to reduce your data size, and you can always restore them if needed.
