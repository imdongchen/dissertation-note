# Discussion

## Reflections on method

Vision 2015 [@Vision2015] from the Director of National Intelligence notes that practice of intelligence analysis features “a dramatic shift from traditional emphasis on self-reliance toward more collaborative operations”. Yet in practice, collaboration often occurs as loosely coupled, for example, the team takes a divide-and-conquer strategy, working on their own for most of the time and simply putting work together at the end. Analysts are thus less likely to take advantage of diverse knowledge and expertise, which is exactly the value of collaboration. Encouraging closer collaboration meets the call of Vision 2015 for a shift “away from coordination of draft products toward regular discussion of data and hypotheses early in the research phase”.


Though these earlier lab studies produced interesting results, one of the biggest limiting factors was the constraint of time, and thus the simplified task. Most lab studies finish within an hour (some exceptions may last up to a few hours). To allow teams to be able to solve the task as well as coordinate team processes, the task content and complexity were significantly reduced. For example, in [@Convertino2012], participants only worked on 25 facts, and the task was essentially a counting problem--the option with the least cons was the answer.

Besides, the limited time may prevent teams from developing sufficient awareness to work properly. Lab studies look at a completely new setting: a new formed team, a new collaborative tool, a new task, and a new environment. It takes time for teams to establish common ground, and to appropriate the tool to best serve their purpose. Under time pressure teams would either ignore team communication completely or gain not enough awareness to collaborate smoothly. The study thus may not be able to produce results that reflect how teams would really use a tool.

Kang and Stasko [@Kang2011] observed that intelligence analysis is a process of framing and re-framing problems. As analysts collected more information, their framing of the problem started to change and motivated them to reconsider the problem. This process takes time. When under such a limited time constraint as in a lab study, participants strive to finish the task with no extra cognition power to reconsider the problem.

Another factor that influences teamwork is group size. Many lab studies recruit two participants as a team. Interaction in a two-person group is the most simplified form of group interaction because A has to interact with B and B has to respond to A. Even a three-person group would produce more complex interaction patterns that a two-person group would normally not. For example,
social loafing,
cognitive specialization

Most collaborative information analysis tools have only been tested in short-term lab studies (e.g. [@Goyal2014, @Goyal2016]). While such studies are fine to test specific hypotheses and to evaluate initial designs, they do not provide information about how teams are using the systems over longer periods of time.

## Data modeling as part of analysis

We have seen that a link would change a network completely, leading to different conclusions. That's why we suggest a need for dynamic data modeling.

Most visual analytic tools assume data has already been modeled and ready to be visualized. However, relying only on information that has already been modeled and delivered to analysts will probably not solve all analytical problems [@Heuer1999]. It will probably be necessary to look elsewhere, re-model the data, and dig for more information. In turn, a re-modeling of the data could lead to a different picture of the problem (e.g. adding a link between two clusters changes the layout of the network), leading to completely different analytic path.

With visualization tools that only display a specific set of data models, patterns are given, whereas with dynamic data modeling capability, analysts can change the schema which would change the network completely. As we have described in the result section, a link would connect clusters thus change the overall conceptual picture.

We found that data modeling and analysis are interwoven in the process. Analysts do not wait to start analysis till all data are modeled. We made an analogy to the waterfall software development model, which features a sequential process that flows downwards through the phases of requirement conception, software design, software implementation, testing and maintenance. Critics have pointed out that the staged approach may not work properly, because clients may not know exactly what their requirements are before they see the working software and designers may not be fully aware of future difficulties in a new software product. Instead, an iterative design process is often required that leads to reframe user requirements, redesign, redevelopment, and retesting. Similarly, in an information analysis cycle, analysts often need dynamically frame their analytic problem, and re-think how they model the data that could fill the gap between the problem and their knowledge, and redo the analysis. The interaction log we identified demonstrated such as iterative analysis process and confirmed data modeling as an integral part of analysis.


<!-- Modeling for uncertainty -->

