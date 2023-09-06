import { useState } from 'react';
import { Checkbox, Form, Radio } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import { transfer } from '~utils/transfer';
import {
  Spacer,
  StyledCheckboxGroup,
  StyledCheckboxBlock,
  StyledFormItem,
  StyledRadioBtn,
  StyledTitle,
  StyledCheckbox,
} from './styles';

export interface TicketFilterValues {
  currency?: string;
  stops: number[];
}

interface FilterProps {
  onFilterChange: (filter: TicketFilterValues) => void;
  initialValues: TicketFilterValues;
}

export const Filter = ({ onFilterChange, initialValues }: FilterProps) => {
  const [form] = Form.useForm();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(initialValues.stops);

  const checkAll = transfer.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < transfer.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const newCheckedList = e.target.checked ? [0, 1, 2, 3] : [];
    setCheckedList(newCheckedList);
    form.setFieldsValue({ stops: newCheckedList });
    onFilterChange({ stops: newCheckedList });
  };

  return (
    <Spacer>
      <Form form={form} onValuesChange={v => onFilterChange(v)} initialValues={initialValues}>
        <StyledTitle>Валюта</StyledTitle>
        <StyledFormItem name='currency'>
          <Radio.Group buttonStyle='solid'>
            <StyledRadioBtn value='RUB'>RUB</StyledRadioBtn>
            <StyledRadioBtn value='USD'>USD</StyledRadioBtn>
            <StyledRadioBtn value='EUR'>EUR</StyledRadioBtn>
          </Radio.Group>
        </StyledFormItem>
        <StyledCheckboxBlock>
          <StyledTitle>Количество пересадок</StyledTitle>
          <StyledCheckbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Все
          </StyledCheckbox>
          <StyledFormItem name='stops'>
            <StyledCheckboxGroup options={transfer} value={checkedList} onChange={onChange} />
          </StyledFormItem>
        </StyledCheckboxBlock>
      </Form>
    </Spacer>
  );
};
