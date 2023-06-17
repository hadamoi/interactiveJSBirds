# 🕊️ Mousemove Ver.2
This is about events that are affected by the user's mouse behavior. <br />
As you move the mouse, the image of the bird moves in the opposite direction of your mouse movement. <br />
You can also see the different features of the header.

#### ✔️ Things to remember
```
window.addEventListener('mousemove', function(e){
  x = e.pageX - this.window.innerWidth / 2;
  y = e.pageY - this.window.innerHeight / 2;
});
```
* `x = e.pageX - this.window.innerWidth / 2;` - Inside the event listener function, this line calculates the horizontal position of the mouse cursor relative to the center of the window. The `e.pageX` property represents the horizontal position of the mouse cursor relative to the entire document. By subtracting half of the window's inner width (`this.window.innerWidth / 2`), we get the horizontal position relative to the window's center.

* `y = e.pageY - this.window.innerHeight / 2;` - This line calculates the vertical position of the mouse cursor relative to the center of the window. Similar to the previous line, `e.pageY` represents the vertical position of the mouse cursor relative to the document. By subtracting half of the window's inner height (`this.window.innerHeight / 2`), we get the vertical position relative to the window's center.
