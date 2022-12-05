import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  userList = [{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz"},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv"},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net"},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org"},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca"}]
  displayedColumns: string[] = ['name', 'username', 'email'];
  enableTbl = false

  constructor( private snackBar:MatSnackBar) {
    setTimeout(() => {
      this.enableTbl = true
    }, 4000)
  }
  onFinish(event:any) {
    console.log(event.message)
  }

  openAutoCloseToast(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
