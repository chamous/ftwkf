import {Layout, Menu} from 'antd';
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import {Link} from "react-router-dom";

const {
    Header, Content, Sider,
} = Layout;
const {SubMenu} = Menu;

export default class Navbar extends React.Component {

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
                            <h4 style={{color: "whitesmoke", textAlign: 'center', paddingBlock: 15}}>Admin
                                Dashboard</h4>
                            : <h4 style={{color: "whitesmoke", textAlign: 'center', paddingBlock: 15}}>Admin</h4>}
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item style={{pointerEvents: 'none', userSelect: "none"}} icon={<PieChartOutlined/>}>
                            Affiliation
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="Clubs">
                            <Menu.Item key="1"><Link to={'/admin/affiliation/clubs/affiliated'}>Déja affiliés</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={'/admin/affiliation/clubs/demand'}>Demandes</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={'/admin/affiliation/clubs/refused'}>Refusées</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined/>} title="Entraineurs">
                            <Menu.Item key="4"><Link to={'/admin/affiliation/coach/affiliated'}>Déja affiliés</Link></Menu.Item>
                            <Menu.Item key="5"><Link to={'/admin/affiliation/coach/demand'}>Demandes</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={'/admin/affiliation/coach/refused'}>Refusées</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<UserOutlined/>} title="Arbitres">
                            <Menu.Item key="7"><Link to={'/admin/affiliation/arbitrator/affiliated'}>Déja
                                affiliés</Link></Menu.Item>
                            <Menu.Item key="8"><Link to={'/admin/affiliation/arbitrator/demand'}>Demandes</Link></Menu.Item>
                            <Menu.Item key="9"><Link to={'/admin/affiliation/arbitrator/refused'}>Refusées</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<UserOutlined/>} title="Athlètes">
                            <Menu.Item key="12"><Link to={'/admin/affiliation/athlete/affiliated'}>Déja
                                affiliés</Link></Menu.Item>
                            <Menu.Item key="13"><Link to={'/admin/affiliation/athlete/demand'}>Demandes</Link></Menu.Item>
                            <Menu.Item key="14"><Link to={'/admin/affiliation/athlete/refused'}>Refusées</Link></Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub5" icon={<UserOutlined/>} title="Publications">
                            <Menu.Item key="15"><Link to={'/admin/posts/list'}>Liste des publications</Link></Menu.Item>
                            <Menu.Item key="16"><Link to={'/admin/posts/add'}>Ajouter publication</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{overflow: 'hidden', maxHeight: '100vh'}}>
                    <Header className="site-layout-background" style={{padding: 0, maxHeight: '80vh',}}>
                        <div style={{color: "red", display: 'flex', justifyContent: 'flex-end', paddingRight: 20}}>
                            <Link to={'/login'} onClick={() => {
                                localStorage.clear();
                            }} style={{cursor: 'pointer'}}>Déconnexion</Link>
                        </div>
                    </Header>
                    <Content style={{margin: '0 16px',overflow:'auto'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
