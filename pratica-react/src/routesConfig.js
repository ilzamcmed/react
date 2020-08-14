import Home from "./Pages/Home/Home";
import User from "./Pages/Users/User";

const routesConfig = [
    {
        path: '/', 
        component: Home,
        exact: true
    },
    {
        path:'/user',
        component: User,
        exact: true
    }
]

export default routesConfig;