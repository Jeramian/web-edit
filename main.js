//Jeremy Eramian 2016
//Javascript Text file reader
/*

create a simple WYSIWYG editor

NEEDS:
	*set divs ID's !IMPORTANT! <note> Use a for loop? and the ID being used for i? </note>
	*menu bar functionality
	*option to center, left, and right align text and Divs <note> Create a context menu element when over div or text that allows you to style </note>
	*create script, allows side-bar menues to float with the user as scrolling occurs !IMPORTANT!
	*Set functionality for div resize tool box
	*Create logic for div resize tool box
	*Create closure for div resize tool box

BUGGS:
	*cannot drag images

*/

function scriptWarn()
{
	console.log('This app requres that Javascript is active in your browser');
}

function broken()
{
	alert('Oops! It seems something has gone wrong');
}

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
var textColor = document.getElementById('style1');

//edit area
var makeEditsArea = document.getElementById('editArea');

//global variables
var paragraph;
var editorSpace;

function divDimeBox()
{
	makeEditsArea = document.getElementById('editArea');
	var input = document.createElement('input');
	var label1 = document.createElement('p');
	var label1Txt = document.createTextNode('Div width:');
	label1.appendChild(label1Txt);
	var label2 = document.createElement('p');
	var label2Txt = document.createTextNode('Div height:');
	label2.appendChild(label2Txt);
	var input2 = document.createElement('input');
	var doneButton = document.createElement('button');
	input2.setAttribute('type', 'text');
	input2.setAttribute('id', 'divHeight');
	input.setAttribute('type', 'text');
	input.setAttribute('id',  'divWidth');
	doneButton.setAttribute('class', 'small button');
	doneButton.setAttribute('id', 'doneDivDime');
	doneButton.innerHTML = 'Done';

	makeEditsArea.appendChild(label1);
	makeEditsArea.appendChild(input);
	makeEditsArea.appendChild(label2);
	makeEditsArea.appendChild(input2);
	makeEditsArea.appendChild(doneButton);
}

function addADiv()
{
	editorSpace = document.getElementById('editorArea');
	var div = document.createElement('div');
	div.setAttribute('class', 'createdDiv');
	
	var divColor = window.prompt('Please enter the divs background color');
	if(divColor == "white")
	{
		div.setAttribute('style', 'background-color:white;');
	}
	else if(divColor == "black")
	{
		div.setAttribute('style', 'background-color:black');
	}
	else if(divColor == "red")
	{
		div.setAttribute('style', 'background-color:red');
	}
	else if(divColor == "blue")
	{
		div.setAttribute('style', 'background-color:blue');
	}
	else if(divColor == "yellow")
	{
		div.setAttribute('style', 'background-color:yellow');
	}
	else if(divColor == "green")
	{
		div.setAttribute('style', 'background-color:green');
	}
	else
	{
		broken();
	}

	editorSpace.appendChild(div);
	$(".createdDiv").draggable();

	$(document).ready(function() {
		$('.createdDiv').contextmenu(function() {
			divDimeBox();
		});
	});
	
	//WORK IN PROGRESS\\
	var setWidth = document.getElementById('divWidth').value;
	var setHeight = document.getElementById('divHeight').value;
	
	if(setWidth > 0 && setHeight > 0)
	{
		div.setAttribute('style', 'width:', setWidth, ';' );
		div.setAttribute('style', 'height', setHeight, ';');
	}
	else
	{
		broken();
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
	if(newColor == "white")
	{
		paragraph.setAttribute('style', 'color:white;');
	}
	else if(newColor == "black")
	{
		paragraph.setAttribute('style', 'color:black;');
	}
	else if(newColor == "red")
	{
		paragraph.setAttribute('style', 'color:red;');

	}
	else if(newColor == "blue")
	{
		paragraph.setAttribute('style', 'color:blue;');
	}
	else
	{
		broken();
	}
	

	editorSpace.appendChild(paragraph);
	$('#regPara').draggable();
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
		heading1.setAttribute('style', 'background-color:white;');
	}
	else if(heading1Color == "black")
	{
		heading1.setAttribute('style', 'color:black');
	}
	else if(heading1Color == "red")
	{
		heading1.setAttribute('style', 'color:red');
	}
	else if(heading1Color == "blue")
	{
		heading1.setAttribute('style', 'color:blue');
	}
	else if(heading1Color == "yellow")
	{
		heading1.setAttribute('style', 'color:yellow');
	}
	else if(heading1Color == "green")
	{
		heading1.setAttribute('style', 'color:green');
	}
	else
	{
		broken();
	}

	editorSpace.appendChild(heading1);
	$('.heading1').draggable();
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
	else if(heading2Color == "black")
	{
		heading2.setAttribute('style', 'color:black');
	}
	else if(heading2Color == "red")
	{
		heading2.setAttribute('style', 'color:red');
	}
	else if(heading2Color == "blue")
	{
		heading2.setAttribute('style', 'color:blue');
	}
	else if(heading2Color == "yellow")
	{
		heading2.setAttribute('style', 'color:yellow');
	}
	else if(heading2Color == "green")
	{
		heading2.setAttribute('style', 'color:green');
	}
	else
	{
		broken();
	}

	editorSpace.appendChild(heading2);
	$('.heading2').draggable();
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
	else if(heading3Color == "black")
	{
		heading3.setAttribute('style', 'color:black');
	}
	else if(heading3Color == "red")
	{
		heading3.setAttribute('style', 'color:red');
	}
	else if(heading3Color == "blue")
	{
		heading3.setAttribute('style', 'color:blue');
	}
	else if(heading3Color == "yellow")
	{
		heading3.setAttribute('style', 'color:yellow');
	}
	else if(heading3Color == "green")
	{
		heading3.setAttribute('style', 'color:green');
	}
	else
	{
		broken();
	}

	editorSpace.appendChild(heading3);
	$('.heading3').draggable();
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
	if(heading4Color == "white")
	{
		heading4.setAttribute('style', 'color:white;');
	}
	else if(heading4Color == "black")
	{
		heading4.setAttribute('style', 'color:black');
	}
	else if(heading4Color == "red")
	{
		heading4.setAttribute('style', 'color:red');
	}
	else if(heading4Color == "blue")
	{
		heading4.setAttribute('style', 'color:blue');
	}
	else if(heading4Color == "yellow")
	{
		heading4.setAttribute('style', 'color:yellow');
	}
	else if(heading4Color == "green")
	{
		heading4.setAttribute('style', 'color:green');
	}
	else
	{
		broken();
	}

	editorSpace.appendChild(heading4);
	$('.heading4').draggable();
}

function addAImage()
{
	editorSpace = document.getElementById('editorArea');
	var image = document.createElement('img');
	var imageURL = window.prompt('Please enter the images url or path');
	image.setAttribute('src', imageURL);
	image.setAttribute('class', 'image1');

	editorSpace.appendChild(image);
	$('.image1').draggable();
	$('.image1').resizable();
}