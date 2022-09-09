FROM amazonlinux:2022.0.20220824.0
RUN yum update -y
RUN yum install -y python3.9 && \
    yum install -y python3-pip && \
    yum install -y zip && \
    yum clean all
RUN python3.9 -m pip install virtualenv

RUN yum -y install gcc
RUN yum install python3-devel -y