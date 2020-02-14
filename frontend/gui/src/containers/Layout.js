import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'


const { Header, Sider, Content } = Layout;

class SiderDemo extends Component {
  constructor(props){
      super(props)
      this.state = {
        collapsed: props.false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to='/'><Icon type="home" />
              <span>Home</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to='/'><Icon type="user" />
              <span>User</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/image'><Icon type="picture" />
              <span>Picture</span></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/contact'><Icon type="contacts" />
              <span>Contact Us</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
           {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

//ReactDOM.render(<SiderDemo />, mountNode);