##pager.js

implementation of a management tool display pages and pagination.

###Methods

#### pager
```javascript
	Pager(element, adapter, options)
```
Takes the DOM element **element** as the container pager. The DOM should contain this element.

Takes the object **adapter** is RAD.view in which the pager will be displayed. **adapter** must contain functions:
- **getPageCount** - this function must return quantity of pages
- **setPageContent** -this function must add conetnt to **element**. function takes the following parameters:
    - **rootElement** - page handler
    - **position** - page handler page number from 1 to 3

Takes the object **options** as the parameter. The object has the following properties:
* **onSwipeEnd** - function which is processing ending swipe
* **preventMove** - Enable support of native vertical scrolling in Android
* **resizeEvent** - resize handler pages when resizing view.

default value **options**:

```javascript
	{
		preventMove: true,
		resizeEvent: true
	}
```

**example**
```javascript
 onStartAttach: function () {
        if (this._firstTimeAttach) {
            if (this._pageController) {
                this._pageController.destroy();
            }

            this._firstTimeAttach = false;
            this._pageController = new Pager(this.el, this);
        }
    },

    getPageCount: function () {
        return 11;
    },

    setPageContent: function (position, rootElement) {
        rootElement.innerHTML = "<div class='inn'>index: " + position + "</div>";
        rootElement.setAttribute('index', position);
    }
```

##License

The MIT License (MIT)

Copyright (c) 2015 [Mobidev](http://mobidev.biz/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

