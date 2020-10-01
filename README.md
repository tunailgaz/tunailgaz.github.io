-   [tunailgaz.com](https://www.tunailgaz.com) / [repo](https://github.com/tunailgaz/tunailgaz-com)
-   [tunailgaz.github.io](https://tunailgaz.github.io/) / [repo](https://github.com/tunailgaz/tunailgaz.github.io)
-   [Radio Bilkent](http://188.166.30.186:8000/) / [listen.pls](http://188.166.30.186:8000/listen.pls?sid=1) 

### todos

- [X]  Resources
- [X]  Cloud development settings/environments and tools
- [X]  [The Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [X]  Intl.RelativeTimeFormat 
- [ ]  create npm packages for download, save sharp/mkdirp  (big small images)
- [ ]  create better solution cache busting 

[libs](https://github.com/tunailgaz/tunailgaz.github.io/tree/master/libs) <br>
[time-display](https://github.com/tunailgaz/tunailgaz.github.io/blob/master/libs/time-display.js) <br>
[utils](https://github.com/tunailgaz/tunailgaz.github.io/blob/master/libs/utils.js)<br>
[animated css](https://github.com/daneden/animate.css)<br>

// String(Array.from({ length: 25 }).fill('a').join(''));

###### Dockerfile logging template
```Dockerfile
version: "3.7"
x-default-opts:
  &default-opts
  logging:
    options:
      max-size: "1m"

services:
  chat:
    <<: *default-opts
```

###### ESLint Custom Rules
```json
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
```

#### Git

[How to update repo's EOL with git](https://docs.github.com/en/github/using-git/configuring-git-to-handle-line-endings)

```text
[core]
    autocrlf = true
    eol = lf
```


```bash

 git clone -b branchx https://tunailgaz@github.com/tunailgaz/xx 

# delete local tag '12345'
git tag -d 12345
# delete remote tag '12345' (eg, GitHub version too)
git push origin :refs/tags/12345
# alternative approach
git push --delete origin tagName
git tag -d tagName


git checkout v1.0.1
git checkout -

git branch -a
git branch -d dev
# --delete --force
git branch -D 

# Rebase example
git checkout feature
git checkout -b temp
git rebase -i master

# Above will drop you in an editor and pick the changes you want ala:
pick 7266df7 First change
pick 1b3f7df Another change
pick 5bbf56f Last change

# Rebase b44c147..5bbf56f onto b44c147
#
# Commands:
# pick = use commit
# edit = use commit, but stop for amending
# squash = use commit, but meld into previous commit
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#

git checkout master
git pull . temp
git branch -d temp

```

# DevTools

### vscode settings.json
```text
extensions:
- [ ] Code Ace Jumper 3.3.2
- [ ] ESLint 2.1.8
- [ ] Space Block Jumper 1.2.2
- [ ] Todo+ 4.18.0
- [ ] Git Graph 1.26.0
- [ ] licenser 1.5.0
- [ ] Remote - WSL 0.44.5
- [ ] Windows Terminal Integration 0.6.0
- [ ] npm 0.3.13
```

```JavaScript
{
    "terminal.integrated.shell.windows": "D:\\setups\\cmder\\cmder_shell.bat",
    "terminal.external.windowsExec": "C:\\Users\\tunai\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe",
    "editor.fontFamily": "JetBrains Mono",
    "editor.fontSize": 16,
    "workbench.settings.editor": "ui",
    "window.zoomLevel": 0,
    "editor.showFoldingControls": "always",
    "editor.folding": true,
    "editor.foldingStrategy": "indentation", 
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "files.eol": "\n",
    "editor.wordWrapColumn": 100,
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "window.title": "${rootName}",
    "licenser.author": "Tuna Ilgaz",
    "licenser.useSingleLineStyle": false,
    "licenser.license": "GPLv3" // "WTFPL": Do What The Fuck You Want To Public License
}

```

-   Cmder 
    -   [Download - cmder.zip latest windows](https://github.com/cmderdev/cmder/releases/download/v1.3.14/cmder.zip)
    -   Create file under cmder/cmder_shell.bat  `@cmd.exe /k %0\..\vendor\init.bat`
    -   Accept arguments  `@cmd /k "%CMDER_ROOT%\vendor\init.bat && %~1"`
    -   Usage %CMDER_ROOT%\cmder_shell.bat "npx flow"
    -   Cmder Aliases
```text
    cd=cd /d $*
    aliases=doskey /macros
    title=cmd /c RenameTab "$*"
    nodex=node --experimental-modules $*
    web=webstorm64.exe
    fransa-ssh=cmd /c RenameTab fransa-server $t ssh root@5.135.109.161
    d=docker $*
    dex=docker exec -it $*
    dsuf=docker service update --force
    dc=docker-compose $*
    gs=git status
    gb=git branch $*
    grp=git rev-parse --abbrev-ref HEAD
    gcm=git commit -a
    gc=git checkout $*
    gl=git log --oneline $*
    ga=git add .
    gcb=git checkout -b $*
    gco=git checkout $*
```
    
-   Webstorm
    -   `ide settings on cloud, sync with account`
    -   `Settings/Tools/Terminal "[cmder-folder]\cmder_shell.bat"`
    or
    -   `"cmd.exe" /k ""%CMDER_ROOT%\vendor\init.bat""` -> package.json -> scripts ->  `"dev-flow": "%CMDER_ROOT%\\cmder_shell.bat \"npx flow\""`
    -   [Download - Webstorm](https://www.jetbrains.com/webstorm/download/index.html#section=windows)
    -   Plugins
```text
AceJump             https://plugins.jetbrains.com/plugin/7086-acejump/
BrowseWordAtCaret   https://plugins.jetbrains.com/plugin/201-browsewordatcaret/
ESLint              https://plugins.jetbrains.com/plugin/7494-eslint/
Grazie              https://plugins.jetbrains.com/plugin/12175-grazie/
Tab Shifter         https://plugins.jetbrains.com/plugin/7475-tab-shifter/
Wrap to Column      https://plugins.jetbrains.com/plugin/7234-wrap-to-column/
```
    
-   Navicat 12 Premium
    -   [Download Navicat 12.1 Premium](https://github.com/tunailgaz/tunailgaz.github.io/raw/master/navicat/navicat121_premium_en_x64.rar)
    -   [Download Navicat kg project src](https://github.com/tunailgaz/tunailgaz.github.io/raw/master/navicat/navicat-kg.zip) 
    -   [Download Navicat kgs](https://github.com/tunailgaz/tunailgaz.github.io/raw/master/navicat/navicat-kg-for-x64.zip) 
`   It has been tested on Navicat Premium 12.1.22
    And when i tested with 12.1.25 / 64-bit
`


###### Linux

### .bash_profile
```bash
# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

if [ -f ~/.docker_aliases ]; then
        . ~/.docker_aliases
fi

if [ -f ~/.git_aliases ]; then
        . ~/.git_aliases
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin

export PATH
```

### .bashrc
```bash
# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
alias vi='vim'

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
```


### .docker_aliases
```bash
# .bashrc                                                                                                          
                                                                                                                   
# User specific aliases and functions                                                                              
                                                                                                                   
alias d='docker'                                                                                                   
alias dps='docker ps'                                                                                              
alias dpsa='docker ps -a'                                                                                          
alias di='docker inspect'                                                                                          
alias dl='docker logs'                                                                                             
alias dlf='docker logs -f'                                                                                         
alias dex='docker exec -it'                                                                                        
                                                                                                                   
alias dvls='docker volume ls'                                                                                      
alias dvi='docker volume inspect'                                                                                  
                                                                                                                   
alias dnls='docker network ls'                                                                                     
alias dni='docker network inspect'                                                                                 
                                                                                                                   
alias dc='docker-compose'                                                                                          
                                                                                                                   
alias dstats='docker stats'                                                                                        
                                                                                                                   
alias ds='docker service'                                                                                          
alias dsls='docker service ls'                                                                                     
                                                                                                                   
alias dsl='docker service logs'                                                                                    
alias dslf='docker service logs -f'                                                                                
                                                                                                                   
                                                                                                                   
                                                                                                                   
alias dsu='docker service update'                                                                                  
alias dsuf='docker service update --force'                                                                         
                                                                                                                   
                                                                                                                   
alias dstats='docker stats --format "table {{.Name}}\t {{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}"'                 
                                                                                                                   
alias dkps="docker ps --format 'table {{.ID}}\t{{.Status}}\t{{.Image}}\t{{.Names}}'"                               
                                                                                                                   
dfind () {                                                                                                         
  docker ps -f name=$1 --format 'table {{.ID}}\t{{.Status}}\t{{.Image}}\t{{.Names}}'                               
}                                                                                                                  
```



```bash
#show current logged in users 
w | who

# Text-based disk usage viewer
dnf install ncdu
ncdu /home/html


cat /etc/centos-release
hostnamectl
uname -a

curl ifconfig.me 
nmcli -p device show
hostname -I | awk '{print $1}'

chown ftpuser:ftpgroup package.json ? -R

#create tmp file
mktemp 
#run script background
bash watch_docker.sh > /tmp/tmp.lyvyDOmbNu 2>&1 &
#kill script
pkill -f watch_docker.sh

cat watch_docker.sh
```

[watch_docker.sh](https://github.com/tunailgaz/tunailgaz.github.io/blob/master/libs/watch_docker.sh)

```bash

watch 'ps aux | grep chrom | wc -w'

#firewall

firewall-cmd --state
firewall-cmd --get-active-zones
firewall-cmd --zone=public --permanent --add-service=http
firewall-cmd --zone=public --permanent --add-service=https
firewall-cmd --zone=public --permanent --add-service=dns
firewall-cmd --reload
firewall-cmd --list-all

dnf install 'dnf-command(config-manager)'

// docker install
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
dnf install --nobest docker-ce 
systemctl enable --now docker

// docker-compose
curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o docker-compose
mv docker-compose /usr/local/bin && sudo chmod +x /usr/local/bin/docker-compose

//nodejs
dnf module list nodejs
dnf install nodejs

// htop
yum groupinstall "Development Tools"
yum install ncurses ncurses-devel
wget http://hisham.hm/htop/releases/2.2.0/htop-2.2.0.tar.gz
tar xvfvz htop-2.2.0.tar.gz
cd htop-2.2.0
./configure
make 
make install

docker run busybox nslookup registry.npmjs.org
151.101.16.162 registry.npmjs.org

ssh-keygen -t rsa -b 4096 -C "your_email@domain.com"
~/.ssh/authorized_keys
echo 'test' >>  - appends
echo 'test' > - overwrites

```

##### backup

```bash
#!/usr/bin/env bash

echo 'RUNNING mysqldump schema app'
docker exec mysql_container_id mysqldump  -d --user='username' --password='password' dbname > /home/backups/app_backup/app_schema.sql
echo 'RUNNING mysqldump schema data'
docker exec mysql_container_id mysqldump  --user='username' --password='password' dbname > /home/backups/app_backup/app_backup.sql

echo 'RUNNING tar '
tar -czvf /home/backups/app_backup/appdata_daily.tar.gz /var/lib/docker/volumes/app_data

echo 'RUNNING rsync daily'
rsync -av /home/backups/app_backup user@x.x.x.x:/home/app_backups/daily/
```

##### restore

```bash
#!/usr/bin/env bash
#do that manually
#copy file to container
docker cp /home/backups/app_mysql/app_backup.sql mysql_container_id:/tmp/backup.sql
#add pv
docker exec -it mysql_container_id apt-get update
docker exec -it mysql_container_id apt-get install pv
# < backup.sql
docker exec -it mysql_container_id pv /tmp/backup.sql | mysql --user=username --password=password dbname
# cleanup
docker exec -it mysql_container_id rm -rf /tmp/backup.sql
```

###### npm
```text
npm --no-git-tag-version version patch

npm list -g --depth=0 | head -1
npm outdated
npm update

ncu --upgrade sharp
npm install

ncu --upgradeAll
npm install
```


##### mariadb

```text
full text search
https://mariadb.com/kb/en/full-text-index-overview/
ignored keywords
https://mariadb.com/kb/en/full-text-index-stopwords/#innodb-stopwords
disabling this feature
https://mariadb.com/kb/en/innodb-system-variables/#innodb_ft_server_stopword_table
```


###### Windows 
```powershell
/* Find task */
tasklist | grep task
/* kill task */
taskkill /IM chrome.exe /F
taskkill /PID 263544 /F

netstat -aon | find /i "listening" | grep 3306
```
    
### Notable Links     


##### Tools

[nginx](https://www.digitalocean.com/community/tools/nginx)

[centos6, certbot](https://certbot.eff.org/lets-encrypt/centos6-nginx.html)

[nvm-windows](https://github.com/coreybutler/nvm-windows)

[googles reCAPTHA](https://www.google.com/recaptcha/intro/v3.html)

[intoDNS](https://intodns.com/)

[dnsCHECKER](https://dnschecker.org/#A/tunailgaz.com)

[icann lookup](https://lookup.icann.org/)

[css generate colors](https://coolors.co/780116-f7b538-db7c26-d8572a-c32f27)

[css color](https://color.adobe.com/create/color-wheel/)

[image optimization](https://squoosh.app/)

[image editor](https://pixlr.com/x/)

#### Dev

[MDN](https://developer.mozilla.org/en-US/docs/Web)

[rollup](https://rollupjs.org/guide/en/#importing)

[you dont need jquery](http://youmightnotneedjquery.com/)

[lazy loading image, video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)

[socket.io](https://socket.io/docs/emit-cheatsheet/)

[css-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[free images](https://pixabay.com/tr/)

[github actions](https://www.bytesized.xyz/github-actions-tutorial)

[learning git branch](https://learngitbranching.js.org/)


##### check later

[flowy css / js to create flows](https://github.com/alyssaxuu/flowy)



##### vscode keybindings

```JavaScript

// Place your key bindings in this file to override the defaultsauto[]
[
    {
        "key": "ctrl+y",
        "command": "editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+k",
        "command": "-editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+d",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "-editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+s",
        "command": "todo.toggleStart",
        "when": "editorTextFocus && editorLangId == 'todo'"
    },
    {
        "key": "alt+s",
        "command": "-todo.toggleStart",
        "when": "editorTextFocus && editorLangId == 'todo'"
    },
    {
        "key": "alt+e",
        "command": "todo.toggleDone",
        "when": "editorTextFocus && editorLangId == 'todo'"
    },
    {
        "key": "alt+d",
        "command": "-todo.toggleDone",
        "when": "editorTextFocus && editorLangId == 'todo'"
    },
    {
        "key": "alt+q",
        "command": "extension.aceJump"
    },
    {
        "key": "ctrl+numpad_add",
        "command": "-workbench.action.zoomIn"
    },
    {
        "key": "ctrl+numpad_subtract",
        "command": "-workbench.action.zoomOut"
    },
    {
        "key": "ctrl+numpad_subtract",
        "command": "editor.fold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+shift+[",
        "command": "-editor.fold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+numpad_add",
        "command": "editor.unfold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+shift+]",
        "command": "-editor.unfold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+3",
        "command": "-workbench.action.focusThirdEditorGroup"
    },
    {
        "key": "ctrl+4",
        "command": "-workbench.action.focusFourthEditorGroup"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeActiveEditor"
    },
    {
      "key": "ctrl+shift+numpad_add",
      "command": "editor.unfoldAll",
      "when": "editorTextFocus && foldingEnabled"
    },
    {
      "key": "ctrl+k ctrl+j",
      "command": "-editor.unfoldAll",
      "when": "editorTextFocus && foldingEnabled"
    },
    {
      "key": "ctrl+shift+numpad_subtract",
      "command": "editor.foldAll",
      "when": "editorTextFocus && foldingEnabled"
    },
    {
      "key": "ctrl+k ctrl+0",
      "command": "-editor.foldAll",
      "when": "editorTextFocus && foldingEnabled"
    },
    {
      "key": "ctrl+4",
      "command": "workbench.action.closeWindow"
    },
    {
      "key": "ctrl+shift+w",
      "command": "-workbench.action.closeWindow"
    },
    {
      "key": "ctrl+f4",
      "command": "-workbench.action.closeActiveEditor"
    },
    {
      "key": "ctrl+down",
      "command": "spaceBlockJumper.moveDown"
    },
    {
      "key": "ctrl+up",
      "command": "spaceBlockJumper.moveUp"
    },
    {
      "key": "ctrl+shift+down",
      "command": "spaceBlockJumper.selectDown"
    },
    {
      "key": "ctrl+shift+up",
      "command": "spaceBlockJumper.selectUp"
    },
    {
      "key": "ctrl+3",
      "command": "workbench.action.closeGroup",
      "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
      "key": "ctrl+f4",
      "command": "-workbench.action.closeGroup",
      "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
      "key": "ctrl+b",
      "command": "editor.action.revealDefinition",
      "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
      "key": "f12",
      "command": "-editor.action.revealDefinition",
      "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
      "key": "ctrl+shift+b",
      "command": "editor.action.peekDefinition",
      "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
      "key": "alt+f12",
      "command": "-editor.action.peekDefinition",
      "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
      "key": "f12",
      "command": "editor.action.revealDefinitionAside",
      "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
      "key": "ctrl+k f12",
      "command": "-editor.action.revealDefinitionAside",
      "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
      "key": "ctrl+w",
      "command": "editor.action.smartSelect.expand",
      "when": "editorTextFocus"
    },
    {
      "key": "shift+alt+right",
      "command": "-editor.action.smartSelect.expand",
      "when": "editorTextFocus"
    },
    {
      "key": "ctrl+shift+w",
      "command": "editor.action.smartSelect.shrink",
      "when": "editorTextFocus"
    },
    {
      "key": "shift+alt+left",
      "command": "-editor.action.smartSelect.shrink",
      "when": "editorTextFocus"
    },
    {
      "key": "ctrl+shift+t",
      "command": "workbench.action.terminal.openNativeConsole",
      "when": "!terminalFocus"
    },
    {
      "key": "ctrl+shift+c",
      "command": "-workbench.action.terminal.openNativeConsole",
      "when": "!terminalFocus"
    },
    {
      "key": "alt+q",
      "command": "extension.aceJump.multiChar"
    },

    {
      "key": "ctrl+numpad0",
      "command": "workbench.action.terminal.sendSequence",
      "args": {
        "text": "set NODE_ENV=development && npx mocha --exit --timeout 0 ${relativeFile}\u000D"
      }
    },
    {
      "key": "alt+numpad0",
      "command": "workbench.action.terminal.sendSequence",
      "args": {
        "text": "set NODE_ENV=development && npm run test\u000D"
      }
    }
]

```