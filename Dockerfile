
FROM registry.cn-hangzhou.aliyuncs.com/docker_ding/http-server:1.1

MAINTAINER dingxuejin <1073031849@qq.com>

COPY src /www/public

CMD http-server /www/public -p 3000 -c-1

EXPOSE 3000