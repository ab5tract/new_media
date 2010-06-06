# Formats #

Formats are function calls. They require standards and standards-based libraries. There is no point to a format if there is nothing there to decode it. Nihilism, however, provides no proper formats--nothing is worth the effort of decoding. So issues of 'nothing' and 'something' are complicated by the mercurial nature of software. There are an infinity of inbetweens on the way to an invisible interface.

In some ways popularity is the granular mechanism of achieving an interface that is simply used, not seen. That is to say, the relative ubiquity of an interface in part defines whether that interface appears 'natural' or not.

The entire levelling of standards within typographic design evolved in the context of readability. What is attractive to the eye? How do you 'encode' messages through the formatting of text on a printed page in a way that is striving towards, and at least to some degree achieving, invisibility?

Formats pre-date digital computing. The realm of academic publishing is awash in formats: Chicago, APA, MLA, etc. These formats are achieved via compositional guidelines. These guidelines are constructed with consideration to issues ranging from ink use to politics. [need more history of these formats]

## Formats as Databases ##

[Pending]

## Bibliography ##

If the format is a database, what of the fact that it can't accurately describe itself without human intervention? Binary files are content-opaque. Even text files require some form of semantic standard if their contents are to be understood without dedicating time to mining the text for contextual clues. This begs the question of bibliography. 

Bibliography is the most visible difference between the formats of academia. It is also a point of regression for the tri-mediation project that brings this text to the screen or page you are reading it on. This is despite the fact that both OpenOffice.org and ConTeXt have, through third party modules, facilities to greatly reduce the tedium and complexity of citation.[^1] The wrapper software `pandoc` constrains me to self-managed citations because it does not integrate bibliography into its own workflow: it simply passes the TeX command `\cite{}` to the next stage in the toolchain, providing that next stage is intended for TeX. If any other file format is used, the `\cite{}` command is ignored.

[^1]: In the case of OO.o, there is Zotero ([http://zotero.org](http://zotero.org)) and in the case of ConTeXt there is the `bib` module ([]()) as well as the possibility of integrating any other TeX-compatible bibliographic module through some degree of individual effort.

