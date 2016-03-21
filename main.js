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

var errorCode1 = new Error('The page was not able to process your request');
var errorCode2 = new Error('The selected item does not seem to exist');
var errorCode3 = new Error('The entry given did not meet the requirments');

//main navigation bar
var menuOp1 = document.getElementById('menuop1');
var menuOp2 = document.getElementById('menuop2');
var menuOp3 = document.getElementById('menuop3');

//elements menu
var addDiv = document.getElementById('add1');
var addText = document.getElementById('add2');
var addHeading = document.getElementById('add3');
var addHeading2 = document.getElementById('add3.1');
var addHeading3 = document.getElementById('add3.2');
var addHeading4 = document.getElementById('add3.3');
var addImage = document.getElementById('add4');

//editor area
var editorSpace = document.getElementById('editorArea');

//style menu
var editorSpace = document.getElementById('editorArea');

//edit area
var makeEditsArea = document.getElementById('editArea');

//global variables
var paragraph;
var editorSpace;
var div;
var deleteButton;
var lockButton = document.getElementById('lock');


function addADiv()
{
	editorSpace = document.getElementById('editorArea');
	div = document.createElement('div');
	div.setAttribute('class', 'createdDiv');
	div.setAttribute('id', 'activeDiv');

	var divColor = window.prompt('Please enter the divs background color');
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

	var laymen = document.getElementById('layers');
	var divLayer = document.createElement('div');
	var divLock = document.createElement('img');
	var divDeleter = document.createElement('img');
    var DivlayerName = document.createElement('p');
    var DivlayerNameTxt = document.createTextNode('Div')
	divDeleter.setAttribute('src', 'trash.png');
	divDeleter.setAttribute('id', 'trash');
	divLock.setAttribute('src', "locked.png");
	divLock.setAttribute('id', 'lock');
	divLayer.setAttribute('class', 'div');
    DivlayerName.appendChild(DivlayerNameTxt);
	divLayer.appendChild(divLock);
	divLayer.appendChild(divDeleter);
    divLayer.appendChild(DivlayerName);

	if($('#activeDiv').length > 0)
	{
		laymen.appendChild(divLayer);
		changeDivLockImage();
	}
	else
	{
		throw errorCode2;
	}
}

function addAPara()
{
	editorSpace = document.getElementById('editorArea');
	paragraph =  document.createElement('p');
	var textForPara = window.prompt('Please enter text');
	var paraNode = document.createTextNode(textForPara);
	paragraph.appendChild(paraNode);
	paragraph.setAttribute('id', 'regPara');

	var newColor = window.prompt('Please enter a color value');
	if(newColor === "white")
	{
		paragraph.setAttribute('style', 'color:white;');
	}
	else if(newColor === "black")
	{
		paragraph.setAttribute('style', 'color:black;');
	}
	else if(newColor === "red")
	{
		paragraph.setAttribute('style', 'color:red;');

	}
	else if(newColor === "blue")
	{
		paragraph.setAttribute('style', 'color:blue;');
	}
	else
	{
		paragraph.setAttribute('style', 'color:black;');
	}

	editorSpace.appendChild(paragraph);

	var laymen = document.getElementById('layers');
	var paraLayer = document.createElement('div');
	var paraLock = document.createElement('img');
	var paraDeleter = document.createElement('img');
	paraDeleter.setAttribute('src', 'trash.png');
	paraDeleter.setAttribute('id', 'trash');
	paraLock.setAttribute('src', "locked.png");
	paraLock.setAttribute('id', 'lock');
	paraLayer.setAttribute('class', 'para');
	paraLayer.appendChild(paraLock);
	paraLayer.appendChild(paraDeleter);

	if($('#regPara').length > 0)
	{
		laymen.appendChild(paraLayer);
		changeParaLockImage();
	}
	else
	{
		throw errorCode2;
	}
}

function addAHeading()
{
	editorSpace = document.getElementById('editorArea');
	var heading1 = document.createElement('h1');
	var textForHeading1 = window.prompt('Please enter your heading');
	var headNode = document.createTextNode(textForHeading1);
	heading1.appendChild(headNode);
	heading1.setAttribute('class', 'heading1');

	var heading1Color = window.prompt('Please enter the heading color');
	if(heading1Color == "white")
	{
		heading1.setAttribute('style', 'color:white;');
	}
	else if(heading1Color === "black")
	{
		heading1.setAttribute('style', 'color:black');
	}
	else if(heading1Color === "red")
	{
		heading1.setAttribute('style', 'color:red');
	}
	else if(heading1Color === "blue")
	{
		heading1.setAttribute('style', 'color:blue');
	}
	else if(heading1Color === "yellow")
	{
		heading1.setAttribute('style', 'color:yellow');
	}
	else if(heading1Color === "green")
	{
		heading1.setAttribute('style', 'color:green');
	}
	else
	{
		heading1.setAttribute('style', 'color:black');
	}

	editorSpace.appendChild(heading1);

	$('.heading1').click(function() {
		$(this).draggable();
	});

	$('.heading1').dblclick(function() {
		$(this).draggable('disable');
	});

	$('.heading1').contextmenu(function() {
		$(this).remove();
	});

}

