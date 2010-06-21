
# Fonts BoF - Libre Graphics Meeting 2010 - 28 May #
### Notes by John Haltiwanger ###

Dave : Open Font Library, site is almost up after two years. Works with Google on the Open Font Directory. OFL is looking for options concerning group decision making -- how to resolve issues of stalemate?

 : Book designer with LaTeX. Based in Taiwan. Offers a workshop on LaTeX book design.

Simon Budig: Pretty serious flaws in Pango. Developer for the Gimp. 
       

Possibility of a virtual machine optimized for Quality Assurance. 

foo font sources tree template (http://oflb.open-fonts.org/ ; look for version 2): don't deviate too much, so sharing can be optimized between projects. The XeTeX test suite will be included in the tree template.

FontForge doesn't really help you to design fonts. It helps you construct fonts from initial designs (font engineering). So Inkscape has a role in the type workflow by providing the space for type design. Certain features like bezier minimization and overlap removals don't need to exist in Inkscape. Should Inkscape provide a special canvas for type design? Very specific layers are provided in FontForge. Inkscape could perhaps mimic this using existing layer functinalities.

Inkscape's font facilities are stagnant as Felipe waits for feedback from users (he is not one). People are using it though, mentions Canonical Design team. Perhaps this weekend some UI mockups can be made.                                   

OFL will sign a constitutional charter with OneClick Voting (correct?). May require a second BoF because necessary people are missing.
Felipe Sanchez : Working with Inkscape. No previous knowledge of typography until started to work on putting fonts into Inkscape. Looking for input from the professionals 

Ben : With Deja Vu fonts.

 : Design team of Canonical. Working on the new Ubuntu font. Crowd-sourcing hinting/kerning.

 : Design team of Canonical. No font experience.

Nicolas spalinger: Watching 

Denis MoyogoJacquerye : Font designer, concerned with designing for African languages.

Ken : Canonical Design Team. Working on the technical aspects of Ubuntu font release (packaging, licensing)


Getting fonts together for distibutions: long pipelines/wishlists of fonts waiting to be packaged for Fedora.


Problems with Pango:
	- came across issues in the Gimp font selection
	- font descriptions is based on enumerations, so it is limited in what it can express
	- workaround: fc-pattern (fontconfig)--switch out the font description using pango callback, but this is no longer available in the cairo version of pango.
	- Inkscape doesn't use Pango and doesn't display the problem.
  - The problem: font
	- Pango has text layout, character shaping, etc.
	- Pango now has a Graphite back-end. Graphite moves the shaping further down the stack. Graphite fonts include much information about shaping. 
	- Harfbuzz - splitting out some aspects of Pango and pushing it down the stack.
	- Importing FontMatrix ideas into the Qt/GTK font selection menu.

Inkscape's font selection menu is too slow. Everyone chooses fonts from the dialog. Avoid the drop-down. New fixes just arrived.

SVG font format has a lot of potential. You can set the background of a glyph as a video. These are good for animation and video. Browsers are not necessarily going to support SVG web font format. Can allow online editing, shaping. 

Wharf is required by W3C, SVG is optional. Post discussion to Open Font Library mailing list, fontforge-users. Spark discussion of the status of SVG.

Version control systems are missing from design communities, though its important. Especially with large projects like type, with lots of design decisions you might like to revisit.

Pushing Google to organize the source files of the Open Font Directory. 

Open Baskerville people have been collaborating on Github. Github promptly implemented glyph preview. This feature needs to be integrated into other online vcs interfaces. Discussion of integrating FontForge directly to the OFL repositories (like connecting a debugger to a running program).

New ideas of how to represent the progress of fonts. Fontaine: font coverage calculator. Lists glyphs that are still needed. This is likely to spur development as designers can observe what parts need to be done, where the work will be most valuable, etc.

In terms of documentation: design documents should be included in the source tree.

XeTeX has a test suite to observe glyph coverage and compatibility. 

Possibility of a virtual machine optimized for Quality Assurance. 

foo font sources tree template (http://oflb.open-fonts.org/ ; look for version 2): don't deviate too much, so sharing can be optimized between projects. The XeTeX test suite will be included in the tree template.

FontForge doesn't really help you to design fonts. It helps you construct fonts from initial designs (font engineering). So Inkscape has a role in the type workflow by providing the space for type design. Certain features like bezier minimization and overlap removals don't need to exist in Inkscape. Should Inkscape provide a special canvas for type design? Very specific layers are provided in FontForge. Inkscape could perhaps mimic this using existing layer functinalities.

Inkscape's font facilities are stagnant as Felipe waits for feedback from users (he is not one). People are using it though, mentions Canonical Design team. Perhaps this weekend some UI mockups can be made.                                   

OFL will sign a constitutional charter with OneClick Voting (correct?). May require a second BoF because necessary people are missing.

OFL runs on CChost, designed for CC:Remix. This CMS is limiting. OFLv2 is ready to go live, but OFLv3 is looking to migrate to a new CMS. Perhaps Launchpad? Canonical Design team can perhaps push for necessary features from within Canonical.

