newTab
======
simple new tab page and i think it looks clean.

please note; in order to detect urls, the search bar only looks for a '.' as the third- or fourth-from-end character.<br>
  &nbsp;&nbsp;&nbsp;.most domains will be fine (anything.com, anythingelse.co, etc)<br>
  &nbsp;&nbsp;&nbsp;.if there is more to the url after that, put the letter 'l' before the search<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -i.e. "github.com/distrill/newTab" will point you toward a google search for that term.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -however, "l github.com/distrill/newTab" will force it as a url.<br>

also, because of this, if you try to search for something that ends with '.' followed by two or three characters, it will try to force into a url<br>
  &nbsp;&nbsp;&nbsp;.to get around this, place an 's' before the querry to force as a search<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -i.e. "firefox userChrome.css" will try to take you to that url, which doesn't exist.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-however, "s firefox userChrome.css" will force it as a search.<br>
  
finally, i've tried to mimik chrome's whole thing where you can type "www.youtube.com" followed by a search to directly search youtube.<br>
i've added functionality for searching:<br>
  &nbsp;&nbsp;&nbsp;.youtube (just type the word 'youtube' first)<br>
  &nbsp;&nbsp;&nbsp;.google image search (just type the word 'image' first)<br>
  &nbsp;&nbsp;&nbsp;.wikipedia (just type the word 'wiki' first.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -please note that the wiki is not as clean as the others. if the page exists it will take you to that page. otherwise it will take you to relavent search results.<br>
