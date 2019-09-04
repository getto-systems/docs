FROM ubuntu:disco

ENV GOOGLE_CLOUD_SDK_VERSION 260.0.0
ENV NODE_VERSION 12
ENV HUGO_VERSION 0.57.2

RUN set -x && \
  apt-get update && \
  apt-get install -y apt-utils && \
  apt-get install -y \
    ca-certificates \
    curl \
    git \
    python-pip \
  && \
  : "to fix vulnerabilities, update following packages" && \
  : apt-get install -y --no-install-recommends \
    bzip2 \
  && \
  : "install node" && \
  curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - && \
  apt-get install -y nodejs && \
  npm install -g npm && \
  : "install hugo" && \
  curl -L -o /opt/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  tar zxvf /opt/hugo.tar.gz -C /opt && \
  mv /opt/hugo /usr/bin && \
  rm -rf /opt && \
  : "install google-cloud-sdk" && \
  echo "deb https://packages.cloud.google.com/apt cloud-sdk-$(lsb_release -c -s) main" > /etc/apt/sources.list.d/google-cloud-sdk.list && \
  curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
  apt-get update && apt-get install -y google-cloud-sdk=${GOOGLE_CLOUD_SDK_VERSION}-0 kubectl && \
  : "install awscli" && \
  pip install awscli && \
  : "cleanup apt caches" && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  : "add working user" && \
  useradd -m getto && \
  : "prepare app directory" && \
  mkdir -p /opt/app && \
  chown getto:getto /opt/app && \
  : "environment prepared"

COPY package*.json /opt/app/

WORKDIR /opt/app
USER getto

RUN set -x && \
  : "install node modules" && \
  npm clean-install && \
  : "project prepared"

CMD ["/bin/bash"]
