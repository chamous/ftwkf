import {Layout, Menu} from 'antd';
import {
    SettingOutlined,
    UnorderedListOutlined, UsergroupAddOutlined,
} from '@ant-design/icons';
import React from 'react';
import {Link} from "react-router-dom";

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
                        <Menu.Item key="10" icon={<UnorderedListOutlined />}>
                            <Link to={'/club/athlete/list'}>Liste des athlètes</Link>
                        </Menu.Item>
                        <Menu.Item key="11" icon={<UsergroupAddOutlined />}>
                            <Link to={'/club/athlete/add'}>ajouter un athlète</Link>
                        </Menu.Item>
                        <Menu.Item key="12" icon={<SettingOutlined />}>
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
