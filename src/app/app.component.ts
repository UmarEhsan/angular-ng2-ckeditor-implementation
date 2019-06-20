import { Component, OnInit, ViewChild } from '@angular/core';
// import CKEDITOR from '../../src/plugin';
declare const CKEDITOR:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;
  

  constructor() {
    this.mycontent = ``;
    console.log(CKEDITOR);
  }

  ngOnInit() {
    this.ckeConfig = {
      removeButtons: 'Underline,Subscript,Superscript',
      ignoreEmptyParagraph: false,
      pasteFromWordPromptCleanup: false,
      pasteFromWordRemoveFontStyles: false,
      pasteFromWordRemoveStyles: false,
      enterMode: CKEDITOR.ENTER_BR,
      removeFormatAttributes: false,
      forcePasteAsPlainText: false,
      basicEntities: true,
      entities: true,
      entities_latin: false,
      entities_greek: false,
      entities_processNumerical: false,
      extraPlugins: 'pastefromword',
     
allowedContent : true,
extraAllowedContent : 'p(mso*,Normal)',
pasteFilter : null,
      fillEmptyBlocks: function (element) {
          return true; 
      }

    };
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }
}
