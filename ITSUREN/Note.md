# INTRODUCTION
- Notes on the HTML rough sketch 
- Hypertext are links that connect webpages
- Markup is a process of annotating documents with tags to structure and format the content of the docuemnts
- Elements are the starting tags, ending tags and everything in between these tags
- H1 is the biggest font and things go down with increase in the number
- The comments are made with 
    ```html
    <!--comments NOTE: can be read by the public-->
    ```
- style tag is to do a quick css on the html file 
- to check the standard maintainance https://validator.w3.org/
- According to standard we need language 


# FIle Structure
- Here is the standard file structure we will use to make things easier
```css
project-root/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── fonts/
│   └── font1.woff
│   └── font2.ttf
│
├── icons/
│   └── icon1.svg
│   └── icon2.png
│
├── audio/
│   └── audio1.mp3
│   └── audio2.ogg
│
├── video/
│   └── video1.mp4
│   └── video2.webm
│
├── libraries/
│   └── jquery.js
│   └── bootstrap.css
│
├── data/
│   └── data1.json
│   └── data2.xml
│
└── images/
    └── image1.jpg
    └── image2.png
```

## Head 
- Contains things that are not seen by the user (except favicon) but tell about the data in it i.e the metadata
- Some meta tags could be 
    ### Metadata tags
    - To store the character set that is used (UTF-8 for most cases): 
    ```html
    <meta charset="UTF-8">
    ```
    - To store the author of the Document we use: 
    ```html 
    <meta name="author" content= "Itsuren Kanakueta">
    ```
    - To store the description of the Document we use:
    ```html 
    <meta name="description" content="This page is about ..."> 
    ```
    - to store links that relate to the document:
    ```html
    <link rel="stylesheet" href="./css/main.css" type="text/css">
    ```
    ### Favicons
    - For the **Favicon** we use
    ```html
    <link rel="icon" href="./resources/basket.png" type="image/x-icon">
    ```
- where rel = relation ad descibes how the link is related to the webpage
- where href = hypertext reference 

## Body
- The body is the part that is seen on the browser
    ### Text Basics
    - block level elements meaning adding one more will put it on another line (roughly)
    - 'h1' 'h2' etc are heading tags, try to use them properly i.e only one h1 per website lets say title. h2 is for topic and h3 is for 
    -  we can change size later but we need to make it easy for the screenreader accessibility tools to understand the hierarchy

    ### Paragraphs
    - block level
    - do it with the: 
    ```html
    <p>content</p>
    ```
    ### Horizontal Rule
    - empty/void elements
    - this will add the lines going across the width 
    ```html
    <hr>
    ```

    ### White Space collapsing
    - empty/void elements
    - for those with multiple spaces, they will get colapsed
    - but we can add a line break to separate lines
    ```html
    <br>
    ```
    
    ### Emphasize
    - inline elements
    - to emphasize some text
    - makes it italic
    ```html
    <em> I need a break </em>
    ```

    ### Strong 
    - inline elements
    - to make the text bold
    ```html
    <strong> bold text </strong>
    ```

    ### Html entities
    - inline elements
    - to use things like < without breaking things
    - begings with &
    - example a n to indent things
    ```html
    &nbsp; <!--on-breaking space-->
    &lt; <!--less than-->
    &gt; <!--greater than-->
    &copy; <!--copyright symbol-->
    ```

    ### Abbreviate
    - inline elements
    - to give full forms to abbreviation when hovered 
    - gives dots below the words to identify it
    - try NOT to use it because it might not be accessible to all the screen reading technologies
    ```html
    <abbr title="mobile legends">mb</abbr>
    ```

    ### Address
    - will tell the browser that the content is a physical address
    - doesn't have function like abbreviate but has semantic meaning
    ```html
    <address>Struga 18, 26-600, Radom, PL 26-600</address>
    ```

