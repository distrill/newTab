newTab
======
simple new tab page and i think it looks clean. muh ricing.

please note; in order to detect urls, the search bar only looks for a '.' as the third- or fourth-from-end character.
  \tmost domains will be fine (anything.com, anythingelse.co, etc)
  \tif there is more to the url after that, put the letter 'l' before the search
   \t\t i.e. "github.com/distrill/newTab" will point you toward a google search for that term.
    \t\thowever, "l github.com/distrill/newTab" will force it as a url.

also, because of this, if you try to search for something that ends with '.' followed by two or three characters, it will try to force into a url
  to get around this, place an 's' before the querry to force as a search
    i.e. "firefox userChrome.css" will try to take you to that url, which doesn't exist.
    however, "s firefox userChrome.css" will force it as a search.
  
finally, i've tried to mimik chrome's whole thing where you can type "www.youtube.com" followed by a search to directly search youtube.
i've added functionality for searching:
  youtube (just type the word 'youtube' first)
  google image search (just type the word 'image' first)
  wikipedia (just type the word 'wiki' first.
    please note that the wiki is not as clean as the others. if the page exists it will take you to that page. otherwise it will take you to relavent search results.
