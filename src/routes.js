import {createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import notFoundPage from "@/pages/NotFoundPage";
import Item from "@/pages/_itemAlias"
import {site} from "@/_config";


const routers = createRouter(
    {
        history: routerHistory,
        routes: [
            {
                path: "/",
                name: "home",
                component: HomePage,
                meta: {
                    title: "Главная",
                    din: false,
                    isfound: true,
                }
            },
            {
                path: "/about",
                name: "about",
                component: AboutPage,
                meta: {
                    title: "О нас",
                    din: false,
                    isfound: true,
                }
            },
            {
                path: "/:itemAlias",
                name: "itemAlias",
                component: Item,
                meta: {
                    title: null,
                    din: true,
                    isfound: true,
                }
            },
            // {
            //     path: "/pers/:id",
            //     name: "itemAlias",
            //     component: Item,
            //     meta: {
            //         title: null,
            //         din: true,
            //         isfound: true,
            //     }
            // },
            // {
            //     path: "*",
            //     // redirect: '/404',
            //     name: "notFound",
            //     component: notFoundPage,
            //     meta: {
            //         title: "страница не найдена",
            //         din: false,
            //         isfound: false,
            //     }
            // },
            {
                path: "/:CatchAll(.*)",
                name: "notFound",
                component: notFoundPage,
                meta: {
                    title: "страница не найдена",
                    din: false,
                    isfound: false,
                }
            },
        ]
    }
)

routers.beforeEach((to,from, next) => {
    if (!to.meta.din) {document.title = `${site.title} - ${to.meta.title}`;}
    next();
})


export default routers;