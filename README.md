## ShadowDOM Polyfill Shim

This repo wraps Polymer/ShadowDOM so that it works with various package managers.

### Bower
```
  bower install ShadowDOM
```

### Usage

```
var el = document.createElement('div');
var shadow = el.createShadowRoot();
shadow.innerHTML = '<label>Foo<ul><content select="li"></content></ul></label>';

document.body.appendChild(el);

['a','b','c'].forEach(function(item){
  var elem = document.createElement('li');
  elem.textContent = item;
  el.appendChild(elem);
});

```
