import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { userPaths } from "../../routes/user.routes";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  USER: "user",
  ADMIN: "admin",
};

const Sidebar = () => {

    const  user = useAppSelector(useCurrentUser)
  let sidebarItems;

  switch (user!.role) {
      case userRole.USER:
        sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
        break;
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator([{name: ""}], userRole.ADMIN);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Book Management</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
