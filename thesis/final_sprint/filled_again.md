% Grammars of Process
% John C. Haltiwanger
%

# Acknowledgments #

The final shape of this thesis is deeply indebted to those who have helped me along the way. First I would like to thank Richard Rogers. Without his gentle-yet-forceful pressure to elevate the discussion contained within my thesis, I fear that the project would ultimately demonstrate little of whatever theoretical power it currently enjoys. Likewise, without Geert Lovink the project would not exist in the first place, as it was his request for a post-journal publishing platform that started me on this quest of generative typesetting for multiple output formats. Thanks also to Florian Cramer, not least for explaining that simply typesetting the thesis in two formats was enough technical work for a single-year masters thesis but also for providing a strong perspective from which to begin. I am deeply indebted to Michael Jason Dieter for introducting me to the work of Gilbert Simondon, without whose theory this thesis would not be feasible. Huge thanks go to Femke Snelting and Pierre Huyghebaert for their indispensible interview and for welcoming me into their extremely creative network. For issues with JavaScript in the HTML version of this thesis, Michael Murtaugh once again proves his potency as a programmer. Special thanks to my colleagues at the UvA, for helping me to stay sane in the midst of an insane project: Hania Pietrowska, Natalia Sanchez, Rakesh Kanhai, Sarah Moore Morgan Curry, Marc Stumpel, Allison Guy, and Ramses Petronia. Every day I grow to further realize that without my friends, I am nothing. Finally, a sincere thanks to all those who have shared insights and conversations with me as I pushed to develop my ideas further.

# Introduction #

Today's new media theory increasingly invokes _materiality_ as a significant, perhaps even _the_ significant, mode of investigating digital objects and the media through which they are delivered. This thesis questions such a centrality of materiality through a practice-based, process-oriented approach. _Process_ is proposed as the atomic unit of that which new media theory investigates. This is true on a formal material level: applications run as either as individual process or as assemblages of process which are managed by an operating system and through which the application's code is accomplishes all of its tasks, from memory and access to algorithmic execution on the central processing unit. A process-oriented approach will be shown to provide an alternative methodology for engaging with and understanding software that may be more productive than what a material analysis alone provides. For instance, certain problematics within Lev Manovich's concept of 'media hybridity' will be resolved by a re-orientation towards process (Manovich 2008). Process also allows a fresh perspective for examining human-digital relations. Human processes and digital processes are seen as inextricably intertwined, leaving any discussion of digital process that excludes relevant dimensions of human process necessarily unfinished.

Process has recently elevated as a focal point within the design world as more and more designers switch to, or otherwise integrate, generative workflows. _Generative design_ is a form of design in which software algorithms are used from the bottom up, through source code that directs all drawing and manipulation of the objects the source describes. This is opposed to the top-down, What You See Is What You Get (WYSIWYG) style of design embodied in the industry-standard applications from Adobe. This generative space provides an ideal site for investigating questions of materiality and medium-specificity within the computer _metamedium_ for a number of reasons. 

## Generative Design Begins With Words ##

The first is the 'workspace' of much of generative design: plain-text source files. These source files often, though not exclusively, undergo their generation within a command-line interface (CLI). The command-line interface is defined by the primacy of text in its workings. The centrality of text to generative design invites a corrective movement against the general lack of focus on the processes behind typesetting among new media theory. While the surfaces of text and textual interfaces have been investigated in numerous ways (Bolter 2001; Fuller 2000), there has been a general lack of theoretical concern regarding the underlying processes of text in the metamedium. As opposed to the overflowing amount of literature relating to visually-rich computer interfaces, very little theory has been written regarding the command-line---despite its place as the historical interface (once contemporaneous with punch cards) by which digital processes were initiated. Far from being obsolete, both Microsoft and Apple ship command line interfaces within their operating systems. In Microsoft's case, significant money has been spent developing a new grammar and implementing new functionalities into their modern command line implementation Powershell. Likewise, Google has found the command-line relevant enough to release a tool for interacting with its online services from that interface.

This centralization of text and the command-line raises pertinent questions that may help to clear up the almost-hopelessly fuzzy nature of materiality in the computer metamedium. What aspects define the materiality of the command-line? What are its medium-specificities? Do existing theories such as _remediation_ apply to the workings of the command-line?

