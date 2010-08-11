# Constraints #

Largest single constraint: no knowledge of Haskell.
	- means our solutions are "kluges"
	- originally from the Scottish slang for 'toilet' ( http://www.outpost9.com/reference/jargon/jargon_26.html#SEC33 )

Section numbering.

Regular expressions
	- not entirely reliable, but the only means of dealing with the Markdown input without knowing Haskell
	- example of \w vs. \S

Pre-format.
	- Pandoc requires specific knowledge of programming language
		- this could be altered to respect a greater separation of "translation" from the core of the program, by creating a Domain Specific Language, or using common serial formats such as JSON or YAML to store a user's desired responses for specific instances of markup and what exactly should appear in a given output format as response to that markup.
		- a separate issue of splitting content from design, but similar in principle
	- inadequacies in the preformat language and wrapper create a difference in the metastasis that leads to transduction (kluges, scripts, other wrappers, other markups)

	- the necessity of medium-specific tweaks
		- processing of both what goes in to pandoc, and what comes out (in the case of ConTeXt)

the abstract is in the wrapper's wrapper script
	- separation of content from layout, separation of translation via pandoc's command line variables
	- showcases the immediacy of the command line, where inputs are easily scriptable so that strings that would be incredibly cumbersome to enter by hand (or even copy paste) are 'variable' in a programmatic sense
	- the dispersion of the thesis' materiality
