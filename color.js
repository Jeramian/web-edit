//Jeremy Eramian 2016
//Javascript Text file reader
/*

create a simple WYSIWYG editor

Notes:
    Type:
        Blues
        Reds
        Greens
    Highlighter:
        Yellow
        Pink
        Blue

NEEDS:
    *create script that allows an color or hex code to be given to spcify a color of any element
    *Colors

BUGGS:
*/

function colorBox()
{
    var colorBoxButton = document.createElement('button');
    var colorBtnText = colorBoxButton.innerHTML = 'Text color selection';
    colorBoxButton.appendChild(colorBtnText);
}