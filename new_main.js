//Jeremy Eramian 2016
//Javascript Text file reader
/*

create a simple WYSIWYG editor

NOTES:
	1.MAINTAIN CODE EDQ, when the code is complete, it should be beautiful, as well as the final product functional to the needs of the user.
	2.Look into simplier jquery and functions, try to compress as much as possible, save the user some loding time would ya.
	3.Useablility and functionality go hand in hand!!
	4.Be sure to change the names of buttons on Alpha, they would be very confusing to the user (they are in HTML terms).

NEEDS:
	*menu bar functionality !PHP!
	*option to center, left, and right align text and Divs <note> Create a context menu element when over div or text that allows you to style </note>
	*Layer box, allowing the user to lock, unlock, and delete layers.
	*Error messgaes.
	*User login !PHP!
	*Set up media quieries for sidebars.
    *Set divs to always be created behind all other elements

BUGGS:
	*cannot drag images
	*once element is locked into place, the element can no longer be moved. !IMPORTANT!

*/

//Error codes\\
var errorCode1 = new Error('The page was not able to process your request');
var errorCode2 = new Error('The selected item does not seem to exist');
var errorCode3 = new Error('The entry given did not meet the requirments');

//Main Navigation Bar\\
var menuOp1 = document.getElementById('menuop1');
var menuOp2 = document.getElementById('menuop2');
var menuOp3 = document.getElementById('menuop3');

//Elements Menu\\
var addDiv = document.getElementById('add1');
var addText = document.getElementById('add2');
var addHeading = document.getElementById('add3');
var addHeading2 = document.getElementById('add3.1');
var addHeading3 = document.getElementById('add3.2');
var addHeading4 = document.getElementById('add3.3');
var addImage = document.getElementById('add4');

//Main Editor Area\\
var editorSpace = document.getElementById('editorArea');

//Style Menu\\
var editorSpace = document.getElementById('editorArea');

//global variables\\
var paragraph;
var editorSpace;
var div;
var deleteButton;
var lockButton;

//Element Color Prompts\\
var divColor;
var ParaColor;
var Heading1Color;
var Heading2Color;
var Heading3Color;
var Heading4Color;

function createADiv()
{
    editorSpace = document.getElementById('editorArea');
    div = document.createElement('div');
    div.setAttribute('class', 'createdDiv');   
    editorSpace.appendChild(div);
    
    divColor = window.prompt('Please enter the divs background-color');
    
    if(divColor == "black" || "Black")
    {
        div.setAttribute('style', 'background-color:black;');
    }
    else if(divColor == "white" || "White")
    {
        div.setAttribute('style', 'background-color:white;');
    }
    else if(divColor == "red" || "Red")
    {
        div.setAttribute('style', 'background-color:red;');
    }
    else if(divColor == "blue" || "Blue")
    {
        div.setAttribute('style', 'background-color:blue;');
    }
    else if(divColor == "yellow" || "Yellow")
    {
        div.setAttribute('style', 'background-color:yellow;');
    }
    else if(divColor == "green" || "Green")
    {
        div.setAttribute('style', 'background-color:green;');
    }
    else
    {
        div.setAttribute('style', 'background-color:white;');
    }
}