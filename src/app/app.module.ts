import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent/home.component';
import { FooterComponent } from './components/FooterComponent/footer.component';
import { GeneratedComponentComponent } from './components/generated-component/generated-component.component';
import { ParentComponent } from './components/parentComponent/parent.component'
import { ChildComponent } from './components/childComponent/child.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    GeneratedComponentComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
