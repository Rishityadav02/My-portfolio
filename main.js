
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome ");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
  createCode("hire", "Want to Hire me??");
  createCode("all", "See all commands.");
  createCode("projects", "What have I dont yet.");
  createCode("whoru", "Who am i and what do i do.");
  createCode("skills", "What are my expertise?");
  createCode("contact", "Want to contact me?");
  createCode("clr", "Clear the terminal");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# rishit";
  span1.textContent = " in";
  span2.textContent = " ~/guest";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    createCode("hire", "Want to Hire me?? ;)");
    createCode("projects", "My projects ;)");
    createCode("whoru", "Who am i and what do i do.");
    createCode("contact", "Want to contact me?.");
    createCode("skills", "What are my expertise?.");
    createCode("clr", "Clean the terminal.");
    
    
  }
  else if(value=== "hire"){
    trueValue(value);
    createText("GRAPHICS DESIGNER || UI/UX DESIGNER || FRONTEND DEVELOPER || PHOTO / VIDEO EDITOR")
    createText(">>> Click to write a  <a href='mailto:rishityadav2002@gmail.com' target='_blank'>MAIL</a> to me.")
    createText(">>> Make a  <a href='callto:+918090151012'>CALL</a> at +91-8090151012.")
    createText("--------------------------------------------------------------------------------")


  }
  else if(value === "projects"){
    trueValue(value);
    createCode("GITHUB", "<a href='https://github.com/Rishityadav02' target='_blank'><i class='fab fa-wrench '></i> Click HERE to view projects on Github.</a>")
    createCode("FIGMA", "<a href='https://www.figma.com/files/team/1098304560411209225' target='_blank'><i class='fab fa-wrench '></i> Click HERE to view design projects on Figma.</a>")
    createText("--------------------------------------------------------")


  }
  else if(value === "whoru"){
    trueValue(value);
    createText(">>>I am Rishit Yadav :)")
    createText(">>>I am lazy, so I have made this website!")
    createText(">>>You can say that I love the designes and designers.")
    createText(">>>You can talk to me about Games and Horror movies...")
    createText("--------------------------------------------------------------------")

  }
  else if(value === "contact"){
    trueValue(value);
    createCode("CALL", "<i class='fab fa-wrench '></i> Click to call me at <a href='callto:+918090151012' target='_blank'> +91-8090151012.</a>")
    createCode("MAIL", "<i class='fab fa-wrench '></i> Click to Mail at <a href='mailto:rishityadav2002@gmail.com' target='_blank'> rishityadav2002@gmail.com.</a>")
    createCode("Instagram", "<i class='fab fa-wrench '></i> To see my *special* content, follow my <a href='https://www.instagram.com/rishit_yadav_/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank'> INSTAGRAM</a> I'd.")
    createCode("Facebook", "<i class='fab fa-wrench '></i> Send me a friend request on <a href='https://www.facebook.com/yaduvanshi.rishit?mibextid=ZbWKwL' target='_blank'> FACEBOOK</a> I'd.")
    createCode("LinkedIn", "<i class='fab fa-wrench '></i> Connect to me on my <a href='https://www.linkedin.com/in/rishit-yadav-a68027202' target='_blank'> LinkedIn</a> I'd.")
    createText("---------------------------------------------------------------")
  
  }
    
  else if(value === "skills"){
    trueValue(value);
    createText(">>> Didn't you mean: skill ?")
    createText(">>> Having an expertise in UI/UX")
    createText(">>> Having an expertise in Graphics Design")
    createText(">>> Having an expertise in Front-end development")
    createText(">>> Having an expertise in Photo and Video Editing")
    createText(">>> Having an expertise in Playing Video Games.")
    createText("---------------------------------------------------------")
  }
  
  else if(value === "clr"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    createText("Type 'all' to get the Menu!")

  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
