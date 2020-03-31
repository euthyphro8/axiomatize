const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue")
      },
      {
        path: "1-1",
        component: () => import("pages/levels/beginner/1.vue")
      },
      {
        path: "1-2",
        component: () => import("pages/levels/beginner/1.vue")
      },
      {
        path: "1-3",
        component: () => import("pages/levels/beginner/1.vue")
      },
      {
        path: "1-4",
        component: () => import("pages/levels/beginner/1.vue")
      },
      {
        path: "1-5",
        component: () => import("pages/levels/beginner/1.vue")
      },
      {
        path: "1-6",
        component: () => import("pages/levels/beginner/1.vue")
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
