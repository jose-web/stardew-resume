import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrl: './file-reader.component.scss',
})
export class FileReaderComponent {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.saveGamesByDefault()
  }

  saveGamesByDefault() {
    if (sessionStorage.getItem("saveGames") == null) {
      this.http.get("/stardew-resume/assets/VILLADORITA_300816129", { responseType: "text" })
        .subscribe({
          next: (data: any) => {
            let xmlInfo = new DOMParser().parseFromString(data, 'application/xml')
            let jsonInfo = this.xml2json(xmlInfo)
            sessionStorage.setItem("saveGames", JSON.stringify(jsonInfo))

            location.reload()
          }
        })
    }
  }

  fileUploaded(event: any) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file)

    reader.onload = () => {
      try {
        let xmlInfo = new DOMParser().parseFromString(reader.result as any, 'application/xml')
        let jsonInfo = this.xml2json(xmlInfo)

        sessionStorage.setItem("saveGames", JSON.stringify(jsonInfo))
        this.router.navigate(['/game-info'])
      } catch (e) {
        console.error("Error parsing XML:", e);
      }
    }
  }

  xml2json(xml: any) {
    try {
      var obj: any = {};
      if (xml.children.length > 0) {
        for (var i = 0; i < xml.children.length; i++) {
          var item = xml.children.item(i);
          var nodeName = item.nodeName;

          if (typeof (obj[nodeName]) == "undefined") {
            obj[nodeName] = this.xml2json(item);
          } else {
            if (typeof (obj[nodeName].push) == "undefined") {
              var old = obj[nodeName];

              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(this.xml2json(item));
          }
        }
      } else {
        obj = xml.textContent;
      }
      return obj;
    } catch (e) {
      // console.log(e.message);
    }
  }
}
