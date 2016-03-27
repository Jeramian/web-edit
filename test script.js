//Jeremy Eramian 2016
//Browser Testing

function consoleError()
{
	console.log("Something has gone wrong, please contact an administrator");
}
function consoleSuccess()
{
	console.log("The test was a success!");
}
function testComplete()
{
	console.log("Test(s) have completed");
}
function testPass()
{
	console.log("Test(s) have passed");
}
function testFail()
{
	console.log("Test(s) have failed");
}

var codename = window.navigator.appCodeName

function localStorageTest()
{
	try
	{
		if(localStorage !== 'undefined')
		{
			testPass();
		}
	}
	catch(err)
	{
		testFail();
	}
	finally
	{
		testComplete();
	}
}

function getBrowser()
{
	console.log(codename);
}