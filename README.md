-   [tunailgaz.com](https://www.tunailgaz.com) / [repo](https://github.com/tunailgaz/tunailgaz-com)
-   [tunailgaz.github.io](https://tunailgaz.github.io/) / [repo](https://github.com/tunailgaz/tunailgaz.github.io)
-   [Radio Bilkent](http://188.166.30.186:8000/) / [listen.pls](http://188.166.30.186:8000/listen.pls?sid=1) 

### todos

- [X]  Resources
- [X]  Cloud development settings/environments and tools
- [ ]  [The Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [ ]  Intl.RelativeTimeFormat
- [ ]  create npm packages for download, save sharp/mkdirp  (big small images)
- [ ]  create better solution cache busting 


###### Dockerfile logging template
````
version: "3.7"
x-default-opts:
  &default-opts
  logging:
    options:
      max-size: "1m"


services:
  chat:
    <<: *default-opts
````

###### ESLint Custom Rules
````
"rules": {
    "indent": ["error", 4],
    "semi": ["error", "always"],
    "require-await": "error",
    "handle-callback-err": "warn",
    "no-await-in-loop": "warn",
    "no-async-promise-executor": "warn",
    "no-console" : "error",
    "camelcase" : "off"
}
````

##### Windows 
````
/* Find task */
tasklist | grep task
/* kill task */
taskkill /IM chrome.exe /F
taskkill /PID 263544 /F


````

# DevTools
-   Cmder 
    -   [Download - cmder.zip latest windows](https://github.com/cmderdev/cmder/releases/download/v1.3.14/cmder.zip)
    -   Create file under cmder/cmder_shell.bat  `@cmd.exe /k %0\..\vendor\init.bat`
    -   Cmder Aliases
    ````
        cd=cd /d $*
        aliases=doskey /macros
        title=cmd /c RenameTab "$*"
        gb=git branch $*
        nodex=node --experimental-modules $*
        web=webstorm64.exe
        fransa-ssh=cmd /c RenameTab fransa-server $t ssh root@5.135.109.161
        dsuf='docker service update --force'
        d=docker $*
        dex=docker exec -it $*
        gs=git status
        grp=git rev-parse --abbrev-ref HEAD
        gcm=git commit -a
        gc=git checkout $*
        gl=git log --oneline $*
    ````
-   Webstorm
    -   `ide settings on cloud, sync with account`
    -   `Settings/Tools/Terminal "[cmder-folder]\cmder_shell.bat"`
    -   [Download - Webstorm](https://www.jetbrains.com/webstorm/download/index.html#section=windows)
    -   Plugins
        ````
        AceJump             https://plugins.jetbrains.com/plugin/7086-acejump/
        BrowseWordAtCaret   https://plugins.jetbrains.com/plugin/201-browsewordatcaret/
        ESLint              https://plugins.jetbrains.com/plugin/7494-eslint/
        Grazie              https://plugins.jetbrains.com/plugin/12175-grazie/
        Tab Shifter         https://plugins.jetbrains.com/plugin/7475-tab-shifter/
        Wrap to Column      https://plugins.jetbrains.com/plugin/7234-wrap-to-column/
        ````
    
-   Navicat 12 Premium
    -   [Download Navicat 12.1 Premium](https://github.com/tunailgaz/tunailgaz.github.io/raw/master/navicat/navicat121_premium_en_x64.rar)
    -   [Download Navicat kg project src](https://github.com/tunailgaz/tunailgaz.github.io/raw/master/navicat/navicat-kg.zip) 
    -   [Download Navicat kgs](https://github.com/tunailgaz/tunailgaz.github.io/raw/master/navicat/navicat-kg-for-x64.zip) 
    ```
        It has been tested on Navicat Premium 12.1.22
        And when i tested with 12.1.25 / 64-bit
    ``` 