function addAHeading2()
{
	editorSpace = document.getElementById('editorArea');
	var heading2 = document.createElement('h2');
	var textForHeading2 = window.prompt('Please enter your heading');
	var head2Node = document.createTextNode(textForHeading2);
	heading2.appendChild(head2Node);
	heading2.setAttribute('class', 'heading2');

	var heading2Color = window.prompt('Please enter the heading color');
	if(heading2Color == "white")
	{
		heading2.setAttribute('style', 'color:white;');
	}
	else if(heading2Color === "black")
	{
		heading2.setAttribute('style', 'color:black');
	}
	else if(heading2Color === "red")
	{
		heading2.setAttribute('style', 'color:red');
	}
	else if(heading2Color === "blue")
	{
		heading2.setAttribute('style', 'color:blue');
	}
	else if(heading2Color === "yellow")
	{
		heading2.setAttribute('style', 'color:yellow');
	}
	else if(heading2Color === "green")
	{
		heading2.setAttribute('style', 'color:green');
	}
	else
	{
		heading2.setAttribute('style', 'color:black');
	}

	editorSpace.appendChild(heading2);

	$('.heading2').click(function() {
		$(this).draggable();
	});

	$('.heading2').dblclick(function() {
		$(this).draggable('disable');
	});

	$('.heading2').contextmenu(function() {
		$(this).remove();
	});
}

function addAHeading3()
{
	editorSpace = document.getElementById('editorArea');
	var heading3 = document.createElement('h3');
	var textForHeading3 = window.prompt('Please enter your heading');
	var head3Node = document.createTextNode(textForHeading3);
	heading3.appendChild(head3Node);
	heading3.setAttribute('class', 'heading3');

	var heading3Color = window.prompt('Please enter the heading color');
	if(heading3Color == "white")
	{
		heading3.setAttribute('style', 'color:white;');
	}
	else if(heading3Color === "black")
	{
		heading3.setAttribute('style', 'color:black');
	}
	else if(heading3Color === "red")
	{
		heading3.setAttribute('style', 'color:red');
	}
	else if(heading3Color === "blue")
	{
		heading3.setAttribute('style', 'color:blue');
	}
	else if(heading3Color === "yellow")
	{
		heading3.setAttribute('style', 'color:yellow');
	}
	else if(heading3Color === "green")
	{
		heading3.setAttribute('style', 'color:green');
	}
	else
	{
		heading3.setAttribute('style', 'color:black');
	}

	editorSpace.appendChild(heading3);

	$('.heading3').click(function() {
		$(this).draggable();
	});

	$('.heading3').dblclick(function() {
		$(this).draggable('disable');
	});

	$('.heading3').contextmenu(function() {
		$(this).remove();
	});
}

function addAHeading4()
{
	editorSpace = document.getElementById('editorArea');
	var heading4 = document.createElement('h4');
	var textForHeading4 = window.prompt('Please enter your heading');
	var head4Node = document.createTextNode(textForHeading4);
	heading4.appendChild(head4Node);
	heading4.setAttribute('class', 'heading4');

	var heading4Color = window.prompt('Please enter the heading color');
	if(heading4Color === "white")
	{
		heading4.setAttribute('style', 'color:white;');
	}
	else if(heading4Color === "black")
	{
		heading4.setAttribute('style', 'color:black');
	}
	else if(heading4Color === "red")
	{
		heading4.setAttribute('style', 'color:red');
	}
	else if(heading4Color === "blue")
	{
		heading4.setAttribute('style', 'color:blue');
	}
	else if(heading4Color === "yellow")
	{
		heading4.setAttribute('style', 'color:yellow');
	}
	else if(heading4Color === "green")
	{
		heading4.setAttribute('style', 'color:green');
	}
	else
	{
		heading4.setAttribute('style', 'color:black');
	}

	editorSpace.appendChild(heading4);

	$('.heading4').click(function() {
		$(this).draggable();
	});

	$('.heading4').dblclick(function() {
		$(this).draggable('disable');
	});

	$('.heading4').contextmenu(function() {
		$(this).remove();
	});
}

function addAImage()
{
	editorSpace = document.getElementById('editorArea');
	var image = document.createElement('img');
	var imageURL = window.prompt('Please enter the images url or path');
	image.setAttribute('src', imageURL);
	image.setAttribute('class', 'image1');

	editorSpace.appendChild(image);

	$('.image1').click(function() {
		$(this).draggable();
		$(this).resizable();
	});

	$('.image1').dblclick(function() {
		$(this).draggable('disable');
		$(this).resizable('disable');
	});

	$('.image1').contextmenu(function() {
		$(this).remove();
	});
}

function changeDivLockImage()
{
	$('#lock').click(function() {
		$(this).attr('src', "unlocked.png");
		$('.createdDiv').draggable();
		$('.createdDiv').resizable();
	});

	$('#lock').dblclick(function() {
		$(this).attr('src', "locked.png");
		$('.createdDiv').draggable('disable');
		$('.createdDiv').resizable('disable');
	});
    
    $('#trash').click(function() {
        $('.createdDiv').remove();
        $('.div').remove();
	});
}

function changeParaLockImage()
{
	$('#lock').click(function() {
		$(this).attr('src', "unlocked.png");
		$('#regPara').draggable();
	});

	$('#lock').dblclick(function() {
		$(this).attr('src', "locked.png");
		$('#regPara').draggable('disable');
	});
    
    $('#trash').click(function() {
       $('#regPara').remove();
       $('.para').remove();
    });
}
