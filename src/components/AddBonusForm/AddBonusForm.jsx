import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { formatDate } from 'utils/formatDate';
import { formatDateWithHours } from 'utils/formatDateWithHours';

// import { useDispatch } from 'react-redux';
// import { addBonus } from 'redux/bonus/bonus-slice';

const AddBonusForm = ({ setItemsState }) => {
  const [goodss, setGoods] = useState('homefood');

  // const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isDirty, dirtyFields, watch },
    handleSubmit,
    resetField,
  } = useForm();
  const countBonus = weight => {
    return weight * 20;
  };

  const onSubmit = ({ goods, weight, bonus: initialBounus }) => {
    const rowDate = Date.now();
    // const rowDate = 1676411000000;
    const dateData = formatDateWithHours(rowDate);
    console.log(dateData);
    const date = formatDate(rowDate);
    const bonus = initialBounus ? Number(initialBounus) : countBonus(weight);
    console.log(bonus);
    setItemsState({
      goods,
      bonus: parseInt(bonus * 100) / 100,
      id: rowDate,
      dateData,
    });
    resetField('bonus');
    resetField('weight');
  };

  const onSelectChange = e => {
    setGoods(e.target.value);
  };

  const boolea = goodss === 'Miocane' || goodss === 'Miogato';

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Виберіть товар
        <Select name="goods" {...register('goods')} onChange={onSelectChange}>
          <Option value="Home Food">Home Food</Option>
          <Option value="Albian">Albian</Option>
          <Option value="Gosbi">Gosbi</Option>
          <Option value="Miocane">Miocane</Option>
          <Option value="Miogato">Miogato</Option>
        </Select>
      </Label>

      {/* {goodss === 'Miocane' || goodss === 'Miogato' ? ( */}

      {boolea && (
        <Label>
          Введіть суму бонусів
          <Input
            type="number"
            step="0.01"
            {...register('bonus', { required: true })}
          ></Input>
        </Label>
      )}

      {!boolea && (
        <Label>
          Введіть вагу в кг
          <Input
            type="number"
            step="0.001"
            {...register('weight', { required: true })}
          ></Input>
        </Label>
      )}

      <Btn type="submit">Добавити</Btn>
    </Form>
  );
};

export default AddBonusForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  justify-content: center;

  /* margin: 0 auto; */

  width: 400px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  height: 20px;
  width: 100px;
  padding: 10px;
  border-radius: 4px;
`;

const Select = styled.select``;

const Option = styled.option``;

const Btn = styled.button``;

const Summ = styled.p`
  position: relative;

  margin-top: 20px;
  margin-bottom: 10px;
`;

const Line = styled.span`
  ::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: -5px;
    height: 2px;
    border-radius: 21px;
    transition: all 0.3s ease 0s;
    background-color: black;

    width: 100%;
  }
`;
