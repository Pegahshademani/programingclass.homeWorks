

window.addEventListener('load', function () {
    "use strict";
  const app=document.querySelector(".app")
    const socket= io();
  let unname;

  app.querySelector(".join-screen").addEventListener("click",function (){
      let username=app.querySelector(".join-screen #username").value;
      socket.emit("newUser",username);
      unname=username;
      app.querySelector(".join-screen").classList.remove("active")
      app.querySelector(".chat-screen").classList.add("active")
  });
  app.querySelector(".chat-screen #send-message").addEventListener("click",function (){

      let message=app.querySelector(".chat-screen #message-input").value;
      if (message.length===0){
          return;
      }
      renderMessage("my",{
          username:unname,
          text:message,

      });
      socket.emit("chat",{
          username:unname,
          text:message

      });

      app.querySelector(".chat-screen .message-input ").value="";

  })


    function renderMessage(type,message){

      if(type==="my"){
          let el=document.createElement("div");
          el.setAttribute("class","message my-message");
          el.innerHTML=`<div>
                  <div class="name"> ${message.username} </div>
                  <div class="text">${message.text}</div>
              </div>`;

          messageContainer.appendChild(el);

      }else if (type==="other"){
          let el=document.createElement("div");
          el.setAttribute("class","message other-message");
          el.innerHTML=`<div>
                  <div class="name"> ${message.username} </div>
                  <div class="text">${message.text}</div>
              </div>`;

          messageContainer.appendChild(el);

      }

    }

});