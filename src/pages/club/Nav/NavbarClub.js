import {Layout, Menu} from 'antd';
import {
    SettingOutlined,
    UnorderedListOutlined, UsergroupAddOutlined, UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import {Link} from "react-router-dom";
import SubMenu from 'antd/lib/menu/SubMenu';

const {
    Header, Content, Sider,
} = Layout;

export default class NavbarClub extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        {!collapsed ?
                            <h4 style={{color: "whitesmoke", textAlign: 'center', paddingBlock: 15}}>Club
                                Dashboard</h4>
                            : <h4 style={{color: "whitesmoke", textAlign: 'center', paddingBlock: 15}}>Club</h4>}
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['10']} mode="inline">
                        <SubMenu key="sub8" icon={<UserOutlined/>} title="Athlètes">
                            <Menu.Item key="23" icon={<UnorderedListOutlined />}>
                                <Link to={'/club/athlete/list'}>Liste des athlètes</Link>
                            </Menu.Item>
                            <Menu.Item key="24" icon={<UsergroupAddOutlined />}>
                                <Link to={'/club/athlete/add'}>Ajouter un athlète</Link>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub9" icon={<UserOutlined/>} title="Entraineur">
                            <Menu.Item key="25" icon={<UnorderedListOutlined />}>
                                    <Link to={'/club/coach/list'}>Liste des entraineur</Link>
                                </Menu.Item>
                                <Menu.Item key="26" icon={<UsergroupAddOutlined />}>
                                    <Link to={'/club/coach/add'}>Ajouter un entraineur</Link>
                                </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub10" icon={<UserOutlined/>} title="Accompagnant">
                        <Menu.Item key="27" icon={<UsergroupAddOutlined />}>
                            <Link to={'/club/attendant/add'}>Ajouter un accompagnant</Link>
                        </Menu.Item>
                                <Menu.Item key="28" icon={<UsergroupAddOutlined />}>
                                    <Link to={'/club/attendant/list'}>Liste des accompagnants</Link>
                                </Menu.Item>
                        </SubMenu>
                        
                        <Menu.Item key="29" icon={<SettingOutlined />}>
                            <Link to={'/club/update-password'}>Changer mot de passe</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{overflow: 'hidden', maxHeight: '100vh'}}>
                    <Header className="site-layout-background" style={{padding: 0, maxHeight: '80vh',}}>
                        <div style={{color:"red",display:'flex',justifyContent:'flex-end',paddingRight:20}}>
                            <Link to={'/login'} onClick={()=>{
                                localStorage.clear();
                            }} style={{cursor:'pointer'}}>Déconnexion</Link>
                        </div>
                    </Header>
                    <Content style={{margin: '0 16px',overflowY: "auto"}}>
                        <div className="site-layout-background" style={{padding: 24}}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
