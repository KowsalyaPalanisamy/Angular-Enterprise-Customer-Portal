import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { CustomerList } from './features/customers/customer-list/customer-list';
import { CustomerDetail } from './features/customers/customer-detail/customer-detail';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },

    {
        path: 'customers',
        component: CustomerList
    },

    {
        path: 'customers/:id',
        component: CustomerDetail
    },

    {
        path: '',
        component: CustomerDetail
    }

];