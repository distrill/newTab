/*

    author:         arthurKN (2014)
    checkit:        http://github.com/distrill

*/

function openOrSearch()
{
    var x = document.getElementById("where_to");
    var text = x.value;
    var words = text.split( " " );
    var destination = "";
    switch( words[ 0 ])
    {
        case 'l':
            destination = "http://" + words[ 1 ];
            window.open( destination, "_self" );
            break;
        case 's':
            destination = "https://www.google.ca/#safe=off&q=";
            for( var i = 1; i < words.length; i++ )
            {
                destination += words[ i ];
                destination += "+";
            }
            window.open( destination, "_self" );
            break;
        case 'youtube':
            destination = 'https://www.youtube.com/results?search_query=';
            for( var i = 1; i < words.length; i++ )
            {
                destination += words[ i ];
                destination += "+";
            }
            window.open( destination, "_self" );
            break;
        case 'image':
            destination = 'https://www.google.ca/search?site=&tbm=isch&source=hp&biw=1568&bih=769&q=';
            for( var i = 1; i < words.length; i++ )
            {
                destination += words[ i ];
                destination += "+";
            }
            window.open( destination, "_self" );
            break;
         case 'wiki':
            destination = 'http://en.wikipedia.org/w/index.php?search=';
            for( var i = 1; i < words.length; i++ )
            {
                destination += words[ i ];
                destination += "+";
            }
            window.open( destination, "_self" );
            break;
        default:
            if( text[ text.length - 3 ] === '.' || text[ text.length - 4 ] === '.' )
            {
                destination = "http://" + text;
                window.open( destination, "_self" );
            }
            else
            {
                destination = "https://www.google.ca/#safe=off&q=" + text;
                window.open( destination, "_self" );
            }
            break;
    }
    
}




function openAll()
{
    window.open( "http://www.8chan.co/tv", "_self" );
    window.open( "http://www.8chan.co/prog" );
    window.open( "http://www.reddit.com" );
    window.open( "http://www.8chan.co/tech");
}
