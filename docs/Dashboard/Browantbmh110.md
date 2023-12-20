---
sidebar_position: 5
---

# Browan TBMH110

Ensure that your model ends with 110, as the model 100 is not compatible with the Chirps Network.

## Step1

Log in to your dashboard at app.chirpwireless.io

![Simple](image1.jpg)



## Step2

Once logged in, click on "Gateways" in your dashboard.

![Simple](image2.jpg)




## Step3

Select "Add gateway"

![Simple](image3.jpg)




## Step4

Click on add 3d Party Gateway

![Simple](image3a.jpg)




## Step 5

Enter the Gateway Name, select your country's LoRaWAN frequency, and input the Gateway EUI (located on the back of the gateway).

![Simple](image4.jpg)




## Step 6

After adding the gateway, you'll receive a confirmation message. Copy the LNS Address, download and extract the certificates from the provided Zip file.

![Simple](image5.jpg)




## Step 7

Click next to receive a notification confirming your Gateway has been added.

![Simple](image6.jpg)





## Step 8

To connect the gateway to the Chirp network, plug in your Browan to an electrical outlet. Ensure the yellow light blinks slowly (indicating readiness for WiFi connection). Connect to your Browan Pro via WiFi; the password is on the gateway's back label.

![Simple](image7.jpg)




## Step 9

Once connected, navigate to 192.168.4.1 in your browser. **Important: Connect to WiFi last, as it will disconnect you from the gateway.**

![Simple](image8.jpg)




## Step 10

Enable OTA by clicking on Step 1 in the gateway's menu.

![Simple](image9.jpg)




## Step 11

Click on step 2 "configure LoRa settings". Select LoRa Basics station and scroll to the bottom of the screen.

Enter the LNS Address that you have copied during gateway registration on Chirps dashboard

**wss://lora-eu868.cloud.chirpwireless.io:443**

and upload 3 certificated that you have extracted from a Zip file in Step 6

![Simple](image10.jpg)

![Simple](image11.jpg)




**Click Save**




## Step 12

To connect the gateway to your WiFi network, select "Set Network" or choose a visible network and enter the WiFi password. Note: You will lose connection to the gateway after connecting to WiFi.



![Simple](image12.jpg)




If set up correctly, a solid green light will appear on the gateway, and its status on the Chirps dashboard will show as online.

**Congratulations, your IoT devices are now ready to be added and automated!**
