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
                }
            },
            {
                path: "/about",
                name: "about",
                component: AboutPage,
                meta: {
                    title: "О проекте",
                    din: false,
                }
            },
            {
                path: "/:itemAlias",
                name: "itemAlias",
                component: Item,
                meta: {
                    title: null,
                    din: true,
                }
            },
            {
                path: "/404",
                name: "notFound",
                component: notFoundPage,
                meta: {
                    title: "страница не найдена",
                    din: false,
                }
            },
            {
                path: "/:CatchAll(.*)",
                redirect: "/404"
            },

        ]
    }
)

routers.beforeEach((to,from, next) => {
    if (!to.meta.din) {document.title = `${site.title} - ${to.meta.title}`;}
    next();
})


export default routers;