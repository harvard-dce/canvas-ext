canvas-ext
==========

This repo hosts custom global JavaScript for DCE Canvas.

Right now, it does two things:

- Sets up a message handler to respond to iframes' request to change their heights and…changes their heights.

- Hides the table on a syllabus page if the maintainer of the course puts an HTML element in their syllabus description with the id 'hide-syllabus-table'.

- Adds code required by EvaluationKit in order for it to load.

Development
----------

In order to change the global JavaScript for the Canvas instance:

- Create a feature branch off of `gh-pages`.
- Make your changes and push them, then make a pull request so that they can be reviewed.
- Configure the Canvas instances to use https://harvard-dce.github.io/canvas-ext/ext.js as the global JavaScript file.
– Create a pull request from the feature branch into `gh-pages`.
- Test the changes by putting `ext.js` on another server and then point the staging instance of Canvas to it.
- (You can also accomplish this by getting the raw GitHub URL for the file and serving that via [RawGit](https://rawgit.com/). This will be quicker if you understand raw files and GitHub. Otherwise, don't worry about it!)
- When testing and review are complete, merge the gh-pages branch. The changes will be live as long as the Canvas instance points to https://harvard-dce.github.io/canvas-ext/ext.js as its source for global JavaScript.
