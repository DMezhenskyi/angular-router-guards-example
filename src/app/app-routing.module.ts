import { ListComponent } from './admin/list/list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { FormGuardGuard } from './auth/form-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        canActivateChild: [PermissionsGuard],
        children: [
          {
            path: 'add-user',
            canDeactivate: [FormGuardGuard],
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            canDeactivate: [FormGuardGuard],
            component: AddProductComponent,
          },
        ],
      },
      { path: 'list', component: ListComponent },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
