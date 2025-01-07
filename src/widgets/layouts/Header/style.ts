import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import colors from '@/shared/styles/colors';

export const Container = styled(AppBar)`
  background-color: ${colors.white};
  box-shadow: none;
  border-bottom: 1px solid ${colors.gray[300]};
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const Logo = styled.h1`
  cursor: pointer;
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
