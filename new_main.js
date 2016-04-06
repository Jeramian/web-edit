//Jeremy Eramian 2016
//Javascript Text file reader
/*

create a simple WYSIWYG editor

NOTES:
	1.MAINTAIN CODE EDQ, when the code is complete, it should be beautiful, as well as the final product functional to the needs of the user.
	2.Look into simplier jquery and functions, try to compress as much as possible, save the user some loding time would ya.
	3.Useablility and functionality go hand in hand!!
	4.Be sure to change the names of buttons on Alpha, they would be very confusing to the user (they are in HTML terms).
    5.Need to find a way to reduce the amount of functions going on there before we move things over to the react platform
        the reality is all these functions having to be loaded by the page WILL slow it down, even though they do not all fire at once it is still a hastle.

NEEDS:
	*menu bar functionality !PHP!
	*option to center, left, and right align text and Divs <note> Create a context menu element when over div or text that allows you to style </note>
	*Layer box, allowing the user to lock, unlock, and delete layers.
	*Error messgaes.
	*User login !PHP!
	*Set up media quieries for sidebars.
    *Set divs to always be created behind all other elements
    *Add elements name to their layer box
    *All elements to obtain unique id
    *REQUIRMENTS DOCUMENT
    *Sub menu for each element to set properties.
        - Used for sizing and coloration of the element, EX: Text color or font size, Div color.

BUGGS:
	*cannot drag images
	!FIXED! *once element is locked into place, the element can no longer be moved. !IMPORTANT!
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
var whatElement;
var layer;
var divELement;
var guid;

$('#' + guid).draggable({ disabled: true });

function generateId()
{
    function S4()
    {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

function secondUnlockedStage()
{
    $('#' + guid).click(function() {
       $(this).draggable(); 
    });
}

function secondLockStage()
{
    $('#', + guid).dblclick(function() {
       $(this).draggable('disable'); 
    });
}

function selectMe()
{
    $('#' + guid).click(function(){
        $(this).toggleClass('selected');
       
        if($('#' + guid).hasClass('selected'))
        {
            $(this).draggable();
        }
        else
        {
            $(this).draggable({ disabled: true });   
        }
    });
}

function createADiv()
{
    generateId();
    editorSpace = document.getElementById('editorArea');
	div = document.createElement('div');
	div.setAttribute('class', 'createdDiv');
    div.setAttribute('id', guid);
    divELement = 'createdDiv';

	var divColor = window.prompt('Please enter the divs background color').toLowerCase();
	if(divColor === "white")
	{
		div.setAttribute('style', 'background-color:white;');
	}
	else if(divColor === "black")
	{
		div.setAttribute('style', 'background-color:black');
	}
	else if(divColor === "red")
	{
		div.setAttribute('style', 'background-color:red');
	}
	else if(divColor === "blue")
	{
		div.setAttribute('style', 'background-color:blue');
	}
	else if(divColor === "yellow")
	{
		div.setAttribute('style', 'background-color:yellow');
	}
	else if(divColor === "green")
	{
		div.setAttribute('style', 'background-color:green');
	}
	else
	{
		div.setAttribute('style', 'background-color:white;');
	}

	editorSpace.appendChild(div);

    selectMe();
}

function createAPara()
{
    editorSpace = document.getElementById('editorArea');
    paragraph = document.createElement('p');
    var textForPara = window.prompt('Please enter your paragraphs text').toLowerCase();
    if(textForPara.length > 0)
    {
        var paraNode = document.createTextNode(textForPara);
        paragraph.appendChild(paraNode);
    }
    else
    {
        throw errorCode3;
    }
    paragraph.setAttribute('id', 'regPara');
    whatElement = '#regPara';

    var paraColor = window.prompt('Please enter your desired text color');
    if(paraColor === "white")
    {
        paragraph.setAttribute('style', 'color:white;');
    }
    else if(paraColor === "black")
	{
		paragraph.setAttribute('style', 'color:black;');
	}
	else if(paraColor === "red")
	{
		paragraph.setAttribute('style', 'color:red;');

	}
	else if(paraColor === "blue")
	{
		paragraph.setAttribute('style', 'color:blue;');
	}
	else
	{
		paragraph.setAttribute('style', 'color:black;');
	}

    editorSpace.appendChild(paragraph);
    
    secondLockStage();
    secondUnlockedStage();
    
}

//TESTING\\

//Even with the trigger on, the event does not fire.
function secondaryMenuTST()
{
    addDiv.addEventListener("dblclick", function(){alert('Working!');});
}

function colorPickerBox()
{
    var createBox = document.createElement('div');
    createBox.setAttribute('class', 'colorBox');
}