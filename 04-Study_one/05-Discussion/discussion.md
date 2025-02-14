# Discussion

## Reflections on method

The goal of the study is to explore design opportunities to support
collaborative information analysis by evaluating tool usage in a natural
environment over extended period of time. This is to complement research that
only tests tools in short term lab studies (e.g. e.g. [@Convertino2011;
@Goyal2016]). Due to the constraint of time (usually about one hour), these
studies had to employ a simplified task with significantly reduced content and
complexity. Teams would then not create complex information artifacts and had
less difficulty balancing limited cognition between problem solving and team
coordination. More complex information artifacts and higher cost of coordination
would have provided more insights into team process of combining information and
tool usage for integrating efforts.

Besides, the limited time may prevent teams from developing sufficient awareness
to work properly. Participants in lab studies face a fresh new setting: a new
formed team, a new collaborative tool, a new task, and a new environment. It
takes time for teams to establish common ground, and to learn to appropriate the
tool to best serve their team. Allowing teams for more time to explore and make
trials would have provided an opportunity to observe how team awareness have
developed and how teams have appropriated the tool to best solve the problem.

Our classroom study attempts to gain deeper insights on collaborative
information analysis behavior by better simulating real world settings in two
aspects:

1. The study was one-week long. Teams were able to explore multiple strategies
to solve the problem, and to change a strategy if they encountered a problem.
For example, two teams decided to change the use of the tool halfway in their
analysis. One team started with dividing work by case documents, but later
decided members should annotate different entity types. Another team started
with an accretion strategy by annotating all entities. Later they discovered
that this strategy brought too much noise instead of useful information, and
decided to clean out irrelevant entities (filtering strategy). Such change
occurs as a consequence of increased awareness of team functions and tool
capabilities, which takes time to develop.

2. Participants in this study are being trained to be professional analysts.
Before our study they had already been introduced to the information analysis
techniques and indeed to the state-of-the-art tools that support this task. In
the study, participants often compared CAnalytics to those tools, as well as
teamwork with CAnalytics to experience with those tools. Therefore their
feedback is likely to provide deeper insight into strength and weakness of
CAnalytics. We also purposefully formed three-person teams as opposed to dyads because a three-person team would perform more interesting social interactions and possible problems, such as cognitive specialization [@Borge2014], social loafing [@Karau1993], and hidden profile [@Stasser2003b].

Yet classroom study also has limits. For example, many factors and variables
could exist that affect team performance. The fact that these factors are often
impossible to model or control adds to the difficulty in data analysis (e.g. identifying performance correlated factors with linear regression). Also,
data collection is challenging because team interactions are not always
accessible. Teams can choose to work synchronously or asynchronously, and it is
difficult to predict when or where the interaction of most interest is to occur.
Due to these limits, result of classroom study is more likely to identify
problems and generate hypotheses, while lab studies and case studies can be
conducted to evaluate solutions and validate hypotheses with greater control and
deeper access.

## Reflections on result

A misconception about information analysis is that data modeling and data
analysis are two staged activities. Most analytic tools assume data has already
been modeled and ready to be visualized and analyzed. This is akin to the
waterfall software development model, which features a sequential process that
flows downwards through the phases of requirement conception, software design,
software implementation, testing and maintenance. Critics have pointed out that
the staged approach may not work properly, because clients may not know exactly
what their requirements are before they see the working software and designers
may not be fully aware of future difficulties in a new software product.
Instead, an iterative design process is often required that leads to reframe
user requirements, redesign, redevelopment, and retesting.

Similarly, relying only on information that has already been modeled and
delivered to analysts will probably not solve all analytical problems
[@Heuer1999]. It will probably be necessary to look elsewhere, re-model the
data, and dig for more information. As suggested by the Data-Frame theory,
constructing a frame is essential to determine how to model the data.
Contemporary hypotheses help frame the problem, identify the gap, and determine
what data to model. Re-modeling of the data could lead to a different picture of
the problem (e.g. adding a link between two clusters changes the layout of the
network), leading to completely different analytic path. The interaction log we
captured demonstrated such an iterative analysis process and the positive
subject feedback confirmed data modeling as an integral part of analysis.

