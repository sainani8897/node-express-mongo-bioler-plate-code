# Node MongoDB (Mongoose ORM) bioler plate code (MVC Pattern)

CMS stands for __Control Management System__.
This entire Application is built on __Node.js express Framework__ and uses mongoose as ORM.

## Features

* REST API
* Authenitcation 
* Larvel like validation
* Using Model View Contro - MVC (Design pattern)
* database seeding

## Prerequisites
  
-  [x] Node 14.x 
-  [x] Mongodb 5.x
-  [x] NGINX



## How run the application

* Create a database named `dragon_cloud`
* Update `.env` file with database name and User Credentials
* Install Composer dependencies

```bash
run composer install
```

* Seed the database

```bash
php artisan migrate:fresh --seed
```


* install `nginx`
```sh
sudo apt install nginx

cd /etc/nginx/sites-enabled

sudo nano dcc.conf
```

put this code 

```sh
server {
    
    listen 80;
    server_name 15.207.183.226 dragoncontrol.info www.dragoncontrol.info;
    root /var/www/html/dcc-cms/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }

    client_max_body_size 75M;
}
```
> NOTE : change the IP or Domain name
---

* Setup `Project`

```sh
cd /var/www/html 

sudo git clone https://github.com/EmbedTech-Solutions-Pvt-Ltd/DCC-CMS.git

mv DCC-CMS dcc-cms
sudo chown -R ubuntu:www-data dcc-cms
cd dcc-cms
cp .env.example .env
sudo nano .env

sudo mysql -uroot -p<password>
mysql > create database dragon_control;
```
> Set all the config in `.env` 

```sh
sh auto/install.sh

sudo service nginx restart

sudo chmod -R 777 storage
```

---

