import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { LifeCycleHookExampleComponent } from './life-cycle-hook-example/life-cycle-hook-example.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { DifferencesExampleComponent } from './differences-example/differences-example.component';
import { NgrxExampleComponent } from './ngrx-example/ngrx-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { ComponentCommunicationExampleComponent } from './component-communication-example/component-communication-example.component';
import { ModuleExampleComponent } from './module-example/module-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ErrorExampleComponent } from './error-example/error-example.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentExampleComponent,
    PipeExampleComponent,
    LifeCycleHookExampleComponent,
    RxjsExampleComponent,
    DifferencesExampleComponent,
    NgrxExampleComponent,
    DirectiveExampleComponent,
    DataBindingExampleComponent,
    ComponentCommunicationExampleComponent,
    ModuleExampleComponent,
    TemplateExampleComponent,
    ServiceExampleComponent,
    ErrorExampleComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
