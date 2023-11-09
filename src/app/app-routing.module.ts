import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
     {
          path: '',
          loadChildren: () => import('./views/layouts/layouts.module').then((m) => m.LayoutsModule)
     },
     {
          path: '**',
          component: NopagefoundComponent
     }
];

// prettier-ignore
@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [
      RouterModule,
    ]


})
export class AppRoutingModule {}
