import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';

export const Content = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const LanguageSelectIcon = styled(LanguageIcon)`
  margin-right: 0.5rem;
`;

export const PlatformAndRegion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  flex-grow: 0;
`;

export const Id = styled(Typography)`
  flex-grow: 0;
`;

export const Region = styled(Typography)`
  flex-grow: 0;
`;

export const Platform = styled(Typography)`
  flex-grow: 0;
`;

export const Description = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-style: italic;
  margin-top: 1rem;
`;
