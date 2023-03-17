import { FC } from "react";
import { useLocation } from "react-router-dom";
import useBreadcrumbs, { BreadcrumbsRoute } from "use-react-router-breadcrumbs";
import s from "./Breadcrumbs.module.scss";

interface breadcrumbName {
  name1?: string;
  name2?: string;
}

const CustomPropsBreadcrumb :FC = ( props: breadcrumbName) => (<span>{props.name1}</span>);


const routes: BreadcrumbsRoute[] = [
  {
    path: "/",
    breadcrumb: CustomPropsBreadcrumb,
    props: {
      name1: "Pages"
     },
  },
  {
    path: "/admin/dashboard",
    breadcrumb: CustomPropsBreadcrumb,
    props: {
      name1: "Dashboard",
      name2: 'Main Dashboard'
     },
  },
  {
    path: "/admin/marketplace",
    breadcrumb: CustomPropsBreadcrumb,
    props: {
      name1: "NFT Marketplace",
      name2: 'NFT Marketplace'
     },
  },
  {
    path: "/admin/table",
    breadcrumb: CustomPropsBreadcrumb,
    props: {
      name1: "Tables",
      name2: 'Tables'
     },
  },
  {
    path: "/admin/kanban",
    breadcrumb: CustomPropsBreadcrumb,
    props: {
      name1: "Kanban",
      name2: 'Kanban'
     },
  },
  {
    path: "/admin/profile",
    breadcrumb: CustomPropsBreadcrumb,
    props: {
      name1: "Profile",
      name2: 'Profile'
     },
  },
];

export function Breadcrumds() {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });
  const loaction = useLocation();
  const title : any = routes.find(route => { return route.path === loaction.pathname})?.props?.name2
  return (
    <div className={s.bread}>
      <ul className={s.bread_list}>
        {
        breadcrumbs.map(({ match, breadcrumb }) => 
        (
          <li key={match.pathname} className={s.bread_item}>{breadcrumb}</li>
        )
        )
        }
      </ul>
      <h2 className={s.title}>
       {/* { Cach dung map
        routes.map((route: any, index: number) => 
        route?.path === title.pathname && <li key={index} className={s.bread_item}>{route.props?.name2}</li>
       )} */}
      {title}
      
      </h2>
    </div>
  );
}
