(()=>{"use strict";function e(){let e=document.querySelector("#content");e.removeChild(document.getElementById("tab_info"));let t=document.createElement("div");t.setAttribute("id","tab_info");let n=document.createElement("h2");n.textContent="HOME";let o=document.createElement("div");o.textContent="The traditional recipes of family elaborated by Aury. They come with a mix of innovative flavors that we have found in our culinary way, wich make our product, the best for many.",t.appendChild(n),t.appendChild(o),e.appendChild(t)}class t{constructor(e,t,n){this.name=e,this.description=t,this.price=n}price_text(){return"$ "+this.price}}let n=[],o=new t("Choco-cookies","Delicious cookie with chocolate chips and nuts.",3500);n.push(o);let d=new t("Pionono roll","Milk soft cake  filled with cinnamon cream.",3100);n.push(d);let i=new t("Tiramisu","Italian dessert composed of soft cake, coffe and mascarpone cream.",8500);n.push(i);let a=new t("Belewe","Liban dessert of phyllo dough, nuts and honey.",5200);n.push(a);let l=new t("Cheesecake","Classic new-york style cheesecake with a scennt of red fruits.",7500);n.push(l);function c(t){let o=document.createElement("div");o.classList.add("tab");let d=document.createElement("div");d.setAttribute("id","tab_info");let i=function(){let t=document.createElement("button");return t.textContent="HOME",t.classList.add("tab_btn"),t.addEventListener("click",(()=>{e()})),t}();o.appendChild(i);let a=function(){let e=document.createElement("button");return e.textContent="MENU",e.classList.add("tab_btn"),e.addEventListener("click",(()=>{!function(){let e=document.querySelector("#content");e.removeChild(document.getElementById("tab_info"));let t=function(){let e=n,t=document.createElement("div");t.setAttribute("id","tab_info");let o=document.createElement("h2");o.textContent="MENU",t.appendChild(o);for(let n of e){let e=document.createElement("tr");e.classList.add("food_cell");let o=document.createElement("td");o.textContent=n.name,o.classList.add("name_cell"),e.appendChild(o);let d=document.createElement("td");d.textContent=n.description,d.classList.add("description_cell"),e.appendChild(d);let i=document.createElement("td");i.textContent=n.price_text(),i.classList.add("price_cell"),e.appendChild(i),t.appendChild(e)}return t}(),o=document.createElement("div");t.appendChild(o),e.appendChild(t)}()})),e}();o.appendChild(a);let l=function(){let e=document.createElement("button");return e.textContent="ABOUT",e.classList.add("tab_btn"),e.addEventListener("click",(()=>{let e=document.querySelector("#content");e.removeChild(document.getElementById("tab_info"));let t=document.createElement("div");t.setAttribute("id","tab_info");let n=document.createElement("h2");n.textContent="ABOUT US";let o=document.createElement("div");o.textContent="Aury desserts it's a dream that became a reality 20 years ago in bogotá. It took inspiration from aury mother who was a recognized cooker in Cartagena (owner of the recognized Arco Iris bakery). The tradition of the family bussines took Aury to continue her legacy with the recipes of her mother and grandmother.";let d=document.createElement("div");d.setAttribute("id","direction_card");let i=document.createElement("h3");i.textContent="Bogotá, Colombia";let a=document.createElement("div");a.textContent="Cra. 11a#95-15";let l=document.createElement("div");l.textContent="Tel:(57)031 927 79 56.",d.appendChild(i),d.appendChild(a),d.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(d),e.appendChild(t)})),e}();o.appendChild(l),t.appendChild(o),t.appendChild(d),e()}!function(){let e=document.querySelector("#content");!function(e){let t=document.createElement("div");t.textContent="headline",e.appendChild(t)}(e),c(e)}()})();