#Following tutorial at
#https://www.raspberrypi.org/learning/getting-started-with-picamera/worksheet

from picamera import PiCamera
from time import sleep
from shutil import copyfile
from sense_hat import SenseHat
sense = SenseHat()


camera = PiCamera()


while True:
#do camera stuff
   camera.start_preview()
   sleep(5)
   camera.capture('/home/pi/dihack17/pic5.jpg')
   camera.stop_preview()

#do accelerometer stuff
   acceleration = sense.get_accelerometer_raw()
   x = acceleration['x']
   y = acceleration['y']
   z = acceleration['z']
   accelJsonStr='{'+"ax:"+str(x)+", ay:"+str(y)+", az:"+str(z)+'}'
   file=open("accel.json","w")
   file.write(accelJsonStr)
   file.close()




#move files over and sleep 10 seconds
   copyfile('accel.json', '/var/www/html/accel.json')
   copyfile('./pic5.jpg', '/var/www/html/pic5.jpg')
   sleep(10)