## Processes Within the Borderland ##

The centrality of source code itself--rather than the centrality of the source code as text--to generative design provides a second compelling reason for investigating materiality and medium-specificity within the metamedium. Currently at issue within the emerging field of software studies is where to place source code in its investigations. Some propose, as Lev Manovich does in his _The Language of New Media_, that understanding the logic of new media requires investigating the field of computer science for the "new terms, categories, and operations that characterize media that become programmable" (Manovich 2001: 48). This is a call to software as _logos_. It attempts to solidify theory by giving it a specific direction--the logic and objects of software. 

Wendy Hui Kyong Chun, however, questions this direction, criticizing the erasure of "the vicissitudes of execution and the structures that ensure the coincidence of code and its execution" that results when one elevates source code--and by extension software--as a totalizing logic (Chun 2008: 303). When theorists such as Alexander Galloway argue that source code is "automatically executable," they fetishize source code by collapsing source code with the effects of that code's execution. In other words, the execution itself is erased, along with the conditions buttressing that execution. Rather than approach a project of solidifying theory (that is, ending "vapor theory" as advocated by Geert Lovink and Galloway, among others) through reducing the computer metamedium to the code that it runs, Chun advocates an approach of code as a _re-source_, a perspective which "enables us to think in terms of the gap between source and execution" (321). This gap seemingly includes the "borderland" in which N. Katherine Hayles positions materiality, "the connective tissue joining the physical and mental, the artifact and the user" (Hayles 2004: 72). That Chun identifies the 'code as re-source' perspective as positioning an "interface as a process rather than as a stable thing" resonates with the process-oriented perspective proposed in this thesis, which I will proceed now to describe (Chun 2006: 321).

## Process-Oriented Perspective ##

In his outlining of the nature of a 'processual media theory,' Ned Rossiter asserts that "a processual media theory examines the tensions and torques between that which has emerged and conditions of possibility; it is an approach that inquires into the potentiality of motion that underpins the existence and formation of a system" (2007: 178). While the argument that Rossiter builds in his chapter on the subject revolves mainly around interrogating and the processes that drive new media within its institutional settings, the thrust of his argument--that new media empirics must "reflexively engage with the field of forces that condition its methodology"--maps easily to a more general line of inquiry (171). This is perhaps best embodied in his explanation of a 'processual aesthetics of new media'[^aesthetics]:

(%grrrquote)
A processual aesthetics of new media goes beyond what is simply seen or represented on the screen. It seeks to identify how online practices are always conditioned by and articulated with seemingly invisible forces, institutional desires and regimes of practice. (Rossiter 2007: 174)
/(%grrrquote)

[^aesthetics]: Where aesthetics is used "to speak of the organization and management of sensation and perception" (Rossiter 2007: 166).

While a truly exhaustive investigation of the multitude of relations--social, economic, technological, ideological--involved in generative design--is simply not within the scope of this thesis, I believe that it is important to begin filling in the "gap" between source code and execution. A process-oriented perspective encourages this by first defining a given materiality as an _assemblage of process_. This is as true in the physical world as it is in the digital, as all that exists has taken its shape as a result of _becoming_. From this recognition, this process-oriented perspective integrates the theoritization of ontogenesis proposed by Gilbert Simondon. This theory will be described in further detail in a later section (!WHICH!). For now, however, it is best to explain that in Simondon's ontogenesis[^onto], change in a system is the result of incongruency within that system. In other words, difference causes change. 

[^onto]: That is, the 'being of becoming.' 

To test this assertion, I survey historical developments within computing. Where do changes--or, in Simondon's language, _transductions_--occur within the domain of computation? How did the assemblages of process upon which generative design rely _become_ what they are today? The historical survey demonstrates that changes in computers do arise in response to "differences"--that is to say, problems. These problems can be 'real', 'virtual', 'imaginary', or otherwise. The solutions to these problems are influenced by the structure of relations within which the problems themselves arise. This observation demonstrates that Simondon's description of ontogenesis is sound, as well as applicable to describing the dynamics of the metamedium.

