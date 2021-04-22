
  ### Proxy wrapper for case insensitive object prop access. Makes all keys uppercase by default.
  
  const igetter = require('igetter');

  ### Objects
  ``` javascript
  const wrapped = igetter({ name: "John", extra: { public: true } });

  console.log(wrapper) // { NAME: "John", EXTRA: { PUBLIC: true} }
  wrapper.Name // John
  wrapper.NamE // John
  wrapper.EXtra.PubliC // true
  wrapper.exTRA.pubLIC // true
```
  ### Arrays
``` javascript
  const wrapped = igetter({ 
    data: { 
      items: [
        { name: "John"}
      ] 
    } 
  });
 
 wrapped.data.items[0].name // John
 wrapped.data.ITEMS[0].Name // John
 wrapped.Data.Items[0].NAme // John

```