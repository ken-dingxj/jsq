#!/usr/bin/env bash
GITVER_CURR=$(git rev-list HEAD -n 1 | cut -c 1-)

docker kill jsq

docker rm -f jsq

 docker image prune -a -f

docker build -t registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:${GITVER_CURR} .

docker push registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:${GITVER_CURR}

docker run --name jsq -p 8080:3000 -d registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:${GITVER_CURR}
