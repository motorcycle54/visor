let portSendMessage;
export class IframeChannelService {  

  listenMessage = async() => {
    return new Promise((resolve, reject) => {
      window.addEventListener('message', (event)=>{
        if(event.data.constructor === Array){
          portSendMessage = event.ports.length > 0 ? event.ports[0] : portSendMessage;
          resolve({"message": event.data}); 
        }     
      })
    })
        
  }
  sendMessage = (message) => {
    portSendMessage.postMessage(message);  
  }
}

