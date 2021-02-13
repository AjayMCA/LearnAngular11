import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentCommunicationExampleComponent } from './component-communication-example/component-communication-example.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { DifferencesExampleComponent } from './differences-example/differences-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { ErrorExampleComponent } from './error-example/error-example.component';
import { HomeComponent } from './home/home.component';
import { LifeCycleHookExampleComponent } from './life-cycle-hook-example/life-cycle-hook-example.component';
import { ModuleExampleComponent } from './module-example/module-example.component';
import { NgrxExampleComponent } from './ngrx-example/ngrx-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'component', component: ComponentExampleComponent },
  { path: 'componentCommunication', component: ComponentCommunicationExampleComponent },
  { path: 'dataBinding', component: DataBindingExampleComponent },
  { path: 'difference', component: DifferencesExampleComponent },
  { path: 'lifeCycleHook', component: LifeCycleHookExampleComponent },
  { path: 'module', component: ModuleExampleComponent },
  { path: 'ngrx', component: NgrxExampleComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'rxjs', component: RxjsExampleComponent },
  { path: 'services', component: ServiceExampleComponent },
  { path: 'template', component: TemplateExampleComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'directive', component: DirectiveExampleComponent },
  { path: '**', component: ErrorExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
