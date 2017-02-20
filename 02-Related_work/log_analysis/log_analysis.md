# Log analysis

## Objective

Log analysis has been conducted:
- to model cognition and behavior of end users [11, 14]
- to classify users with different task strategies and personality traits, and to predict performance [5]
- to identify the role of specific interactions in analysis [26, 23, 18, 4, 25]
- to identify states that make navigating or reasoning easier [15]
- action taxonomy [34, 3, 16, 32]
- to recover analyst’s reasoning process [8]


Morton [@Morton2014] analyzed the usage patterns of online visual analytics (Many Eyes and Tableau) based on interaction logs.

Brown et al. [@Brown2014] proposed that interaction logs could be used to predict user performance and personality traits.

Gotz and Zhou [@Gotz2009d] proposed a taxonomy of user actions based on Activity Theory.

Guo et al. [@Guo2016] combined log analysis with insight-based evaluation to understand how participants reached an insight. They explored several methods to analyze logs. For example, they provided a guideline how to map application-specific actions to more general actions. They conducted a correlation analysis as a first step to identify activities worth further analysis. They also extracted interaction **patterns** by segmenting short sequences of consecutive actions that occurred frequently.

## Action taxonomy
[@Guo2016] employed a seven-top-level action taxonomy, borrowing six definitions from Yi et al.'s action taxonomy and added a "retrieve" category. They clarified the mapping between application specific actions and the seven general, top-level actions.

![action taxonomy employed by [@Guo2016]](./Guo2016-action_taxonomy.png)

## Methods

### unit of analysis

1. Individual actions
2. Patterns, defined as short strings of individual actions that appear "frequently" in the logs. The definition of "frequent" and length of string can be a free parameter that the evaluator needs to decide upon in the study. For example, [@Guo2016] identified sequences of actions that had length of at least 3 and appeared more than 40 times across all participants' interaction logs as candidate patterns.


### Correlation analysis

Compute pairwise correlation between interaction frequencies and performance to identify actions worth further exploring [@Guo2016].

### Log overview visualization

Visualization of sequences of interactions that provides an overview. [@Guo2016] used the visualization to locate and mark the target pattern or action.

![Log overview visualization by [@Guo2016]](./Guo2016-log_visualization.png)


### Transition matrix

The transition matrix shows the number of transitions for each combination of actions. Each row and column represents an action or a pattern (specific sequence of actions) and each cell `(i, j)` contains the number of the times the action/pattern `j` appears right after the action/pattern `i`. The transition matrix is useful for checking which actions/patterns are frequently used together.

![transition matrix by [@Guo2016]](./Guo2016-transition_matrix.png)



These papers are cited as relevant to log analysis
1. [2] E. Agichtein, E. Brill, and S. Dumais. Improving web search ranking by incorporating user behavior information. In Proceedings of the 29th an- nual international ACM SIGIR conference on Research and development in information retrieval, pages 19–26. ACM, 2006
1. [3] R. Amar, J. Eagan, and J. Stasko. Low-level components of analytic activity in information visualization. In Information Visualization, 2005. INFOVIS 2005. IEEE Symposium on, pages 111–117. IEEE, 2005.
1. [4] I. Boyandin, E. Bertini, and D. Lalanne. A qualitative study on the ex- ploration of temporal changes in flow maps with animation and small- multiples. In Computer Graphics Forum, volume 31, pages 1005–1014. Wiley Online Library, 2012.
~~1. [5] E. T. Brown, A. Ottley, H. Zhao, Q. Lin, R. Souvenir, A. Endert, and R. Chang. Finding waldo: Learning about users from their interactions. Visualization and Computer Graphics, IEEE Transactions on, 20(12):1663–1672,~~
1. [7] E. H. Chi, P. Pirolli, K. Chen, and J. Pitkow. Using information scent to model user information needs and actions and the web. In Proceedings of the SIGCHI conference on Human factors in computing systems, pages 490–497. ACM, 2001.
1. [8] W. Dou, D. H. Jeong, F. Stukes, W. Ribarsky, H. R. Lipford, and R. Chang. Recovering reasoning processes from user interactions. IEEE Computer Graphics and Applications, (3):52–61, 2009.
1. [11] S. Gomez and D. Laidlaw. Modeling task performance for a crowd of users from interaction histories. In Proceedings of the SIGCHI Confer- ence on Human Factors in Computing Systems, pages 2465–2468. ACM, 2012
1. [14] W. D. Gray, B. E. John, and M. E. Atwood. Project ernestine: Validating a goms analysis for predicting and explaining real-world task performance. Human-computer interaction, 8(3):237–309, 1993.
1. [15] J. Heer, J. Mackinlay, C. Stolte, and M. Agrawala. Graphical histories for visualization: Supporting analysis, communication, and evaluation. Vi- sualization and Computer Graphics, IEEE Transactions on, 14(6):1189– 1196, 2008.
1. [16] J. Heer and B. Shneiderman. Interactive dynamics for visual analysis. Queue, 10(2):30, 2012.
1. [17] E. Horvitz, J. Breese, D. Heckerman, D. Hovel, and K. Rommelse. The lumiere project: Bayesian user modeling for inferring the goals and needs of software users. In Proceedings of the Fourteenth conference on Uncer- tainty in artificial intelligence, pages 256–265. Morgan Kaufmann Pub- lishers Inc., 1998.
1. [18] Y.-a. Kang, C. Gorg, and J. Stasko. Evaluating visual analytics systems for investigative analysis: Deriving design principles from a case study. In Visual Analytics Science and Technology, 2009. VAST 2009. IEEE Sym- posium on, pages 139–146. IEEE, 2009.
1. [25] K. Reda, A. E. Johnson, J. Leigh, and M. E. Papka. Evaluating user behavior and strategy during visual exploration. In Proceedings of the Fifth Workshop on Beyond Time and Errors: Novel Evaluation Methods for Visualization, pages 41–45. ACM, 2014.
1. [26] D. M. Russell, M. J. Stefik, P. Pirolli, and S. K. Card. The cost structure of sensemaking. In Proceedings of the INTERACT’93 and CHI’93 con- ference on Human factors in computing systems, pages 269–276. ACM, 1993.
1. [32] J. S. Yi, Y. ah Kang, J. T. Stasko, and J. A. Jacko. Toward a deeper under- standing of the role of interaction in information visualization. Visualiza- tion and Computer Graphics, IEEE Transactions on, 13(6):1224–1231, 2007.
1. [33] J. S. Yi, Y.-a. Kang, J. T. Stasko, and J. A. Jacko. Understanding and characterizing insights: how do people gain insights using information visualization? In Proceedings of the 2008Workshop on BEyond time and errors: novel evaLuation methods for Information Visualization, page 4. ACM, 2008.
1. [34] M. X. Zhou and S. K. Feiner. Visual task characterization for auto- mated visual discourse synthesis. In Proceedings of the SIGCHI con- ference on Human factors in computing systems, pages 392–399. ACM Press/Addison-Wesley Publishing Co., 1998.
