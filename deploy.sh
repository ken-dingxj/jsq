#!/usr/bin/env bash
docker kill jsq

docker rm -f jsq

docker rmi registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:1.9

docker build -t registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:2.0 .

docker push registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:2.0

docker run --name jsq -p 8080:3000 -d registry.cn-hangzhou.aliyuncs.com/docker_ding/jsq:2.0
