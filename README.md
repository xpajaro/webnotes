# webnotes
Take notes on web pages.

I love Reddit. I'm a voyeur like millions of other internet users (I think). I usually want to see what people think about the content I'm reading. Sometimes, I have something useful to add: maybe a reference to a related article, a helpful thought, a smiley face...

Webnotes is my attempt to bring commenting to every page on the internet with textual information. This is my first take on the problem: let an internet user make his own notes on a web page he's sure to visit later. Webnotes is a chrome extension.

Webnotes will eventually let you read what other people think about that interesting paragraph. It will start with presenting you with comments from people you already trust and maybe one day evolve to letting you see both sides of an arugment to help deal with the confirmation bias that's sweeping the world today. Facebook only shows me what they think I like but if I'm learning something new, I'd rather have a wholesome perspective and I'm hoping you will come to care about that too. 


HOW TO USE IT:
- select some text
- right click and choose the 'Add note' option
- Add and save your note or not.

If you added a note, whenever you open that page it's there.


PIPELINE:
- I'm currently working on a page that lets you see your awesome note taking history.
- Icons.
- Mulling on a cooler name.


TODO:
- TESTS!
- I need to work on some hashing handler for when pages change...
- I need to work on a vanilla sharing component. 
- I need to work on an AWS backend for handling user accounts/interaction.
- I need to start a release / feature / bugfix scheme once the basics are done.


HOW TO READ THE CODE:
This is my first Chrome extension. It's been fun and I welcome ideas on making Webnotes better.
Chrome extensions work from two points: 
- the background - It's like a backend for your own fancy presentation and logic.
- the content - You interact with the pages in the tabs on the browser.
 
The code is pretty simple. Just follow main.js in either folder. I've made sure nothing happens that doesn't begin there.

