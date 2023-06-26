
//   {
//     '/dashboard/analysis': {
//       component: DynamicComponent(),
//       name: '分析页',
//     },
//     '/dashboard/monitor': {
//       component: DynamicComponent(),
//       name: '监控页',
//     },
//     '/dashboard/workplace': {
//       component: DynamicComponent(),
//       name: '工作台',
//     },

// '/dashboard/test': {
//     component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Test')),
//   },
//   }

import React from "react";
const Card=React.lazy(()=>import('../components/card/main'));
const Addtode=React.lazy(()=>{import('../components/addtodo/addtode')});
const Listshow=React.lazy(()=>import('../components/addtodo/listshow'));

const routes=[
    {
        path:"/home",
        element:<Card></Card>
    },
    {
        path:"/todo",
        element:<Addtode></Addtode>
    },
    {
        path:"/test",
        element:<Listshow></Listshow>
    }
]

export default routes;