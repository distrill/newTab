function openOrSearch()
{
    var x = document.getElementById("where_to");
    // var text = "http://" + x.value;
    var text = x.value;
    if( text[ text.length - 3 ] === '.' || text[ text.length - 4 ] === '.' )
    {
        var destination = "http://" + text;
        window.open( destination, "_self" );
    }
    else
    {
        var destination = "https://www.google.ca/#safe=off&q=" + text;
        window.open( destination, "_self" );
    }
}

function openAll()
{
    window.open( "http://www.8chan.co/tv", "_self" );
    window.open( "http://www.8chan.co/prog" );
    window.open( "http://www.reddit.com" );
    window.open( "http://www.8chan.co/tech");
}
