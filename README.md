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
- The "answer" (the text in the triangle) is super janky on Firefox Mobile. 
Firefox doesn't seem to update the text quickly as the trianle shapes transforms.
- This demo eats up the battery like crazy. (I have a battery status API demo on http://jsfiddle.net/girlie_mac/YcV33/ but I didn't bother adding more stuff on this demo.
- I think the Android browser (not Chrome) is too sensitive, so even I set a device on a desk, beta and gamma keep changing the values.