# Result

We first report descriptive data about usage and use experience of CAnalytics.
We then report details on the aspects of team behavior and awareness, through
methods of artifact analysis, log analysis, and qualitative analysis of the
questionnaire.

## Usage overview

 Over the week, teams created 1805 entities and 1529 relationships in total. The
 number of entities teams created ranged from 24 to 223 (M=82, SD=39.9), and the
 number of relationships ranged from 7 to 237 (M=69.5, SD=51.0). The large
 variety of modeled data was related to team strategy, which will be detailed
 later.

![Survey responses (box shows Q1-Q3 and median; whiskers show maximum and
minimum)](./survey/survey_boxchart.jpg){#fig:survey}

Overview of the survey items indicates that students rated positive on
CAnalytics overall, as shown in Figure [@fig:survey]. CAnalytics were ranked
favorably in all aspects except cognitive load. They had a close to neutral
feeling towards cognitive load, which suggests that the task is still cognitive
heavy.

<!-- questionnaire -->

## Behavior of data modeling and data analysis

<!-- action sequence and state transition -->

We examined the pattern of data modeling and data analysis by looking at a
visualization of the entire interaction log (e.g. Figure [@fig:sequence] shows
the interaction log of one team). All teams started with data modeling as they
got themselves familiar with the documents. However, teams did not wait to start
analysis till they finished data modeling; instead, the activity of data
modeling and data analysis were intertwined. Participants switched from one
activity to the other activity frequently. This is also demonstrated in the
state transition diagram [@fig:transition], in which we encode the number of
switches into width of the link.

![Visualization of interaction logs of Team 107. Each row of colored marks
indicates the sequence of top level activities a participant
performed.](./Log_analysis/action_sequence_vis/G107.png){#fig:sequence}

![State transition diagram of interaction logs of Team 107. Each node is an
activity, whose size represents the time spent on the it; a link represents a
switch from one activity to another, whose width encodes the number of
switches.](./Log_analysis/action_sequence_vis/G107.png){#fig:sequence}

<!-- artifact analysis --> To look at the consequence of intertwined data
modeling and data analysis, we examined the analytic product teams created, the
network graph in particular because social relationships played the most
critical role in this specific case and teams spent most time on network
analysis (as reflected from the log). We found the network views fell into one
of two categories: the networks consisted of 1) separate clusters, or 2)
connected clusters. For example, the network in Figure [@fig:network]b consists
of separate clusters. Networks from 8 teams (36%, mean performance=7.8) fall
into this category. Nodes within a cluster are connected, representing
information space of a robbery case. Nodes between clusters are nonetheless not
connected. However, these teams did not just claim that no relationship existed
between robberies; instead, we found that they documented possible relationships
between robberies in the notepad tool.

In contrast, 6 other teams (27%, mean performance=8.3) created networks composed
of connected clusters. While a cluster is still a representation of a robbery,
some of them are connected through an evidence node. An example is Figure
[@fig:network]c, in which we mark four *connectors* that link the clusters.
These connectors were key evidence that led the teams to hypothesize that those
robberies were related and might be committed by the same criminal group.

While many causes might account for the different network views, we attempt to
interpret the difference from a perspective of uncertainty. For instance, links
within a cluster are factual relationships literally modeled from raw documents
(e.g. a white van was witnessed at a location), but links between clusters are
often inferences beyond literally documented (e.g. a white van at location A is
the same van witnessed at location B). Teams creating separate clusters only
represented facts in the network and held evidence with uncertainty in a
separate artifact. One advantage of distinguishing facts and inferences is that
teams can be aware of assumptions made when making a hypothesis. And since all
inferences are held in one place, teams are forced to confront them and review
their uncertainty iteratively in the process. However, the strategy also adds
difficulty to analysis as analysts may overlook or fail to combine evidence
scattered in different artifacts.

On the contrary, some other teams overlaid facts and inferences in the same
artifact. Both facts and inferences drove the layout of the network, thus
influencing team's framing of the problem. Most teams made evaluation of the
uncertainty of inferences when adding them to the network. This strategy was
relatively more interactive among teammates: they needed to negotiate, evaluate,
and reach consensus on the value and validity of every inference. To some extent
teams might forget whether a relationship is factual or inferred, and ask
whether conclusion derived from the visualization can be trusted under
uncertainty.

From granularity of entities, We noted a distinction between accretion and
filtering strategies in data modeling, similar to what we observed in the paper
prototype study. Filtering is selectively modeling of data and adding to an
artifact. Users must decide what information is relevant, and thus what is to be
excluded, as well as what granularity of information is to model. Filtering
requires more team coordination, because teammates must reach a common ground of
the current problem as well as information needed to answer the problem. Figure
[@fig:network]a is an example of filtering, highlighting only the key
information of each robbery and how robberies are connected.

Accretion is an attempt to comprehensively represent the problem by adding all
information to an artifact. Users extract every fact from the document,
regardless of its immediate relevance to the problem. Accretion costs less
coordination as it is relatively mechanical note taking. A disadvantage of
accretion is that it could be time consuming to model all details and the
produced artifact could be fairly complex. An example is Team 108, who modeled
every step the suspects took, which resulted in many more entities than the
average and much more cluttered network view (Figure [@fig:network]d). Users
reported that they spent too much time in details that they lost the bigger
picture:

> We would find ourselves glued to our computer screens, and spent too much time
on intelligence gathering rather than analysis (User 135)

Different from the result in paper prototype study, however, participants seemed
to be more tempted to accretively add information with CAnalytics. Students
reflected that many annotations did not help them solve the problem at all
because those entities were unrelated to their problem.

> I felt that after we were done annotating, we hadn’t really accomplished
anything and that we were no closer to solving the case than when we had
started. In the end it didn’t really help that we had annotated the data,

Why did this happen? We guess both the context of classroom study and the system
design contributed. Unlike in the lab study where teams were temporarily
assembled, teams in a class evaluated peers either consciously or unconsciously.
Such social pressure motivated individuals to make contributions, and to make
*visible* contributions more than valuable contributions. The awareness features
in our system unfortunately made some contributions more *visible* than others.
For example, creating an annotation would be immediately broadcast to the team,
whereas writing a hypotheses on a notepad produced no notification, although the
text was also shared. The selective awareness seemed to also exert bias to
recognition of contribution.

<!-- Finally, a third category of network consists of few links. These networks
seemed incomplete. These teams appeared not to devote much time on the project.
However, it was worth noting that their average performance was significantly
higher than the other types of teams. We guess these teams employed a different
strategy in making use of the tool. Instead of comprehensively representing the
problem first, the teams started early off to generate hypotheses. This can be
demonstrated from their log: these teams started writing report on the notepad
in their first class whereas most other teams waited till second class or later.
Examining their network view, the nodes were critical entities in their report.
The teams seemed to use the tool as external memory of important information,
rather than tool for analysis. -->

## Collaboration and awareness

Participants rated positively of the collaborative support. Participants
compared CAnalytics with state-of-the-art tools such as Analyst’s Notebook and
PARC ACH. They liked the awareness features built on top of the analytic
capabilities and described it as *“an analysts notebook that multiple people
could work on at once...[and] an analysts version of a Google Doc.”*

Participants reported that they could easily integrate team efforts.

>   they [teammates] were able to work directly off something that I had also
created. **This ability to work off of each other’s own work allowed us to all
contribute to each element of the analytic process**. An example of this would
be when I was creating an association chart for one of the bank robberies. I was
able to cover my bases and include in the chart all the information that I
thought was relevant. At a later time, one of my group members received the
document of the same bank robbery and found information he thought should be
included in the association chart that I had not included. **He was able to work
off of my initial diagram and add and manipulate it in order to include
additional relevant information I had missed**. (U31)

The awareness features were received well. In the survey 88% of the students
rated positively on their group awareness. When asked what features helped them
stay aware of team activities, 28 participants mentioned the tool coordinator,
24 mentioned the notification system, 19 mentioned the history tool, 14
mentioned the real-time update of user-generated data， 12 mentioned the
collaborative editor, and 7 mentioned the message tool. While the number of
mentions does not simply indicate tool usefulness, it suggests users appropriate
these features and were explicitly aware of their support.

<!-- TODO: find literature for these awareness concepts -->

We categorized students' feedback based on the element of awareness, or the
essential problem of awareness of *what* [@Schmidt2002], into social awareness,
information awareness, action awareness, history awareness, and intention
awareness, as shown in Table XX.

<!-- Awareness table in ./awareness.xlsx -->

<!-- integrate work / handoff correct mistake feedback / work in the right
direction -->

By analyzing the interaction, we also found indicators of high awareness. For
example, we measured the number of entities accessed by collaborators versus by
the author only, and the time lapse when the entity was first accessed by
collaborator since created. While data generated by users is automatically
shared, it is up to collaborators to choose to read the shared information or
ignore information altogether. A high awareness team would keep updated with
collaborators' generated information and read information soon after it is
shared; whereas a low awareness team might experience a significant delay or
even never access it. We found that most teams shared a high proportion of
entities (mean=77.6%). We found that in average, 77.6% of the created entities
were accessed by at least one teammate

Students reported enjoying the use of CAnalytics. Specifically, being able to
see teammates contributing simultaneously that being aware that teammates were
contributing motivated themselves to contribute.

>  the notifications every time you saw someone annotated something kept you
peace at mind that your teammates are also working efficiently on this project.
(U64)

>  During class I wasn’t sure if my teammates were doing work for that class or
another thing but then seeing their dot switch between applications on the
software and updates pop up on my screen I knew they were doing work for 231.
(U141)

> The fact that you can see what other teammates are doing and they can see what
you are doing creates a sense of accountability in terms of separating the work
load. (User 51)

<!-- breakdown --> One major critique is the lack of sharing of intermediate
analytic insight for close collaboration. When individuals are exploring
visualizations (e.g. zoom, filter, pan, drag, highlight), an insight pops up
with a specific visualization state. Students complaint that they could not
easily communicate that insight together with the associate views to the team.
The team could "be looking at the same information but arranged in completely
different ways" (P131). Unable to share immediate insights in the graphic
context seems to make communication out of context. 
