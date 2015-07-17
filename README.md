canvas-ext
==========

This repo hosts custom global JavaScript for DCE Canvas.

Right now, it does two things:

- Sets up a message handler to respond to iframes' request to change their heights and…changes their heights.

- Hides the table on a syllabus page if the maintainer of the course puts an HTML element in their syllabus description with the id 'hide-syllabus-table'.

If you extend it to do any additional things, we *must* break it up into modules. (Don't worry! It's not a big deal; ask Jim.)

Deployment
----------

- Configure the Canvas instances to use https://harvard-dce.github.io/canvas-ext/ext.js as the global JavaScript file.
- Merge master to the gh-pages branch and push it back to GitHub.
