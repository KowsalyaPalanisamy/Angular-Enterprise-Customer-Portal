import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { CustomerList } from './features/customers/customer-list/customer-list';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },

    {
        path: 'customers',
        component: CustomerList
    }

];