What You See With What You Have

Mapping the Open Source Typesetting Landscape  




# Introduction #

Though the electronic typesetting of documents for print is dominated by the proprietary Microsoft Word platform, there luckily exist multiple open source typesetting options available for those who have rejected the MS Word program as a typestting system for economic, moral, or other reasons. Some of these options are based on What-You-See-Is-What-You-Get (WYSIWYG) principles, such as OpenOffice.org Writer and AbiWord. Others are centered around markup languages, such as (X)HTML and XML. Others are sort of hybrids, such as the What-You-See-Is-What-You-Meant (WYSIWYM) editor LyX and indeed the half-markup, half-programming language TeX system upon which that application is based. The existence of TeX after 32 years is notable within its own right as long distance in time for software to not only survive but continue evolving. That it is a markup-based interface for typesetting not only allows its source to interact with version control systems in a way that binary files cannot, it's materiality also shares important with that most famous typesetting system: the ubiquitious HTML.  

A major benefit of markup based typesetting has recently emerged in the application `pandoc` which allows conversion from plain-text markup languages to not only other markup languages like HTML and TeX (actually, it's two popular macro packages LaTeX and ConTeXt) but to OpenOffice.org's OpenDocument Format (ODT) (McFarlane 2010). This allows extensive options for output utilizing one plain-text file as the input. This thesis aims to incorporate `pandoc` into a workflow that allows comparison between three of the available output formats: HTML, ODT, and ConTeXt. (The input format, an extended edition of Markdown, will also be similarly engaged). As the standard of the World Wide Web, HTML makes eminent sense as an output format for an electronic document. Likewise, OpenOffice.org Writer represents the easiest transition from Microsoft Word by providing a feature-rich WYSIWYG interface. Both are therefore highly desirable output formats for electronic documents as viewing and editing are inherently accessible. There is a pressing problem with both, however: neither is characterized first and foremost by their quality of typesetting.


Enter ConTeXt, a macro package for the TeX typesetting system that provides "structured interfaces for handling typography, including extensive support for colors, backgrounds, hyperlinks, presentations, figure-text integration, and conditional compilation" (wiki.contextgarden.net 2008).[^1] TeX is open source and is celebrating its 32^nd^ year in 2010. It was developed by Donald Knuth around, among other things, the principle of beautiful line breaking. By calculating line breaks based on entire paragraphs TeX is able to make decisions on the final appearance of any given line that take into account the lines preceding it (Knuth 1999: 67). By contrast OO.o Writer and HTML are constrained by their operating principles to calculate line breaking differently: HTML due to the capacity for browsers to vary in display size and ODT for the reason that WYSIWYG-generated text cannot differ in its print form from its screen form by definition, which results in per-line breaking. When the actual readability of the various electronic documents is taken into account, then, ConTeXt stands as the winner, yet it faces constraints and complications of its own in terms of usability and collaboration. Mapping these constraints is the task shouldered by this thesis, and the mechanism through which that will happen is described below.

[^1]: These capacities are simply not mirrored sufficiently in LaTeX, thus its distinct lack of presence in the discussion here. 

# Literature #

As described in N. Katherine Hayles' book _Electronic Literature_, 'intermediation' begins when "a first-level emergent pattern is captured in another medium and re-represented with the primitives of the new medium, which leads to an emergent result captured in turn by yet another medium, and so forth" (Hayles 2008: 45). The result is a _dynamic heterarchy_ in which feedback and feedforward loops "tie the system together through continuing interactions circulating throughout the hierarchy" and "different levels continuously inform and mutually determine each other" (Hayles 2008: 45). This sounds precisely like the approach that will be incorporated here. Pandoc can be considered a form of "intermediation engine" (or perhaps an "intermediation layer") through which a dynamic heterarchy composed around interrogating the relative capacities of HTML, ODT, and ConTeXt. That dynamic heterarchy in turn condenses as the thesis paper itself. Typesetting the document in ConTeXt will allow the demonstation the capabilities of that engine from inside itself (link structures, formatting for print vs electronic outputs, sidenotations, animation, etc) while similarly exploring these capabilities in both HTML and ODT. That is, for every capability uncovered within ConTeXt, the same (or similar) effect will be attempted in the other systems.[^2] In this way the varieties of usability and capacity between them can be mapped.[^3] This resembles the self-reflectivity that Hayles calls for among those engaged in electronic literature: "it not only reflects but _reflects upon_ the media from which it springs" (Hayles 2008: 88). By reflecting upon the construction of itself through its various layers (Markdown, pandoc, ConTeXt, HTML, and ODT), the thesis aims to not only test the capacities but compare the merits of each form, potentially establishing a new means for doing so. Typographer Robin Kinross distinguishes a \quote{fundamental character of typography}--\quotation{writing is a single process, while printing is at least two: composition and presswork} (Kinross 2004). It seems clear that here we can encounter an equally disparate shift as we move towards a typesetting workflow based on a generically translateable input format. 

Mapping the encounters on the way will require dealing with issues of software design, literary theory, semiotics, interfaces, and usability. The language of Bruno Latour in his 2005 articulation of Actor-Network Theory should prove useful in articulating a narrative of this navigation (Latour 2005). Pandoc, for instance, is a powerful mediator, _literally_ translating the Markdown source file (a compound noun that, when split, finds two additional actors) into a large and expanding list of output formats. The native programs that support these output formats are mediators translating text (really modulations of electrical current, when it exists within the digital (Hayles 2008)). I am also an actor and  will take care to document the translations I emit within my status as a participant researcher within the ConTeXt community. My own questions will become artifacts in a mailing list archives, along with any answers as well. The software I will write to facilitate the typesetting environment I envision, the lessons I learn and then share--the results of such endeavors are uncertain but there in general contributions to projects produce some sort of effect. 

The ConTeXt community, as well as the larger TeX community surrounding it, is self-documenting. This is important because ConTeXt is undergoing an important, even monumental transition. The TeX engine is being extended by integrating the programming language Lua, allowing for improved font handling, proper traditional Arabic typesetting, and the capacity to use an actual programming language rather than clumsy TeX macros for things like content generated at the time of typesetting. Documenting the process of this integration is _The history of luaTeX_  by Hans Hagen, ConTeXt's lead developer at PRAGMA ADE, the Dutch typesetting company where ConTeXt was born and is nurtured (Hagen 2009). 

[^2]: That is particularly interesting due to the existence of a JavaScript version of the TeX line breaking algorithm for HTML 5-compatible browsers (Stein 2009).
[^3]: This necessarily puts the comparisons to the other platforms at a slight offset: the bias for ConTeXt is embedded.



# Research Questions #

- What are the individial merits of each of the three open source output formats? How do they contrast in relation with each other? What are the output formats unique capacities? The figurations of their capacities emerging from this document are to be discovered in the process of attempting to perform relative tasks between them.

- To what extent is ConTeXt's superior typesetting capacity offset by the learning curve and constant adjustments required to achieve desired results? As a typesetting engine it is automatically more tuned towards deploying text _as an output format for reading by human eyes_ than the others. 

- Does Markdown provide a capable source input format? This project takes as a premise that ConTeXt is unsuitable as a source input format due to issues of translatability when compared to the output capacity of Markdown through the application Pandoc. Can Markdown achieve a balance of usability and flexibility that allows an ability to add _simply_ text to an input document and achieve expected results in a workflow properly set for translation? Other input formats are available as output formats of Pandoc, so alternatives such as reStructured Text can easily be investigated.

- Is there even a workflow that is capable? If not, what alterations to either the software landscape (via other software) or the softwares themselves are necessary to avoid failure?

-  What then can be identified as 'fundamental character' of documents generated with open source digital typesetting software? They seem to differ in important procedural ways---TeX/ConTeXt documents exist as: source code (plain text with mark up), temporary files and memory heaps during compilation, a print-ready document such as PDF or PostScript, and perhaps as a printed physical copy. OpenOffice.org documents exist as typography and text mixed within a single file format that can be edited in a WYSIWYG environment.

- How does the introduction of Lua into the TeX batch processing engine affect the capabilities of the typesetting system?

# Approach #

_What follows is an example of how the investigation the inclusion of hypertext in a ConTeXt document can provide a springboard for investigating material differences in the typesetting options._ 

For instance [this url](http://wikileaks.org/) was input according to the syntax [found here](http://daringfireball.net/projects/markdown/syntax). In the Markdown format this code appears as

~~~~~~~~~~
For instance [this url](http://wikileaks.org/) was input according to the syntax 
[found here](http://daringfireball.net/projects/markdown/syntax).
~~~~~~~~~~

When the text `pandoc -t context -o thesis.tex thesis.markdown` is input into a shell prompt, the resulting output appears as follows

~~~~~~~~~~~
For instance 
\useURL[1][http://wikileaks.org/][][this url]\from[1] was input according to the syntax \useURL[2][http://daringfireball.net/projects/markdown/syntax][][found here]\from[2].
~~~~~~~~~~~

However, that in itself is not enough for `context thesis` to generate a valid PDF with hyperlinks. For three additional lines are required.

~~~~~~~~~~~~~
\setupinteraction[state=start,color=darkblue] 

\starttext 

For instance 
\useURL[1][http://wikileaks.org/][][this url]\from[1] 
was input according to the syntax 
\useURL[2][http://daringfireball.net/projects/markdown/syntax][][found here]\from[2].

\stoptext
~~~~~~~~~~~~~

The differences in the syntax are clearly explained by their status as different markup languages. The structural differences, however, such as the indication of a 'start' and a 'stop' to 'text' as well as a slightly cryptic 'setup' for 'interaction' reflect that TeX is a _batch text processor_ and the way that ConTeXt structures its TeX macros, respectively. In other words, that these additional commands are required reflects architectural differences that in turn reflect the goals around which the text processing software was designed. This is obvious when one considers that the output of `pandoc -t html -o thesis.html thesis.markdown` not only shows HTML's own structural choices (including it's much less awkward hyperlink syntax), it will likely also render in a browser without the addition of HTML's version of 'start' and 'stop' (\<HTML\> and \<\/HTML\>) due to architectural decisions relating to backwards compatability and leniancy belonging to the browser's design. 

Additional work would be required to achieve a decent looking typesetting of the source code blocks above if the Pandoc utility did not already do some primitive linebreaking of its own. ConTeXt has trouble with handling long unbroken strings such as URLs and even text commands, at least in the relatively primitive version of a source code block that is being used here (`\starttyping` and `\stoptyping`) as seen in the second code block. Meanwhile the same code blocks look acceptable in ODT and HTML by default, while the ConTeXt output fails as it to leaves off portions of text. What procedures must be followed to achieve an acceptable output in ConTeXt? Are they worth the effort? While the ODT output is passable, to what extent can it be improved? HTML is only some lines of CSS away from outputing the complete text of the code blocks with the nicety of an boxed outline to offset it from the general flow.

# A Software Component #

Another important benefit of utilizing a plain text (UTF-8, of course) markup language as a source language is the incredible potential that can be unleashed for collaborative writing in the form of Version Control Systems. Though software is inherently discursive, VCS facilitates this discursive aspect (Yuill 2008: 67). What if VCS could be leveraged to increase the discursiveness of texts? Utilizing a plain text markup allows the introduction of tools such as Linus Torvalds' Git into the typesetting workflow (Git). The type of agency that VCS brings to the table cannot be understated: accountability via atomic version tracking, draft collection, and clone-ability to simply begin the list. Git is a distributed VCS in which every repository has a technically symmetric authority. The workflow described in this paper, striving as it does for _ease_ and _automation_, can be instantiated[^4] within a web application utilizing a web-based Markdown editor with live preview running a Ruby back end and programmed in the Waves web application framework. Rather than focusing at this stage on developing a conventional web-based system involving multiple users, the approach will be to develop an application designed to run on as a server on a local system. Due to the nodally symmetric nature of distributed VCS, discursive collaboration becomes possible once a viable workflow is instantiated for one user. With a few more touches on the application, the `git` interface can be abstracted away and a more familiar, remote-server fashioned web application becomes feasible. This would provide a platform for text collaboration in as many ways as it can be conceived. While the second vision seems ambitious to accomplish at the same time as conducting the software study, the first vision will indeed help facilitate the operation of the thesis.

# Colophon #

This document was typest using `ConTeXt 2010.02.03 23:06`. The body font is Red Hat's `Liberation Serif` and the monospace font is `Inconsolata` by Ralph Levien. The ConTeXt environmental setup for an MLA format available at the ConTeXt Garden Wiki was modified and applied.  

[^4]: If it is possible to construct this workflow at all with ConTeXt does not represent a deal-breaker for this software component as HTML rendering remains a perfectly reasonable output format.


ConTeXt. "What is ConTeXt." _ConTeXt Garden Wiki_. Web. 5 July 2008. <[http://wiki.contextgarden.net/What_is_ConTeXt](http://wiki.contextgarden.net/What_is_ConTeXt)> 

Git. "git." Web. <[http://www.git-scm.org](http://www.git-scm.org)>

Hagen, Hans. _The history of luaTeX_. Pragma ADE, 2009. Web. <[http://www.pragma-ade.com/general/manuals/mk.pdf](http://www.pragma-ade.com/general/manuals/mk.pdf)>

Hayles, N. Katherine. _Electronic Literature: New horizons for the literary_. Indiana: University of Notre Dame, 2008. Print.

Hodge, Sean. "5 Principles and Ideas of Setting Type on the Web." _Smashing Magazine_. Web. 23 April 2008. <[http://media.smashingmagazine.com](http://media.smashingmagazine.com)>   

Kinross, Robin. _Modern typography_. London: Hyphen Press, 2004.

Knuth, Donald. _Digital Typography_. Stanford: CSLI, 1999.

Latour, Bruno. _Reassembling the social_. Oxford: Oxford University Press, 2005. Print.

MacFarlane, John. "Pandoc." Web. 2 January 2010. <[http://http://johnmacfarlane.net/pandoc](http://http://johnmacfarlane.net/pandoc)>

Pragma ADE. "about." Company website. 28 August 2009. <[http://www.pragma-ade.com/about-1.htm](http://www.pragma-ade.com/about-1.htm)>

Stein, Bram. "TeX line breaking algorithm in HTML5 Canvas." _TypeSet_. Web. 8 December 2009. <[http://www.bramstein.com/projects/typeset/myfit.html](http://www.bramstein.com/projects/typeset/myfit.html)>

Waves. "Ruby Waves." Web. <[http://rubywaves.com](http://rubywaves.com)>

Yuill, Simon. "Concurrent Version System." _Software Studies: a lexicon_. Ed. Matt Fuller. Cambridge: MIT Press, 2008. 64-69. Print. 

