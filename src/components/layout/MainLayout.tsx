import { Button, Layout } from "antd";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content} = Layout;
 

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = ()=>{
dispatch(logout())
  }

  return (
    <Layout style={{minHeight : "100vh"}}>
    <Sidebar />
    <Layout> 
      <Header style={{ padding: 0, display: "flex" , justifyContent: "flex-end" , alignItems: "center"}}>
        <Button onClick={handleLogout} style={{marginRight: "20px", backgroundColor: "#99BC85", color : "white", padding : "20px 40px",display: "flex",alignItems: "center" }}>Logout</Button>
         </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  </Layout>
  );
};

export default MainLayout;
