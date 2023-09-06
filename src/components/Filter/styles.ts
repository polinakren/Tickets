import styled from '@emotion/styled';
import { Checkbox, Form, Radio, Typography } from 'antd';

export const StyledTitle = styled(Typography)`
  margin-bottom: 8px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
`;

export const Spacer = styled.div`
  min-width: 200px;
  max-height: 270px;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
`;

export const StyledCheckboxGroup = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;

  .ant-checkbox-wrapper {
    padding: 5px;
    &:hover {
      background-color: #f2fcff;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  padding: 5px;
  &:hover {
    background-color: #f2fcff;
  }
`;

export const StyledCheckboxBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledFormItem = styled(Form.Item)`
  margin: 0;
`;

export const StyledRadioBtn = styled(Radio.Button)`
  color: #2196f3;
  padding: 0 18px;
  &:hover {
    background-color: #f2fcff;
  }
`;
