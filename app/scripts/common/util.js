//@flow

export class Util {
  constructor(){

  }

  extensionName (filename) {
      var filenameArray = filename.split('.');
      if(filenameArray.length === 1){
        return '';
      }else{
        var newFilename = filenameArray[filenameArray.length - 1];
        newFilename = newFilename.substring(0, 3);
        return newFilename;
      }
  }

}

export let util = new Util();
