export interface NavItem {
    title: string;
    link?: string;
    children?: NavItem[];
  }
  
  export const NAV_MENU: NavItem[] = [
    {
      title: "Projects",
      children: [
        { title: "Work In Progress", link: "/projects/wip" },
        { title: "Test Phases", link: "/projects/test-phases" },
        { title: "Production Tables", link: "/projects/production-tables" }
      ]
    },
    { title: "Production Tables", link: "/productionTables" },
    { title: "Admin", link: "/admin" },
    { title: "RUGS", link: "/rugs" }
  ];
  