export const adminMenu = [
  {
    //hệ thống
    name: "menu.admin.manage-user",
    menus: [
      {
        //quản lý người dùng
        name: "menu.admin.crud",
        link: "/system/user-manage",
      },
      {
        //quản lý người dùng
        name: "menu.admin.crud-redux",
        link: "/system/user-redux",
      },
      {
        //quản lý người dùng
        name: "menu.admin.manage-doctor",
        link: "/system/manage-doctor",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
        //   {
        //     name: "menu.system.system-administrator.user-redux",
        //     link: "/system/user-redux",
        //   },
        // ],
      },
      // {
      //   //quản lý người dùng
      //   name: "menu.admin.manage-admin",
      //   link: "/system/user-admin",
      // },
      {
        //Quản lý kế hoạch khám bệnh của bác sĩ

        name: "menu.doctor.manage-schedule",
        link: "/doctor/manage-schedule",
      },
    ],
  },
  {
    //quản lý phòng khám
    name: "menu.admin.clinic",
    menus: [
      {
        //quản lý người dùng
        name: "menu.admin.manage-clinic",
        link: "/system/manage-clinic",
      },
    ],
  },
  {
    //quản lý chuyên khoa
    name: "menu.admin.clinic",
    menus: [
      {
        //quản lý Chuyên khoa
        name: "menu.admin.manage-specialty",
        link: "/system/manage-specialty",
      },
    ],
  },
  {
    //quản lý cẩm nang
    name: "menu.admin.handbook",
    menus: [
      {
        //quản lý Chuyên khoa
        name: "menu.admin.manage-handbook",
        link: "/system/manage-handbook",
      },
    ],
  },
];
export const doctorMenu = [
  {
    name: "menu.doctor.manage-schedule",
    menus: [
      {
        //quản lý khám bệnh của bác sĩ
        name: "menu.doctor.manage-schedule",
        link: "/doctor/manage-schedule",
      },
      {
        name: "menu.doctor.manage-patient",
        link: "/doctor/manage-patient",
      },
    ],
  },
];
