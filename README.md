#Magic 8 Ball - HTML5 Device Orientation API Demo

This is a visual demonstration of how the HTML5 device oprentation works.
See the W3C specification at: http://www.w3.org/TR/orientation-event/

Best to try on the mobile browsers that support device orientation and 3D transform.
e.g. iOS Safari, Android browser 3+, Chrome for Android, Firefox Mobile.
The demo works on Opera Mobile, however, the triabgle does not animate in 3D.

#Live Demo URL
http://girliemac.github.com/magic8ball/

### Short URL for mobile
http://goo.gl/5Cj4d or use the QR below

### QR for the URL
![QR Code for http://goo.gl/5Cj4d](https://github.com/girliemac/magic8ball/raw/master/8ballurl.png)

#Known Bugs
- The "answer" (the text in the triangle) is buggy on Firefox Mobile. 
Apparently, it does not like to update the text as the trianle shapes transforms upon the deviceorientation event, so the text sometimes gets stuck and doesn't randomize.