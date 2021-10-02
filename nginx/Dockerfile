##########
# Reverse proxy for facilitating serving the React and the DRF API
###########

FROM nginx

RUN rm -f /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/conf.d/app.conf