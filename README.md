# Party Planner App

## Backend (AWS EC2)

I am hsoting both the backend (pocketbase) and the apache web server on an Amazon EC2 Ubuntu Linux instance in the cloud.

```bash
ssh -i "party_planner.pem" ubuntu@ec2-18-217-80-145.us-east-2.compute.amazonaws.com
```

#### PocketBase

This app uses [PocketBase](https://pocketbase.io/) as the Backend

While you are logged into the EC2 Ubuntu instance using the command above you can start the Pocketbase backend:

```bash
./root/pocketbase/pocketbase serve --http="0.0.0.0:8090" --https="0.0.0.0:8091"
```

##### Notes

**UPDATE 1**

Take a look at the command below:

```bash
netstat -i
```

**OUTPUT**

```bash
Kernel Interface table
Iface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0      9001    12907      0      0 0         13017      0      0      0 BMRU
lo       65536      232      0      0 0           232      0      0      0 LRU
```

What does this output mean?
Our Ubuntu server has **2** interfaces that are connected to the Ubuntu server

-> The first interface (eth0) is the ethernet interface that is connected to the outside world. Normally there would be another **wifi** interface, but that does not exist for this ec2 instance as its probably in an amazon warehouse connected through ethernet only

-> The second interface is called the **loopback interface**. The loopback interface is basically responsible for all localhost connections. Its a **fake** interface that only works when you are on the ubuntu server itself.

By hosting the application on ip address 0.0.0.0, we are telling the application (pocketbase) to listen on **every interface** (both the eth0 and lo interfaces)

#### Apache Web Server

I want to learn how to compile the Apache Webserver from scratch. I am following [this](https://thesecmaster.com/step-by-step-procedure-to-install-apache-from-source-code-on-ubuntu/) tutorial on doing that.

You can start, stop, restart the Apache server with apachectl command from its bin directory.

```bash
/usr/local/apache2.4.57/bin/apachectl start
/usr/local/apache2.4.57/bin/apachectl stop
/usr/local/apache2.4.57/bin/apachectl restart
```

Starting the apache service starts the web server on port 80

Run this command to check the status of the Apache service.

```bash
ps -ef | grep apache2
```

##### Notes

**UPDATE 2**
I have set up port forwarding for the apache web server so that any incoming requests to port 80 will be redirected to localhost:8090 where the pocketbase service is running.

You can access the pocketbase service by going to http://18.218.110.131/_/

I also switched made it so that pocketbase app runs on `localhost:8090`. Port forwarding makes it so that any incoming requests to port 80 are redirected to this localhost address.

**UPDATE 3**
I have set up a _second_ apache web server on AWS with an ip address of `3.142.232.29`

You can access the web server using the following command:

```bash
ssh -i "party_planner.pem" admin@ec2-3-142-232-29.us-east-2.compute.amazonaws.com
```

## Frontend

This app uses NextJS 13 for the frontend application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I will also be using Tailwind CSS styled components for a clean frontend UI.
