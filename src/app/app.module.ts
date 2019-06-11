import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DangerComponent } from './danger/danger.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [AppComponent, DangerComponent, SuccessComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
