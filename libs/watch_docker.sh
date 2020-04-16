#!/bin/bash

docker events --format '{{.From}}' --filter 'event=start' | while read line; do  if [[ ${line} = "gogoanime_gogoanime" ||  ${line} = "anime_anime" ]];then echo " container ${line} started $(date), will restart nginx after 10secs "; sleep 10s ; docker container restart nginx; fi ; done
