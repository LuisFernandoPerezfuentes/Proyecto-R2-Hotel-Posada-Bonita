import {NgModule} from '@angular/core';

import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';



import { NavpagesComponent } from '../components/navpages/navpages.component';
import { IndexComponent } from '../components/index/index.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NosotrosComponent } from '../components/nosotros/nosotros.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { Route } from '@angular/compiler/src/core';
import { UserComponent } from '../components/user/user.component';
import { SignUpComponent } from '../components/user/sign-up/sign-up.component';
import { SignInComponent } from '../components/user/sign-in/sign-in.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { SuppliesComponent } from '../components/supplies/supplies.component';




const routes: Routes = [
    {path: 'navpages', component: NavpagesComponent},
    {path: 'index', component: IndexComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'supplies', component: SuppliesComponent},
    {path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]},
    {path: 'signup', component: UserComponent, 
    children: [{ path: '', component: SignUpComponent }]},
    {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports:[RouterModule],
})
export class RouteModule {}