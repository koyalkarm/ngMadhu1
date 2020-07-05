import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CurrencyPipe } from './currency.pipe';
import { MyDirDirective } from './my-dir.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AddEmpComponent } from './home/add-emp/add-emp.component';
import { EditEmpComponent } from './home/edit-emp/edit-emp.component';
import { FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CurrencyPipe,
    MyDirDirective,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddEmpComponent,
    EditEmpComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
