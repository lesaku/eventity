import { Layout, Menu} from 'antd';
import React from 'react';
const { Header } = Layout;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">EVENTITY</Menu.Item>
        <Menu.Item key="2">Graph</Menu.Item>
        <Menu.Item key="3">Contact Us</Menu.Item>
      </Menu>
    </Header>
    </Layout>
    );
  }
}
export default Navbar