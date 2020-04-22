const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue")
  },
  {
    name: "Menu",
    path: "/menu",
    component: () => import("layouts/MenuLayout.vue")
  },
  {
    path: "/game",
    component: () => import("layouts/GameLayout.vue"),
    children: [
      {
        name: "T1",
        path: "/0-1",
        component: () => import("pages/levels/tutorial/T1.vue")
      },
      {
        name: "T2",
        path: "/0-2",
        component: () => import("pages/levels/tutorial/T2.vue")
      },
      {
        name: "B1",
        path: "/1-1",
        component: () => import("pages/levels/beginner/B1.vue")
      },
      {
        name: "B2",
        path: "/1-2",
        component: () => import("pages/levels/beginner/B1.vue")
      },
      {
        name: "B3",
        path: "/1-3",
        component: () => import("pages/levels/beginner/B1.vue")
      },
      {
        name: "B4",
        path: "/1-4",
        component: () => import("pages/levels/beginner/B1.vue")
      },
      {
        name: "B5",
        path: "/1-5",
        component: () => import("pages/levels/beginner/B1.vue")
      },
      {
        name: "B6",
        path: "/1-6",
        component: () => import("pages/levels/beginner/B1.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
