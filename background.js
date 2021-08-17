
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      console.log(tabId);
      console.log(changeInfo);
      console.log(tab);
     if(changeInfo.status === "complete"){
               chrome.scripting.insertCSS({
                target: {tabId: tabId},
                files: ["./inject.css"]
               })
               .then(() => {
                    console.log("css injected successfully"); 
                    chrome.scripting.executeScript({
                        target: {tabId: tabId},
                        files: ["./inject.js"]
                    }).then(() => {
                        console.log("script injected successfully"); 
                    })
               })
               .catch(err => console.log(err));
           
        }
  });