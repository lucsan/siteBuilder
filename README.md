# 💎 ✨ Site Builder ✨ 💎

💡 Static Site Builder - 💎 - _because your site needs to be SEO slick_.

A node based static page site generator which creates html files from template html files.

# ⚙ Constructing a static site

_(so you've decided to build a static website, yay, ✨)_

Clone the pre-constructed build mode from git https://github.com/lucsan/siteBuilder

It is an idea to clone with the name of your new site eg: `git clone git@github.com:lucsan/sitebuilder.git myProject` as this will save you having to rename your project folder at a later point in time🕕.

You should now have the demo site set in 3 folders. Your site components (html files) are organized into __3__ main folders: `templates`, `data`, and `assets`. You should also have a package.json which is used by npm to load the site generator.

 _use_ `npm install` to install the generator.

This will install simpstacgene in the node_modules folder and create a `config.js` in the root of your project.

The `package.json` file should already be configured:
- _use_ `npm run build`,  to build the site files
- _use_ `npm run assets` to add your assets (css, images, etc) to the web root.
- _use_ `npm run build-assets` to do both the above with one command.

_(You can also use `node node_modules\\simpstacgene\\engine\\engine.js`, and `node node_modules\\simpstacgene\\engine\\copyAssets.js`)._

### 🧬 Templates

Templates contain (and may be contained by) other templates, and may contain snips (which are just small chunks of html (ie: small templates) which probably don't contain anything else, though they can).

Templates must be named `_tpl.html` for example: `home_tpl.html`

You can give a template some simple instructions, for example:

```
---
  contained | site_main
  page | index
  title | Home Page
  contains | data.aList
---
```
_Note: these are all the instructions_

In the example above, `contained | site_main` means the file with this instruction in it, will be contained, inside `site_main_tpl.html` at the point where the special token `{{ contains }}` is stamped into `site_main_tpl.html`.

Generally you will want a mega-container template such as `demo/templates/site_main_tpl.html` to provide site common elements such as the main navigation and site banner.

This file will most likely have some 🎟tokens such as `{{ menu }}` and `{{ banner }}` and of course `{{ contains }}`, stuff which you will want on all your pages, but, will probably not contain any instructions.

The `page | index` instruction means the page will be called `index.html` when it is generated, which is to say, a file called index.html will be created in the web root (portal) made from the instructing, and the mega-container templates combined together.

`title | A Title` tells the mega-container template what to call this page (its title)

The instructing template may contain other templates by using tokens which we will look at next, it may also contain a list of templates, for example a gallery of pictures, this comes from the `data` folder, an explanation of which, we will arrive at shortly.

##### 🎟 tokens

Tokens refer to other templates or snips, they are referenced using the name of the file without the `_tpl.html`, so `{{ menu }}` refers to `menu_tpl.html` (which may be in either the template or snips folder)

There is one special token, `{{ contains }}` which is used either in a page which is referred to by an instruction page, the instruction `contained | site_main`, expects a `{{ contains }}` token to be in site_main_tpl.html.

THe instruction contains | data.aList expects to find the {{ contains }} token is the same page (see templates/aList_tpl.html)

##### ✂ snips

Snips is just an organizational folder inside the templates folder, you can add as many organizational folders to the templates folder as you like to organize things to your liking.

### 🧺 data

The data folder contains lists or collections of templates which are intended to be displayed in groups, the instruction `contains | data.aList` means, find all the templates in folder `data/aList`, and  stamp them into the instructing template at the point where the token `{{ contains }}` exists.

_note: if you have a mega-container it puts the contents of instruction pages with the `contained |` instruction, sooo, they shouldn't also refer to data lists._

### 🎎 assets

The contents of the assets folder is copied to the web root in it's entirety, with the exception of folders listed in the `assetFolderExcludes` config array (the details of which we will cover in the next section.)

This is where you put all the assets your site needs, ie: css files, images and other media.

#### 📃 Config.js

You may wish to call your web root something different than `portal`, change the value of `htmlRoot` to your favorite web root.

You may not like to have your site additional files in a folder called `assets`, change the assetsRoot value.

You may have files or folders you do not want copied from your assets folder to your web root, add them to the `assetFolderExcludes` values array - eg: `['less', 'doNotUse']`
```javascript
exports.values = () => {
  return {
    htmlRoot: 'portal',
    assetsRoot: 'assets',
    assetFolderExcludes: ['less']
  }
}
```

### configuring package.json

You can add the following to the scripts section of package.json and use `npm run build` and `npm run assets`

```javascript
"build":  "node node_modules\\simpstacgene\\engine\\engine.js",
"assets": "node node_modules\\simpstacgene\\engine\\copyAssets.js",
```
### 📝 note
Site Builder (Simple Static Site Builder), uses SimpStacGene (Simple Static Site Generator), which can be found at https://github.com/lucsan/simpstacgene
