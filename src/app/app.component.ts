import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  courses = [1,2,3,];
  viewMode = 'your';
  name = 'Tyler';
  public files: any[];

  goToFriend(friend){
    alert("visitied friend "+friend);
  }

  
  onFileChanged(event: any) {
    this.files = event.target.files;
  }

  onUpload() {
    const formData = new FormData();
    for (const file of this.files) {
        formData.append(name, file, file.name);
    }
    this.http.post('url', formData).subscribe(x => ....);
  }

}


//STRUCTURAL DIRECTIVES : modify the structure of the DOM

//ATTRIBUTE DIRECTIVES : modify the attributes of DOM elements

//https://youtu.be/LtT01ZCHRjk?list=PLTjRvDozrdlxAhsPP4ZYtt3G8KbJ449oT&t=1007

