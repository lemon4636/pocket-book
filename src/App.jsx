import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";

const {
  //
  Header,
  Content,
  Footer,
} = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header
        theme="light"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          height: "46px",
          width: "100%",
          display: "flex",
          background: "#fff",
          padding: "0 20px",
        }}
      >
        <div
          className="logo"
          style={{
            marginRight: "25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              margin: 0,
              color: "#006fb8",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "100%",
            }}
          >
            PocketBook
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={window.location.hash.replace("#/", "")}
            // onClick={({ item, key, keyPath, domEvent }) => {
            //   console.log('dddddddd', item, key, keyPath, domEvent);
            // }}
          >
            <Menu.Item key="APS">
              <Link to="/APS">首页</Link>
            </Menu.Item>
            <Menu.Item key="test1">
              <Link to="/test1">统计</Link>
            </Menu.Item>
            <Menu.Item key="fileUpload">
              <Link to="/fileUpload">我的</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        PocketBook ©2024 Created by SonderDu
      </Footer>
    </Layout>
  );
}

export default App;
