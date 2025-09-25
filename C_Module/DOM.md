# 🌐 DOM  

## 📖 What is DOM?  
The **DOM (Document Object Model)** is the representation of a web page as a tree.  
Each element of the page is a **node**, which can be accessed and manipulated with JavaScript.  

---

## 🌳 Tree Structure (Tree DOM)  

```
window
   |
   |--- location
   |--- document
   |--- history
            |
           html
            |
     ------------------
     |                |
   head              body
    |        ┌───────────────┬─────────────┐
    |        |               |             |
  meta     title            h1            p
                                           |
                                        strong
                                         div
```

---

## 🔎 DOM Selectors  

- **By Tag**  
  ```js
  document.getElementsByTagName("p")
  ```

- **By ID**  
  ```js
  document.getElementById("myId")
  ```

- **By Name**  
  ```js
  document.getElementsByName("myName")
  ```

- **By Class**  
  ```js
  document.getElementsByClassName("myClass")
  ```

- **By CSS Selector**  
  ```js
  document.querySelector(".class")
  document.querySelectorAll("p")
  ```

---

## ⚡ DOM Events  

Common DOM events:  

- `onclick` → when the element is clicked  
- `onmouseover` → when the mouse hovers over the element  
- `onmouseout` → when the mouse leaves the element  
- `onchange` → when the value changes  
- `onkeydown` → when a key is pressed  
- `onkeyup` → when a key is released  
- `onsubmit` → when a form is submitted  

---

## 📝 Practical Example  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Example</title>
</head>
<body>
  <h1>DOM Example</h1>
  <button id="btn">Click me</button>

  <script>
    const button = document.getElementById("btn")

    button.onclick = () => {
      alert("You clicked the button!")
    }
  </script>
</body>
</html>
```

---

✍️ **Done!** Now you have a basic DOM guide, well-formatted with a practical example to study and share on GitHub 🚀.
