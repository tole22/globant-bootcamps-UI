


var div = document.getElementById("contenido");  
  text_html='<h2AChapter 1</h2><h1>Values, Types, and Operators</h1>';


  text_html= text_html + "<h3>Numbers Strings</h3>";
  text_html= text_html + "el tipo de 4.5 es:" + typeof 4.5 + "<br>";
  text_html= text_html + "el tipo de x es:" + typeof "x" + "<br>";
  text_html= text_html + `half of 100 is ${100 / 2}`;

  text_html= text_html + "<p>comparaciones</p>";

  text_html= text_html + "Aardvark < Zoroaster:" + ("Aardvark" < "Zoroaster") +"<br>";
  text_html= text_html + "Aardvark > Zoroaster:" + ("Aardvark" > "Zoroaster") +"<br>" ;

  text_html= text_html + "Itchy != Scratchy: " + ("Itchy" != "Scratchy") +"<br>" ;
  text_html= text_html + "Apple == Orange: " + ("Apple" == "Orange") +"<br>" ;

  text_html= text_html + "";

  text_html= text_html + "<p></p>";


    div.innerHTML=text_html;

    console.log(null || "user")
    // → user
    console.log("Agnes" || "user")
    // → Agnes