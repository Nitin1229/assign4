import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImageComponent } from './image/image.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  {path: '', redirectTo: 'image', pathMatch: 'full'},
  {path: 'image', component:ImageComponent},
  {path: 'image/output', component: OutputComponent},
  {path: 'image/output/imageDisplay', component: ImageDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
