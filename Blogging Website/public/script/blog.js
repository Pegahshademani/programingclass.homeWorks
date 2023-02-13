const headLine=localStorage.getItem('headline-text');
const textMessage=localStorage.getItem('textMessage-text');

document.getElementById('headline').textContent=headLine;
document.getElementById('content').textContent=textMessage;
