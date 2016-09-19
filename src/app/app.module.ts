import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from "./_widgets/app-header";
import { MenuAsideComponent } from "./_widgets/menu-aside";
import { MessagesBoxComponent} from "./_widgets/messages-box";
import { NotificationBoxComponent } from "./_widgets/notification-box";
import { TasksBoxComponent } from "./_widgets/tasks-box";
import { UserBoxComponent } from "./_widgets/user-box"
import { UserService } from "./_services/user.service";
import { MessagesService } from "./_services/messages.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [UserService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
