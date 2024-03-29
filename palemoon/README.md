## user.js for Pale Moon.

user.js file for configuring and hardening Pale Moon privacy and security.-

## Goals

* enhance privacy and security
* improve performance
* better fingerprint possible
* avoid automatic connections


## Considerations

This user.js is mainly based on arkenfox project (56 and recent version). 


On the other hand, it avoids all the automatic connections even though security could be reduced slightly (according to Spyware Watchdog website) For instance, OSCP is a privacy breach. Nevertheless, it is also a security feature.


It has also some changes in order to improve fingerprinting like canvas.poisondata and others.

Finally, it tries to resemble Firefox ESR version (useragent, buildID, platform and so on)

## Known problems

`Some breakage?`

Try changing "network.http.referer.XOriginPolicy" from 2 to 1


## Thanks:

* [Arkenfox user.js](https://github.com/arkenfox/user.js)
* [Pale Moon Browser Spyware Mitigation Guide](https://spyware.neocities.org/guides/palemoon.html)
* [Web browser](https://git.nuegia.net/webbrowser.git)
* [Pale Moon Release Notes](https://www.palemoon.org/releasenotes.shtml)

## License

GNU General Public License v3.0.

See `LICENSE` for more details.

## Other mirrors

https://codeberg.org/Narsil/user.js/src/branch/main/palemoon