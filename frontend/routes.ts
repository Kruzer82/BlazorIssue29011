import { Route } from '@vaadin/router';
import './views/main/main-view';
import './views/helloworld/hello-world-view';



export type ViewRoute = Route & { title?: string; children?: ViewRoute[] };

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
{
    path: '',
    component: 'hello-world-view',
    title: '',
    
},
{
    path: 'hello',
    component: 'hello-world-view',
    title: 'Hello World',
    
},
{
    path: 'about',
    component: 'about-view',
    title: 'About',
    action: async () => { await import ('./views/about/about-view'); }
},
{
    path: 'users',
    component: 'users-view',
    title: 'Users',
    action: async () => { await import ('./views/users/users-view'); }
},
];
export const routes: ViewRoute[] = [
{
    path: '',
    component: 'main-view',
    children: [
        ...views,
        
    ]
}
];
