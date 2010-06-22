# Crystalized Process: Text That Typesets Itself #

The time has come to for the self-reflective approach of this thesis to come into play. For a book called _Writing Space_, this work by Jay David Bolter provides scant discussion of actual writing environments on the computer. Originally written before the expansion of the World Wide Web into the sphere of popular culture, _Writing Space_ is concerns itself with "the space of electronic writing."[^second] In defining this space as "both the computer screen, where text is displayed, and the electronic memory, in which it is stored," Bolter belies the relative absence of process in materialist forms of media analysis (2001: 13). 

Bolter's over-simple definition of electronic writing space does not incorporate the act of writing, only the display of it. This surface-level analysis fits well the application of his remediation theory---the surface of a medium (it's "screen") is the host site of remediation. Bolter delves below the surface in his explanation of a shift to topographical writing. In the electronic writing space, "any relationships that can be defined as the interplay of pointers and elements" are representable (32). The writing space "itself has become a hierarchy of topical elements" (32). This is the effect of the computer's affinity for symbol-processing: "Any symbol in the space can refer to another symbol using its numerical address" (30). To highlight the dimensional shift in the writing space, Bolter describes the operation of outline processors. These programs abstract a text to the level of sections. These sections can be moved around and manipulated. 

[^second]: The second edition of the book, published in 2001, was used for this thesis. While it is updated to include the Web, its roots in a significantly older text are worth noting.



# Environment of Operation #

This text is not typed in the manner that you see it. The above header is instead written like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  # Environment of Operation #
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Through the wrapper program `pandoc`, this input (written in Markdown) is converted into HTML and ConTeXt outputs.

HTML
:	{ <h1>Environment of Operation</h1> }

ConTeXt
:	{  \section{Environment of Operation} }

The syntax of HTML represents a semantic operation: "Dear Mr. Browser, treat this as a header of level 1." The syntax of ConTeXt, however, represents a macro command within a programming language. What it says is "call the sections of code that translate the text within the brackets to the parameters specified for the `\section{}` command."

The literal 'writing space' of this thesis is a program called Textroom. Textroom is a minimalist text editor in which there are no buttons, taskbars, or other clutter. Only you, your words, and (optionally) informational text reporting the time, word count, percentage to accomplishing your writing goal, etc. By writing in plain-text, I open myself to the opportunities afforded me by version control systems. Developed to enable collaboration of programmers on a code base, version control systems can track changes in text across time (useful for this project) and allow for massively distributed workflows involved tens of thousands of individuals (useful for the Linux kernel).

## Constraints ##

![Textroom and gvim. gvim is displayed on this screen but running on my netbook.](images/two_editors.png)

Above you see a necessary adaptation within my workflow. My netbook took a fall and lost the ability to use its screen. Because of the nature of the command line, I was able to log in to computer and execute commands that allowed me to establish remote access using a piece of software called `ssh`. This remote connection can also support the transmission of GUI applications using the client-server model at the heart of the X Windows system (which drives the GNU/Linux GUI). This was important a) to get files off the netbook, and b) the version of `pandoc` on my desktop had stopped working after a modular dependency was upgraded and I was finding it impossible to upgrade `pandoc` itself. In the image above we see the minimal editor Textroom and the editor gvim. Because of the pandoc incompatibility on the desktop, I was forced to use the netbook as the site of typesetting. This shaped the output of the project most likely by time. However, the simple ability to log in and enable remote access shaped this project immensely by allowing me to extract important work that would otherwise have been lost.

An unfortunate constraint is the inability to take advantage of elements of the TeX landscape that are reknowned for making life easier. The chief among these is BibTeX, which allows for a bibliography to be dynamically generated and citations to be inserted according to a variety of formats (that one can change with a single line of text, if desired). By abstracting myself from TeX by using Markdown as the "pre-format," I've lost the opportunity to easily manage bibliographic data and instead must input it by hand. That said, the MLA format is not currently available in BibTeX meaning that--even if I could use this software--the output would be necessarily shaped by the constraints of the tools.


