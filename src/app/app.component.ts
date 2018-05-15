import { Component } from '@angular/core';
// import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic'; it work 
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start() {
    ClassicEditor
      .create(document.querySelector('#editor'), {
        plugins: [Bold],
        toolbar: ['bold']
      })
      .then(editor => {
        console.log('Editor was initialized', editor);
      })
      .catch(error => {
        console.error(error.stack);
      });
  }
}
