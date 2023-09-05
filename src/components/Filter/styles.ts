import styled from '@emotion/styled';
import { Checkbox, Form, Typography } from 'antd';

export const StyledTitle = styled(Typography)`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
`;

export const Spacer = styled.div`
  min-width: 200px;
  max-height: 230px;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
`;

export const StyledCheckbox = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`;

export const StyledCheckboxBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledFormItem = styled(Form.Item)`
  margin: 0;
`;
