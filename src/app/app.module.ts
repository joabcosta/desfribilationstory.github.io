import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { FooterComponent } from './frames/footer/footer.component';
import { NavBarComponent } from './frames/nav-bar/nav-bar.component';
import { FooterInfoComponent } from './frames/footer-info/footer-info.component';
import { PageBListaComponent } from './pages/page-b-lista/page-b-lista.component';
import { CarouselComponent } from './frames/carousel/carousel.component';
import { ItemFrameComponent } from './pages/page-b-lista/item-frame/item-frame.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequest } from 'src/services/httpRest.component.service';
import { PageHistoryComponent } from './pages/page-history/page-history.component';
import { PageSaudeComponent } from './pages/page-saude/page-saude.component';
import { ItemDicasComponent } from './pages/page-saude/item-dicas/item-dicas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasComponent } from './pages/page-a/canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    FooterComponent,
    NavBarComponent,
    FooterInfoComponent,
    PageBListaComponent,
    CarouselComponent,
    ItemFrameComponent,
    PageHistoryComponent,
    PageSaudeComponent,
    ItemDicasComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpRequest],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
