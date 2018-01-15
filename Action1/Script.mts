
'SystemUtil.Run "IExplore.exe", "http://www.google.com"
wait 2
'Browser("Browser").Page("Page1").WebEdit("WebEdit").Set "Mokter Hossain"
Browser("Google").Page("GooglePage").WebEdit("SearchWebEdit").Set "Mokter Hossain"

wait 2

'Browser("Browser").Page("Page1").WebButton("WebButtton").Click

Browser("Google").Page("GooglePage").WebButton("GoogleSearchWebButton").Click


wait 2

Browser("Google").Page("Mokter Hossain - GooglePage").Link("Mokter Hossain - GoogleLink").Click

WAIT 5

Browser("Google").Page("Mokter Hossain - Google_2").Image("Mokter HossainImage").Click

WAIT 5

Browser("Google").Page("Mokter Hossain - Google_2").Link("WebLink").Click

WAIT 5

Browser("Google").Close


