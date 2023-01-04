import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Affiliation entraineurs',
    path: '/admin/affiliation/coach',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Affiliation Arbitres',
    path: '/admin/affiliation/arbitrator',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Affiliation Clubs',
    path: '/admin/clubAffiliation',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
];
