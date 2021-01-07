async function main() {
  await messenger.BootstrapLoader.registerChromeUrl([ 
    ["content", "google4tbsync", "content/"],
    ["resource", "google4tbsync", "."],
  ]);
  await messenger.BootstrapLoader.registerBootstrapScript("chrome://google4tbsync/content/bootstrap.js");  
}

main();
