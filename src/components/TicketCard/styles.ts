import styled from '@emotion/styled';
import { Button, Typography } from 'antd';

export const Spacer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  border-radius: 5px;
  background-color: white;
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 25px;
  border-right: 2px solid #f1f3f5;
`;

export const StyledImg = styled.img`
  width: 80%;
`;

export const StyledBtn = styled(Button)`
  width: 100%;
  height: auto;
  background-color: #ff6d00;
  color: white;
  border: none;
  font-size: 17px;
  
  &:hover {
    background-color: #ff8124;
    color: white !important;
  }
`;

export const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  padding: 25px;
`;

export const DepartureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ArrivalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StyledTime = styled(Typography)`
  font-size: 40px;
`;

export const StyledDate = styled(Typography)`
  color: #b7b7b7;
`;

export const StyledStop = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: #b7b7b7;
  font-size: 12px;
`;

export const StyledPlane = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledHr = styled.hr`
  width: 110px;
  margin: 0;
  border: none;
  border-top: 2px solid #f1f3f5;
`;

export const StyledStopsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
