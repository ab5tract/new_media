% What You See With What You Have
% John Haltiwanger
% 01 February 2010

Mapping the Open Source Typesetting Landscape Via Intermediation


Though the electronic typesetting of documents for print is dominated by the proprietary Microsoft Word platform, there luckily exist multiple open source typesetting options available for those for whom the MS Word program is unavailable for economic, moral, or other reasons. Some of these options are based on What-You-See-Is-What-You-Get (WYSIWYG) principles, such as OpenOffice.org Writer and AbiWord. Others are centered around markup languages, such as (X)HTML and XML. Others are sort of hybrids, such as the What-You-See-Is-What-You-Meant (WYSIWYM) editor LyX and indeed the half-markup, half-programming language TeX system upon which that application is based. A major benefit of markup based typesetting has recently emerged in the application `pandoc` which allows conversion from plain-text markup languages to not only other markup languages like HTML and TeX (actually, it's two popular macro packages LaTeX and ConTeXt) but to OpenOffice.org's OpenDocument Format (ODT) (McFarlane 2010). This allows extensive options for output utilizing one plain-text file as the input. This thesis aims to incorporate `pandoc` into a workflow that allows comparison between three of the available output formats: HTML, ODT, and ConTeXt. (The input format, an extended edition of Markdown, will also be similarly engaged). As the standard of the World Wide Web, HTML makes eminent sense as an output format for an electronic document. Likewise, OpenOffice.org Writer represents the easiest transition from Microsoft Word by providiing a feature-rich WYSIWYG interface. Both are therefore highly desirable output formats for electronic documents as viewing and editing are inherently accessible. There is a pressing problem with both, however: Neither are characterized first and foremost by the quality of their typesetting.

Enter ConTeXt, a macro package for the TeX typesetting system that provides "structured interfaces for handling typography, including extensive support for colors, backgrounds, hyperlinks, presentations, figure-text integration, and conditional compilation" (wiki.contextgarden.net 2008).[^1] TeX is open source and is celebrating its 32^nd year in 2010. It was developed by Donald Knuth around, among other things, the principle of beautiful line breaking. By calculating line breaks based on entire paragraphs TeX is able to make decisions on the final appearance of any given line that take into account the lines preceding it (Knuth 1999: 67). By contrast OO.o Writer and HTML are constrained by their operating principles to calculate line breaking differently: HTML due to the capacity for browsers to vary in display size and ODT for the reason that WYSIWYG-generated text cannot differ in its print form from its screen form by definition, which results in per-line breaking. When the actual readability of the various electronic documents is taken into account, then, ConTeXt stands as the winner, yet it faces constraints and complications of its own in terms of usability and collaboration. Mapping these constraints is the task shouldered by this thesis, and the mechanism through which that will happen is described below.

[^1]: These capacities are simply not mirrored sufficiently in LaTeX, thus its distinct lack of presence in the discussion here. 

# Literature #

As described in N. Katherine Hayles' book _Electronic Literature_, 'intermediation' begins when "a first-level emergent pattern is captured in another medium and re-represented with the primitives of the new medium, which leads to an emergent result captured in turn by yet another medium, and so forth" (Hayles 2008: 45). The result is a _dynamic heterarchy_ in which feedback and feedforward loops "tie the system together through continuing interactions circulating throughout the hierarchy" and "different levels continuously inform and mutually determine each other" (Hayles 2008: 45). This sounds precisely like the approach that will be incorporated here. Perhaps `pandoc` can be considered a form of "intermediation engine" through which a dynamic heterarchy composed around interrogating the relative capacities of HTML, ODT, and ConTeXt. That dynamic heterarchy in turn condenses as the thesis paper itself. Typesetting the document in ConTeXt will allow the demonstation the capabilities of that engine from inside itself (link structures, formatting for print vs electronic outputs, sidenotations, animation, etc) while similarly exploring these capabilities in both HTML and ODT. That is, for every capability uncovered within ConTeXt, the same (or similar) effect will be attempted in the other systems.[^2] In this way the varieties of usability and capacity between them can be mapped.[^3] This reflects the self-reflectivity that Hayles calls for among those engaged in electronic literature: "it not only reflects but _reflects upon_ the media from which it springs" (Hayles 2008: 88). By reflecting upon the construction of itself through its various layers (Markdown, pandoc, ConTeXt, HTML, and ODT), the thesis aims to not only test the capacities but compare the merits of each form, potentially establishing a new means for doing so.

The ConTeXt community, as well as the larger TeX community surrounding it, is self-documenting. This is important because ConTeXt is undergoing an important, even monumental transition. The TeX engine is being extended by integrating the programming language Lua, allowing for improved font handling, proper traditional Arabic typesetting, and the capacity to sue an actual programming language rather than clumsy TeX macros for things like content generated at the time of typesetting. Documenting the process of this integration is _The history of luaTeX_  by Hans Hagen, ConTeXt's lead developer at PRAGMA ADE, the Dutch typesetting company where ConTeXt was born and is nurtured. 

[^2]: That is particularly interesting due to the existence of a JavaScript version of the TeX line breaking algorithm for HTML 5-compatible browsers (Stein 2009).
[^3]: This necessarily puts the comparisons to the other platforms at a slight offset: the biar for ConTeXt is embedded.



# Research Questions #

# Approach #

What follows is an example of how the investigation the inclusion of hypertext in a ConTeXt document can provide a springboard for investigating material differences in the typesetting options. 

For instance [this url](http://wikileaks.org/) was input according to the syntax [found here](http://daringfireball.net/projects/markdown/syntax#link). In the Markdown format this code appears as

~~~~~~~~~~
For instance [this url](http://wikileaks.org/) was input according to the syntax [found here](http://daringfireball.net/projects/markdown/syntax).
~~~~~~~~~~

When the text `pandoc -t context -o thesis.tex thesis.markdown` is input into a shell prompt, the resulting output appears as follows

~~~~~~~~~~~
For instance \useURL[1][http://wikileaks.org/][][this url]\from[1] was input according to the syntax \useURL[2][http://daringfireball.net/projects/markdown/syntax][][found here]\from[2].
~~~~~~~~~~~

However, that in itself is not enough for `context thesis` to generate a valid PDF with hyperlinks. For three additional lines are required.

~~~~~~~~~~~~~
\setupinteraction[state=start,color=lightblue] 

\starttext 

For instance \useURL[1][http://wikileaks.org/][][this url]\from[1] was input according to the syntax \useURL[2][http://daringfireball.net/projects/markdown/syntax][][found here]\from[2].

\stoptext
~~~~~~~~~~~~~

The differences in the syntax are clearly explained by their status as different markup languages. The structural differences, however, such as the indication of a 'start' and a 'stop' to 'text' as well as a slightly cryptic 'setup' for 'interaction' reflect that TeX is a _batch text processor_ and the way that ConTeXt structures its TeX macros, respectively. In other words, that these additional commands are required reflects architectural differences that in turn reflect the goals around which the text processing software was designed. This is obvious when one considers that the output of `pandoc -t html -o thesis.html thesis.markdown` not only shows HTML's own structural choices (including it's much less awkward hyperlink syntax), it will likely also render in a browser without the addition of HTML's version of 'start' and 'stop' (\<HTML\> and \<\/HTML\>) due to architectural decisions relating to backwards compatability and leniancy belonging to the browser's design. 

Additional differences between the two approaches is that no link hints appear in my open source PDF viewer Okular when a mouse hovers over a link in a PDF, whereas a browser provides the location to which a link points. OpenOffice.org Writer also provides a similar hint function when dealing with links. The presence or absence of link hints changes the experience of navigating a hyperlinked file fundamentally. If all open source PDF viewers suffer from a similar lack, then this points to a design choice and/or limitation that affects the entire open source typesetting landscape. This is an important consideration as link structures, and thus their navigation, are often integral to electronic documents.

# An Operational Component #

CSL is a new form of handling bibliographic data and citations. It also apparently   http://xbiblio.sourceforge.net/csl/

# Bibliography #

Hayles, N. Katherine. _Electronic Literature: New horizons for the literary_. Indiana: University of Notre Dame, 2008. Print.

MacFarlane, John. "Pandoc." Web. 2 January 2010. <[http://http://johnmacfarlane.net/pandoc](http://http://johnmacfarlane.net/pandoc)>

Hodge, Sean. "5 Principles and Ideas of Setting Type on the Web." _Smashing Magazine_. Web. 23 April 2008. <[http://media.smashingmagazine.com](http://media.smashingmagazine.com)>

Stein, Bram. "TeX line breaking algorithm in HTML5 Canvas." _TypeSet_. Web. 8 December 2009. <[http://www.bramstein.com/projects/typeset/myfit.html](http://www.bramstein.com/projects/typeset/myfit.html)>

wiki.contextgarden.net. "What is ConTeXt." _ConTeXt Garden Wiki_. Web. 5 July 2008. <[http://wiki.contextgarden.net/What_is_ConTeXt](http://wiki.contextgarden.net/What_is_ConTeXt)>
