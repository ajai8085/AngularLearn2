import { ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component'

// @NgModule({
//     imports: [
//         RouterModule.forRoot([

//             { path: 'welcome', component: WelcomeComponent },
//             { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//             { path: "**", redirectTo: 'welcome', pathMatch: 'full' }
//         ], { useHash: false })
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {

// }



const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent }
];

export const routing: ModuleWithProviders =
               RouterModule.forRoot(appRoutes);
