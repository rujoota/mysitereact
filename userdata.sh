#!/bin/bash
#update yum command
# yum -y update

#Install node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash

export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 10.15.1
echo "\n******** Node version ***********"
node -v
sudo yum -y install git

#update host file
#sudo chmod 777 /etc/hosts
iptoreplace=$(curl http://169.254.169.254/latest/meta-data/local-ipv4)

sudo sed -i -e "s/127.0.0.1/$iptoreplace/g" /etc/hosts

#Install git


#Go to user home directory
cd /home/ec2-user/

#Download project
rm -rf mysitereact
git clone https://github.com/rujoota/mysitereact.git

#change directory
cd mysitereact
chown -R ec2-user:ec2-user .
chmod -R 755 .

# change user - required for npm install to work correctly
# su ec2-user<<'EOF'
# 	echo "user changed here..."
# 	cd /home/ec2-user/mysitereact
echo "********* dir changed *******"
echo "********* now doing npm install *******"
#install application
npm install
npm install aws-sdk
cd server
npm install
cd ..
echo "********** npm install complete *********"
#start application
node server/server.js &
npm start &
# EOF