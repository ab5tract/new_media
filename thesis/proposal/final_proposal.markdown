# Generative Re-mediation #
## An investigation of cross-media publishing in free and open source software ##

# Introduction #

The very term 'media' comes from the discipline of advertising, which in the 1940s began to develop a vocabulary to discuss the emerging issue of delivering messages across various distribution channels. While this initial impulse did not necessarily involve an algorithmic capacity to target multiple mediums using a single input, the advent of networked computers has seen just such a desire arise. 'Traditional' design tools such as the Adobe Creative Suite are being replaced in top design firms with workflows that dynamically generate documents. Rather than constructing everything by hand in what the What You See Is What You Get (WYSIWYG) interfaces of those programs, designers are now using software _wrappers_ and scripts that facilitate translations of one format into another. Tied together in a deliberate workflow, the tools receive relatively simple source documents as input and produce multiple outputs given the parameters the designer has implemented into their workflow. This process is called _cross-media publishing_.

Free, Libre, and Open Source Software (FLOSS) often plays an important role in such workflows. FLOSS programming languages, wrappers, frameworks, toolkits, and applications are increasingly incorporated into a design workflow. The success of the generative art toolkit Processing is exemplary in this regard [^1]. The WYSIWYG application Scribus, which aims to provide an interface with capabilities analagous to Adobe InDesign, provides Python-based scripting functionality to allow a hybridized approach. Indeed, Adobe has developed an XML-based input format for InDesign that allows generative production of InDesign documents. Cross-media publishing and generative techniques are not only increasingly successful in the design world, they are also closely related. This thesis aims to investigate this relationship through a specific mode of cross-media publishing. Using a specific wrapper called Pandoc[^2], the thesis will be simultaneously typeset in three output formats: HTML, OpenDocument (ODT), and ConTeXt. Each of these formats represent a distinct approach to the issue of typesetting---these approaches are worthwhile to investigate, as they represent the three approaches to typesetting currently found on the computer: semantic markup, formal markup, and WYSIWYG. The Holy Grail of cross-media publishing, according to Florian Cramer, is "one system that serves as the universal document source."[^4]

# Remediation #

The theoretical framework to be deployed in this investigation of generative, cross-media typesetting is Jay David Bolter and Richard Grusin's concept of remediation (Bolter & Grusin 1999). As defined by the authors, remediation is "the representation of one medium an another" (45). Bolter and Grusin identify two distinct approaches for messages in a given medium. In the first, immediacy, the message is tailored in such a way as to, ideally, make the audience forget the presence of the medium. In the second, hypermediacy, the opposite is sought: unique aspects of the medium are highlighted by the message. Remediation, then, involves an interplay of these two approaches. That the WYSIWYG style developed for Word (and wholeheartedly adopted by OpenOffice.org) takes quite seriously the goal of mimicking a typewriter is then an example of immediacy. Even the approach of representing a page of paper on a screen is an example of remediation. Since HTML and ConTeXt can both be used to create not only remediated paper documents but also 'screen-native' pages as well, the theoretical framework of remediation, immediacy, and hypermediacy provides a compelling means for developing this thesis.

# Actor-Network Theory #

At the risk of mis-applying Bruno Latour's Actor-Network Theory (ANT), this thesis will incorporate the language and conceptual tools presented in Latour's _Reassembling the Social_ (Latour 2005) in order to properly position the various applications, frameworks, and output formats that will collectively generate and encompass the final output of the thesis. Not only is `pandoc` a mediator in this thesis, the output formats themselves are as well, as their functionalities, peculiarities, and limitations will have an effect on the content of the thesis as well as its final presentation. The programs and scripts that come into play can also be seen as having mediating roles. I am also an obvious actor in this network, but in more ways than simply writing the thesis---for example, questions I ask to the ConTeXt mailing list are translations[^3] between actors. The simple production of this thesis, bridging as it does both free software and generative design, could be thought of as a point of contention through which once unconnected actors are brought into contact with one another. Acknowledging this fact up front and directly through an ANT framing of the project can only strengthen its potential to one day become a mediating text itself. Certainly it seems appropriate to begin to situate softwares as important actors in their own right, especially in this context where the very materiality of the thesis (let alone its content) is dependent on the translations produced by these actors.

# Questions #

- What is the current state of generative design? What drives its adoption by designers? What role does FLOSS play?

- What are the individial merits of each of the three open source output formats? How do they contrast in relation with each other? What are the output formats unique capacities? The figurations of their capacities emerging from this document are to be discovered in the process of attempting to perform relative tasks between them.

- What capacity do the output formats have for addressing issues of remediation? That is, does a given output format allow for targetting either immediacy, hypermediacy, or a hybridization? Or is only one or the other possible in that format?

- What limitations are present that prevent accomplishing certain typesetting goals in a given format? What limitations in the software tools used will affect and limit the capabilities of this thesis?

- Is it possible, through this approach, to generate aesthetically pleasing typesetting in any of the three formats? What advantages does a 'single source input format' have?

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

# Expected Findings #

1. There will be significant limitations in each format. ODT will be frustratingly manual in its requirements for effecting the desired typesetting. HTML will likely fall short in line-breaking and print quality. ConTeXt will likely prove highly temperamental and difficult to utilize to its full extent.

2. ConTeXt will be the most suitable for straddling 'immediacy' and 'hypermediacy,' as it allows for targetting both the printed page and the computer screen. It's superior typesetting algorithms will give it distinct aesthetic advantages, but in the end these will be weighed against the effort expended to achieve the desired result.

3. Generative design workflows will generally involve a majority of FLOSS software.

4. Typographic programming is not a well-documented field. A theoretical-technical of three FLOSS formats in typographic terms will provide a distinct contribution to both traditions.

5. A 'single source input format' that is a) plaintext and b) simple and readable is an integral requirement for the collaborative writing of texts.



[^1]: Processing. [http://processing.org/](http://processing.org/).
[^2]: Pandoc. [http://johnmacfarlane.net/pandoc/](http://johnmacfarlane.net/pandoc/)
[^3]: In Latour's words, though I may adopt the less confusing 'modulation' as well as 'assemblage' over 'network.'
[^4]: From a personal interview.


Bolter, Jay David and Richard Grusin. _Remediation_. Cambridge: MIT Press. 1999. Print.

Latour, Bruno. _Reassembling the social_. Oxford: Oxford University Press, 2005. Print.