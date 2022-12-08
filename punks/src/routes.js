import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: React.lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/term-condition",
    component: lazy(() =>
      import("src/views/pages/StaticPages/TermsAndCondition")
    ),
  },
  {
    exact: true,
    path: "/privacy",
    component: lazy(() => import("src/views/pages/StaticPages/PrivacyPolicy")),
  },
  // {
  //   exact: true,
  //   path: "/wallet",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Wallet/Index")),
  // },
  
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },

  {
    component: () => <Redirect to="/404" />,
  },
];
