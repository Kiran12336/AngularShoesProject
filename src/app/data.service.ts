import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http" 


const api="http://localhost/ProjectShoes/"

@Injectable({
  providedIn: 'root'
})
export class DataService {


  saveData(data)
  {
    return this.httpclient.post(api  + 'insert.php',data)

  }
getDataById(id){
  return this.httpclient.get(api+'getuserbyid.php?id='+id)
}
  getData()
  {
    return this.httpclient.get(api + 'fetch.php')
  }

  updateData(id,data)
  {
    return this.httpclient.put(api+'update.php?id='+id,data)
  }

  deleteData(id)
  {
    return this.httpclient.post(api+'delete.php',id)
  }

  /*logindata()
  {
    return this.httpclient.get(api+'login.php')
  }*/

saveImage(data)
{
  return this.httpclient.post(api + 'upload.php',data)
}

  constructor(private httpclient:HttpClient) { }
}
