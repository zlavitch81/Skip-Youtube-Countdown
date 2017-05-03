
var ytskip = function ()
{
	if (document.getElementsByClassName('ytp-time-current')[0].innerHTML != document.getElementsByClassName('ytp-time-duration')[0].innerHTML)
	{
		setTimeout(function ()
		{
			ytskip()
		}, 1e3)
	}
	else if (document.getElementsByClassName('ytp-time-current')[0].innerHTML === document.getElementsByClassName('ytp-time-duration')[0].innerHTML)
	{
		document.getElementsByClassName('ytp-upnext-autoplay-icon')[0].click();
		setTimeout(function ()
		{
			ytskip()
		}, 1e3);
		
	}
};
ytskip()