We note the importance of representing uncertainty. Inaccurate information shared by teammates could lead to team thinking in a wrong direction [@Kang2014a]. We observed teams in our study spontaneously employed three different approaches to deal with team uncertainty, given that the tool did not include specific support: to hold facts and inferences in separate artifacts, to treat facts and inferences equally in an artifact, and place facts and inferences of high certainty in an artifact. This demonstrates both challenge and opportunity to design for uncertainty support; we need a richer graphical language to distinguish levels of uncertainty.

Yet we also found some teams that did not follow exactly the modeling and analysis strategy. Their created network view included fewer connections and seemed incomplete. We found these teams started developing hypotheses earlier and only used the visualization as extended memory, which reminded them of key entities in the documents. Indeed, in our observation of paper prototype study, the artifacts created by participants were typically much simpler and held much fewer entities than in this study. It is partly because creating paper-based artifacts was more costly than system-generated visualization, but it was also the cost that motivated teams to move on to hypothesis generation earlier rather than spending time creating artifacts. While it is easier to craft nice visualization with system support, analysts do not have to, and creating visualization is not their ultimate goal, as long as the team could move on in hypothesis development. However, analysts need to be cautious to reach conclusions on a basis of too little information. Analysts should suspend their judgment while information is being gathered on each hypothesis. It is recommended that all hypotheses are evaluated to avoid confirmation bias.



## sharing intermediate analytic status

sharing of view plus hypotheses

## Information uncertainty

Visualization can cause bias [@Mussweiler2000], for example, one team connected all theft cases to a single suspect. While this was only an inference, the network graph exerted a strong bias toward the expression that the thefts were all connected and were committed by a single group. The team eventually agreed on this wrong conclusion and ignored all other evidence showing conflicts between cases.

Mussweiler T, Strack F (2000) Numeric judgments under uncertainty: The role of knowledge in anchoring. Journal of Experimental Social Psychology 36:495-518

## Interweaving of information collection and analysis
Re-representation, reframing of the problem, restructuring of information foraging

## Instrument for teaching information analytics
Training will be more effective if supplemented with ongoing advice and assistance [@Heuer1999].
Anecdotal reflections from the instructor suggested that the system can include support for instructor intervention. During the study, the instructor would go over to students and checked their computer screen on how they were doing, and provide guidance if necessary. The instructor commented that he valued students' thinking and reasoning process, and believed that monitoring and guiding students' ongoing performance would be a valuable supplement to classroom instruction. He felt CAnalytics could do more in supporting the instructor. CAnalytics provides an integrated workspace for data modeling, information analysis and hypothesis generation, and thus makes it easier to monitor the whole analytic process. Besides, students' interaction logs are already captured (for team awareness and research purpose only now), but could also be streamed to the instructor for performance monitoring. The process data provides the instructor a new window to assess students' performance and to provide intervention when necessary.



Other possible related papers: [@Burns2002]

Our study suggests that the instrument plays an important role in shaping students' behavior towards more collaborative learning. With traditional single-user tools, students often employ a divide-and-conquer strategy; they divide their job responsibility, work individually on their own part, and put the results together in the end for report submission. In our study, we observed that students spontaneously conducted closer collaboration and enjoyed being able to contribute simultaneously.

Learning collaboration vs. collaborative learning

## Technology appropriation
Based on students' feedback, two teams decided to change the appropriation of the tool halfway in their analysis. For instance, one team started with dividing work by case documents, but later decided members should annotate different entity types. Another team started off by annotating all entities, whether related to unrelated to their problem. Later they discovered that this strategy brought too much noise instead of useful information, and wanted to start over. This phenomenon that teams learn to use a tool and adapt to their teamwork is common in many previously reported work. The phenomenon occurs when the team together with the tool works better like a system given a sufficiently long period of time. This is also where a field study has advantage over a lab study, as a lab study is often too short to observe a complete team development.

## View sharing vs control
One major critic was the lack of view sharing support in the tool. Students reflected that their team had difficulty coordinating their findings because they could not see collaborator's view directly. While view sharing has been identified as an important awareness contributor, the design of view sharing becomes a more complex issue in the multiple coordinated view collaboration.

- private vs public view
- shared workspace (collaborative editor)
- handoff
