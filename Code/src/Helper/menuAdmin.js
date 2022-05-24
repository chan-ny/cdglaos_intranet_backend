const menuAdmin = [
  {
    titleENG: "Dashboard",
    titleLAO: "ໜ້າແລກ",
    icon: "mdi-view-dashboard",
    route: "/",
  },
  {
    titleENG: "Account",
    titleLAO: "ເພີ່ມບັນຊີຜູ້ໃຊ້",
    icon: "mdi-account-box-multiple",
    route: "/account",
  },
  {
    titleENG: "Users",
    titleLAO: "ຂໍ້ມູນຜູ້ໃຊ້",
    icon: "mdi-account-group",
    route: "/users",
  },
  {
    titleENG: "Province",
    titleLAO: "ຂໍ້ມູນແຂວງ",
    icon: "mdi-city-variant-outline",
    route: "/province",
  },
  {
    titleENG: "District",
    titleLAO: "ຂໍ້ມູນເມືອງ",
    icon: "mdi-format-list-bulleted",
    route: "/district",
  },
  {
    titleENG: "Gender",
    titleLAO: "ຂໍ້ມູນເພດ",
    icon: "mdi-gender-transgender",
    route: "/gender",
  },
  {
    titleENG: "Permission",
    titleLAO: "ອະນຸຍາດເຂົ້າໃຊ້ງານ",
    icon: "mdi-account-key",
    route: "/permission",
  },
];

const userMenu = [
  {
    Id: 1,
    titleENG: "Dashboard",
    titleLAO: "ໜ້າແລກ",
    icon: "mdi-view-dashboard",
    route: "/",
  },
  {
    Id: 1,
    titleENG: "Management",
    titleLAO: "ຈັດການຂໍ້ມູນ",
    icon: "mdi-cog",
    submenu: "",
  },
];

module.exports = {
  menuAdmin,
  userMenu,
};
