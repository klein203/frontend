import HomePage from './scenes/Home';
import ClockPage from './scenes/Demo/scenes/Clock';
import PopperPage from './scenes/Demo/scenes/Popper';
import TablePage from './scenes/Demo/scenes/Table';
import LoginPage from './scenes/Auth/scenes/Login';
import RegisterPage from './scenes/Auth/scenes/Register';
import PageNotFoundPage from './scenes/System/scenes/PageNotFound';


// simple router
// TODO: protected router under authentication
let router = [
    {
        path: '/',
        componentName: HomePage,
        exact: true,
    }, {
        path: '/demo/clock',
        componentName: ClockPage,
    }, {
        path: '/demo/popper',
        componentName: PopperPage,
    }, {
        path: '/demo/table',
        componentName: TablePage,
    }, {
        path: '/auth/login',
        componentName: LoginPage,
    }, {
        path: '/auth/register',
        componentName: RegisterPage,
    }, {
        componentName: PageNotFoundPage,
    }
];

export default router;