We noted the importance of representing uncertainty. We observed teams in our
study spontaneously employed two different approaches to deal with team
uncertainty given that the tool did not include specific support: to hold facts
and inferences in separate artifacts, and place facts and inferences of high
certainty in an artifact. This demonstrates both challenge and opportunity to
design for uncertainty support. We propose that a richer graphic language be
designed so that analysts can encode uncertainty into the network view. Links
and entities with different uncertainty are visualized in different colors.
Users can *filter by uncertainty* so that users can choose to have only facts to
take into account or confront all inferences to make a review.

We found that participants tended to make more visible contributions than
valuable contributions, and collaborative technology only made some activities
more visible, thus unintentionally encouraged participants to do more these
activities, although they might not be useful at all. This is especially true
when team practice has not been established and thus can be easily shaped by
outside incentives, such as the awareness features in our system. We should be
cautious to distinguish between awareness system and contribution system. A
contribution system should only include factors that bear value to the task,
such as hypotheses created and validated in the context of information analysis,
and should be explicitly displayed to users to highlight the value of these
factors. Awareness system, on the other hand, should share all relevant
activities (and perhaps highlight information most relevant to the current user,
for example, when teammates edit your entity). The information, while valuable
to the task goal, can motivate teammates to contribute in the same direction,
and can remind teammates to pull you back when it deviates from the team goal
(e.g. when one user created too many low-level entities in Team 108)

A possible design solution to a cluttered display when the number of entities increases is to enable collapsible data views. Indeed we found analysts often engaged in multi-level analysis in parallel, frequently coordinating between, say, confirmation of a location, to associating sequence of actions, to comparing two groups of evidence, to overviewing robberies as a whole. A collapsible view can help analysts focus attention on a certain level of details, and when in collaboration, draw teammate's attention to the specific item in your intention.

One major critic was the lack of view sharing support in the tool. In addition
to data sharing, we find that views of data should become shareable resources as
well. With the identical data pool, analysts often have different views of data.
For example, analysts can apply a filter to have a reduced data view, highlight
an area to sharpen analytic focus, and re-layout the node-link graph to cluster
relevant entities. While the data pool represents the information the team have
available, individual views of the data reflect analyst's *interpretation*
toward the information. The views together with the underlying data embody
user's intermediate analytic status. Therefore we propose that just like data,
views, which embodies interpretation of data, should be shareable.

Views as resources should also be extensible and reusable. For example, several
participants reflected that there were situations when they found a
collaborator's view useful and wanted to build their own work upon that view
without manually reproducing the view. With views as resources, individuals can
take the views to their need. They can also deliberatively share their own view
when they feel other collaborators will be interested. Shared views are
interactive rather than static images, so that analysts can still perform full
functions including filtering and highlighting, and are able to evolve the view
with collective team efforts, a critical requirement emphasized in
[@Carroll2013]

Our study suggests that the instrument plays an important role in shaping
students' behavior towards more collaborative learning. With traditional
single-user tools, students often employ a divide-and-conquer strategy; they
divide their job responsibility, work individually on their own part, and put
the results together in the end for report submission. In our study, we observed
that students spontaneously conducted closer collaboration and enjoyed being
able to contribute simultaneously.

Anecdotal reflections from the instructor suggested that the system can include
support for instructor intervention. During the study, the instructor would go
over to students and check their computer screen about how they were doing, and
provide guidance if necessary. The instructor commented that he valued students'
thinking and reasoning process, and believed that monitoring and guiding
students' ongoing performance would be a valuable supplement to classroom
instruction. As claimed by Heuer [@Heuer1999], training will be more effective
if supplemented with ongoing advice and assistance. CAnalytics could do more in
supporting the instructor. CAnalytics already provides an integrated workspace
for data modeling, information analysis and hypothesis generation, and thus
makes it easier to monitor the whole analytic process. Besides, students'
interaction logs are already captured (for team awareness and research purpose
only now), and could be streamed to the instructor for performance monitoring.
The process data provides the instructor a new window to assess students'
performance and to provide intervention when necessary, as suggested by learning
analytics techniques [@Siemens2011].
