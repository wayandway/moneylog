'use client';
import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import Slide from '@mui/material/Slide';
import Link from 'next/link';

import * as S from './style.ts';

function HideOnScroll(props) {
  const { children } = props;
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Header() {
  return (
    <HideOnScroll>
      <S.Container position="static" color="secondary">
        <S.ToolbarContainer>
          {/* 로고를 클릭하면 홈으로 이동 */}
          <S.Logo>
            <Link href="/">MONEYLOG</Link>
          </S.Logo>

          {/* 헤더 우측 버튼들 */}
          <S.RightIcons>
            {/* 게시물 작성 페이지로 이동 */}
            <Link href="/write">
              <IconButton color="inherit">
                <EditIcon />
              </IconButton>
            </Link>
            {/* 알림 */}
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            {/* 사용자 프로필 or 로그인/회원가입 */}
            <IconButton color="inherit">
              <Avatar alt="유저 프로필" src="" />
            </IconButton>
          </S.RightIcons>
        </S.ToolbarContainer>
      </S.Container>
    </HideOnScroll>
  );
}
