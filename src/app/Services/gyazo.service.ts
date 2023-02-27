import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GyazoService {

  constructor() { }

  uploadImage(image:Blob){
    const data = new FormData();
    data.append("imagedata", image, "groupPhoto");
    
    return fetch(this.getUrl('https://upload.gyazo.com/api/upload'), {
      method:'post',
      body:data,
    });
  }

  getUrl(url:string){
    return `${url}?access_token=${environment.gyazoAccessToken}`;
  }
}
