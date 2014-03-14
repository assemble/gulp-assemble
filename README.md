# gulp-assemble [![NPM version](https://badge.fury.io/js/gulp-assemble.png)](http://badge.fury.io/js/gulp-assemble)  [![Build Status](https://travis-ci.org/assemble/gulp-assemble.png)](https://travis-ci.org/assemble/gulp-assemble)

> Static site generator for Grunt.js, Gulp.js and Yeoman. Assemble makes it dead simple to build modular sites, blogs, gh-pages, components and documentation from reusable templates and data.

### [Visit the website →](http://assemble.io)


## WARNING!!!

gulp-assemble is using the [alpha branch of Assemble (v0.5.0)](https://github.com/assemble/assemble/tree/v0.5.0).

This is not ready to be used unless you're willing to deal with daily changes, broken code, and lack of documentation.



## Why use Assemble?

1. Most popular site generator for Grunt.js, Gulp.js and Yeoman. Assemble is used to build hundreds of web projects, ranging in size from a single page to 14,000 pages (that we're aware of!). [Let us know if you use Assemble](https://github.com/assemble/assemble/issues/300).
1. Allows you to carve your HTML up into reusable fragments: partials, includes, sections, snippets... Whatever you prefer to call them, Assemble does that.
1. Optionally use `layouts` to wrap your pages with commonly used elements and content.
1. "Pages" can either be defined as HTML/templates, JSON or YAML, or directly inside the gulpfile.
1. It's awesome. Lol just kidding. But seriously, Assemble... is... awesome! and it's fun to use.

...and of course, we use Assemble to build the project's own documentation [http://assemble.io](http://assemble.io):

![image](https://f.cloud.github.com/assets/383994/1463257/f031bcfe-4525-11e3-9a03-89a17eee7518.png)

## The "assemble" plugin

### Getting Started

```bash
npm install gulp-assemble --save-dev
```


```js
var assemble= require('gulp-assemble');
gulp.src('src/templates/**/*.hbs')
  .pipe(assemble('my-task', options))
  .pipe(gulp.dest('/dest/'));
```


### Options
See the documentation for [Options](http://assemble.io/docs/Options.html) for more information.

### [assets](http://assemble.io/docs/options-assets.html)
Type: `String`
Default: `undefined`

Used with the `{{assets}}` variable to resolve the relative path from the _dest file_ to the _assets_ folder.

### [data](http://assemble.io/docs/options-data.html)
Type: `String|Array|Object`
Default: `src/data`

Specify the data to supply to your templates. Data may be formatted in `JSON`, `YAML`, [YAML front matter](http://assemble.io/docs/YAML-front-matter.html), or passed directly as an object. Wildcard patterns may also be used.

### [layoutdir](http://assemble.io/docs/options-layoutdir.html)
Type: `String`
Default: `undefined`

The directory to use as the "cwd" for [layouts](http://assemble.io/docs/options-layout.html). When this option is defined, layouts may be defined using only the name of the layout.

### [layout](http://assemble.io/docs/options-layout.html)
Type: `String`
Default: `undefined`

If set, this defines the layout file to use for the [task or target][tasks-and-targets]. However, when specifying a layout, unlike Jekyll, _Assemble requires a file extension_ since you are not limited to using a single file type.

### layoutext
Type: `String`
Default: `undefined`

Specify the extension to use for layouts, enabling layouts in YAML front matter to be defined without an extension:

```yaml
---
layout: default
---
```

### [partials](http://assemble.io/docs/options-partials.html)
Type:  `String|Array`
Default: `undefined`

Specifies the Handlebars partials files, or paths to the directories of files to be used.

### [plugins](http://assemble.io/plugins/)
Type: `String|Array`
Default: `undefined`

Name of the npm module to use and/or the path(s) to any custom plugins to use. Wildcard patterns may also be used.

See the [docs for plugins](http://assemble.io/plugins/).

### [helpers](http://assemble.io/docs/options-helpers.html)
Type: `String|Array`
Default: [handlebars-helpers](http://github.com/assemble/handlebars-helpers)

Name of the npm module to use and/or the path(s) to any custom helpers to use with the current template engine. Wildcard patterns may also be used.

By default, Assemble includes [handlebars-helpers](http://assemble.io/docs/helpers/index.html) as a dependency, so any helpers from that library are already available to be used in your templates.

See the [docs for helpers](http://assemble.io/helpers/).

### [ext](http://assemble.io/docs/options-ext.html)
Type: `String`
Default: `.html`

Specify the file extension for destination files. Example:

### [marked](http://assemble.io/docs/options-marked.html)
Type: `Object`
Default: [Marked.js defaults](https://github.com/chjj/marked#options-1)

Specify the [Marked.js options](https://github.com/chjj/marked#options-1) for the `{{#markdown}}{{/markdown}}` and `{{md ""}}` helpers to use when converting content.

### [engine](http://assemble.io/docs/options-engine.html)
Type: `String`
Default: `Handlebars` 

Specify the engine to use for compiling templates **if you are not using Handlebars**.

**PLEASE NOTE** that _this option is only necessary if_:

a. You **are not using Handlebars**, or
b. You need to "force" Handlebars to recognize a non-default extension. See [extensions.yml](./lib/extensions.yml).

Also see [assemble-swig](https://github.com/assemble/assemble-swig) for compiling [Swig Templates](https://github.com/paularmstrong).


Visit [Assemble's documentation](http://assemble.io) for more information about options.


## Contributing
Find a bug? Have a feature request? Please [create an Issue](git://github.com/assemble/gulp-assemble/issues).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!


## Assemble plugins
Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.

+ [assemble-contrib-anchors](https://github.com/assemble/assemble-contrib-anchors): Assemble plugin for creating anchor tags from generated html. 
+ [assemble-contrib-contextual](https://github.com/assemble/assemble-contrib-contextual): Generates a JSON file containing the context of each page. Basic plugin to help see what's happening in the build. 
+ [assemble-contrib-decompress](https://github.com/assemble/assemble-contrib-decompress): Assemble plugin for extracting zip, tar and tar.gz archives.  
+ [assemble-contrib-download](https://github.com/assemble/assemble-contrib-download): Assemble plugin for downloading files from GitHub. 
+ [assemble-contrib-i18n](https://github.com/assemble/assemble-contrib-i18n): Plugin for adding i18n support to Assemble projects. 
+ [assemble-contrib-lunr](https://github.com/assemble/assemble-contrib-lunr): Assemble plugin for creating a search engine within your static site using lunr.js. 
+ [assemble-contrib-markdown](https://github.com/assemble/assemble-contrib-markdown): HEADS UP! This isn't ready for prime time! Convert markdown files to HTML using marked.js. This plugin is an alternative to Assemble's markdown Handlebars helpers. Both are useful in different scenarios. 
+ [assemble-contrib-permalinks](https://github.com/assemble/assemble-contrib-permalinks): Permalinks plugin for Assemble, the static site generator for gulp.js and Yeoman. This plugin enables powerful and configurable URI replacement patterns, presets, uses Moment.js for parsing dates, and much more. 
+ [assemble-contrib-sitemap](https://github.com/assemble/assemble-contrib-sitemap): Sitemap generator plugin for Assemble 
+ [assemble-contrib-toc](https://github.com/assemble/assemble-contrib-toc): Create a table of contents in the generated HTML, using Cheerio.js 
+ [assemble-contrib-wordcount](https://github.com/assemble/assemble-contrib-wordcount): Assemble plugin for displaying a word-count on blog posts or pages. 

Visit [assemble.io/plugins](http:/assemble.io/plugins/) for more information about [Assemble](http:/assemble.io/) plugins.



## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## Release History

_(Nothing yet)_



## License
Copyright (c) 2014 Assemble, contributors.
Released under the MIT license

***

