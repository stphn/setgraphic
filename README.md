# Jekyllplate
[![Dependencies](https://david-dm.org/stphn/Jekyllplate.svg)](https://david-dm.org/stphn/Jekyllplate#info=dependencies)
[![Build status](https://ci.appveyor.com/api/projects/status/h12tdfowqiwl7mrf?svg=true)](https://ci.appveyor.com/project/stphn/jekyllplate)
[![Build Status](https://travis-ci.org/stphn/jekyllplate.svg?branch=master)](https://travis-ci.org/stphn/jekyllplate)


Not just another boilerplate for static Jekyll sites using gulp automations.


![http://setgraphic.com/signature/logo-jekyll.svg](http://setgraphic.com/signature/logo-jekyll.svg)


This boilerplate includes common useful gulp tasks, auto-reload with BrowserSync and  ES6 modules from webpack.


## Pre-requisites

- [Node.js](http://nodejs.org/)
- [Gulp](http://gulpjs.com/)
- [Ruby](https://www.ruby-lang.org)

## Installation

Make sure you **double-checked** the pre-requisites listed above and open your command line interface ...

```
$ git clone https://github.com/stphn/jekyllplate.git

// go inside the folder
$ cd jekillplate

// install other dependencies
$ npm start

// start the file watching
$ gulp serve
```
 et voilà

### Writing Posts
To add new drafts, add a file in the `posts/_drafts` directory that follows the naming convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary YAML front matter:

    ---
    layout: post
    title:  Example draft
    date:   2017-01-01 00:00:00 +0000
    categories: example
    tags: example-tag
    ---

Once you're ready to publish this draft, move the file to `posts/_posts`.

### Creating Pages
Create new pages in the root directory (or pretty much any subdirectory). The filename will form part of the URL.

Pages will need [front matter](https://jekyllrb.com/docs/frontmatter/) as well, for example:

    ---
    layout: default
    title: Example Page
    permalink: /examples/
    nav: true
    ---

Only pages with `nav` set to `true` will appear in the top navigation. Easy.

## Deployment
This is automatically ready to deploy, so long as the `gulp` server has been running during development.

Built code lives in the `_site` directory. Deploy this to the `prod` branch with `gulp deploy`.

### Thanks and credits
Tobias Reich for is inspiring work

### Still todo
*  Include Open Graph protocols
*  cleaning up
*  and probably a lot more ...