The second stage of the process-oriented perspective seeks to interrogate and critique the mode of existence of _mediums_ within the computer metamedium. When materiality within the computer is defined as 'assembled process,' mediums lose their seeming rootedness in materiality---that is, unless everything assembled within the computer is deemed a medium. To make this point clear: if a medium is defined by its 'specificities,' and within a computer every non-identical digital object contains (or is embedded within) particular specificities, then every unique digital object has the potential to be labelled a 'medium'. Variations in interface, say the difference between Windows Explorer and Mac OS X's Finder A separate element, outside of materiality, must be invoked in order to explain and discuss mediums based within, and thus apparently reliant on, the metamedium. In response to this question I identify the existence of _grammars of process_ which enable, require, and inspire the assembling of process. While not entirely sufficient to resolve the boundaries of medium and not-medium, this concept of processual grammar nevertheless provides at least a tool for articulating and guiding discussions along those lines. Prior to this identification of processual grammars, however, is a brief summary of four strains of medium description: the medium theories of Marshall McLuhan, Jay David Bolter and Robert Grusin, N. Katherine Hayles, and Lev Manovich.

## Reflexive Methodology ##

In addition to the historical survey of digital processes and its attempt to map Gilbert Simondon's language onto that domain, this thesis has a separate case study: the typsetting of itself, in multiple output formats, through a generative workflow. This provides a secondary mechanism for interrogating Simondon's theory of ontogenesis. Central to ontogenesis is the question of _individuation_. 

By examining the underlying processes of presentation required to 'typeset' the text itself, this reflexive methodology further demonstrates the validity of classifying materiality as assembled process. Through the utilization of FLoSS software, multiple output formats will be not only be investigated but also materially instantiated through a designed mechanism of process--a _processual hybridity_. These output formats represent two of the top formats currently used to manage and display texts digitally: HTML and PDF. Questioning the materiality of the input format, Markdown, is a useful exercise:  what is the materiality of a format whose use implies an intention to convert to--to exist as--a multitude of _other materialities_? This type of materiality (transitional, "unfinished") runs throughout the field of generative design. By designing, documenting, and describing a genuine generative workflow I am able to integrate a significant degree of reflexivity into the thesis at a level of materiality as well as content. 

The creation and typesetting of the thesis occurs in a non-linear fashion, according to a separate set of rules than those normally associated with text processing on a computer. These rules, or _constraints_, are 



## Origins of This Thesis ##

This thesis springs from a practical consideration, namely the issue of _cross-media publishing_, a consideration that came into play as soon as I began to contemplate the various options for arranging text on the screen. Not once during the writing of this thesis have I been contradicted when broaching the observation that the best option we currently have for reading text on the screen is PDF, a format that was designed to contain documents intended for printing. PDF, or Portable Document Format. However, disregarding issues of display and presentation, the HTML format underlying the World Wide Web provides significantly more malleability in relation to the text it contains. In light of calls within the field of new media for investigating _medium-specficities_, analyzing these formats seemed a prudent course. Likewise, the strident focus on _materiality_ within the field becomes an open question as we involve a third format, Markdown, which was designed specifically to be translated into other formats.[^mkd] 

[^mkd]: Initially the focus was simply on converting to HTML, though it has since been used to produce a multitude of output formats, as we will soon see.



\chapter{Transduction}

In his text _The Position of the Problem of Ontogenesis_, Simondon writes,

(%grrrquote)
By transduction we mean an operation--physical, biological, mental, social--by which an activity propagates itself from one element to the next, within a given domain, and founds this propagation on a structuration of the domain that is realized from place to place: each area of the constituted structure serves as the principle and the model for the next area, as a primer for its constitution, to the extent that the modification expands progresively at the same time as the structuring operation. (Simondon 2009: 11).
/(%grrrquote)

# Do I get sections in the main text #

I hope so....

\chapter{Conclusion}

Repurposed from the language of chemistry, Simondon's metaphorically images transduction with the example of a substrate--swelling with _metapotential_--that crystallizes. The final formation is the substrate fulfilling this metapotential, a fulfillment that arises only through an unpredictable unfolding involving emergent factors.[^approp]

[^approp]: The language of chemistry was likewise appropriated for the term 'interface' (Cramer and Fuller 2008: 149).

# Bibliography #

This is where all the words will go.

\input tufte
