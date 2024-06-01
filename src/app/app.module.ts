import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from 'src/components/left/left.component';
import { MiddleComponent } from 'src/components/middle/middle.component';
import { RightComponent } from 'src/components/right/right.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MathematicsService } from 'src/services/mathematics.service';
import { PhysicsService } from 'src/services/physics.service';
import { SqrtPipe } from 'src/sqrt.pipe';
import { ShortenPipe } from 'src/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SqrtPipe,
    ShortenPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MathematicsService,PhysicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
