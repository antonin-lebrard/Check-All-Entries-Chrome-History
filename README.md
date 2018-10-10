# Check All Entries Chrome History

Add a button to the chrome history page (chrome://history/), to check all entries currently loaded on the page

![Showcase the button added in the chrome history page](https://github.com/antonin-lebrard/Check-All-Entries-Chrome-History/raw/master/showcase.gif)


To make it work, you will have to enable a dangerous flag in the chrome://flag page, this one precisely:<br>
`chrome://flags/#extensions-on-chrome-urls`

This lets chrome extensions inject some bits of code into every settings page of chrome (including history, bookmarks, extension, ... page of chrome).<br>
So this can be nasty: <b>use at your own risks</b>, verify what extension you use, and trust only open source ones where the community still lives enough to watch for the changes inside it (you do not want a crypto miner in all possible page of your browser)

After that, chrome will tell you at each start that the flag you have enabled is bad for the security of your browser.

But if you want it to be a little bit more understanding, and let you surf on the wave of insecurity, you can add the parameter `--test-type` to the command line launching chrome, and it will never appear again!

(To edit the way chrome is launched, there are so many ways for so many different OSes, that listing even one will be an affront to all user of every other OSes, so I will let you search by yourself for this, just don't lose yourself on the neverending flow of tutorials !)

After all of this you can finally <b>Install</b> this extenstion

### Installing

- Download this repository with the top green button
- Extract the content of the downloaded .zip file to a place you will not delete accidently in 6 month and lose every extension you have installed
- Enable the developper mode of the extensions page of chrome
- Click on the `Load Unpacked Extension` button at the top, and search for the place where you have extracted this extension
- When you have reached the folder containing the `manifest.json` file, you can open it
- Voila, you should have the button appear after 2 second or so when you open the history page
