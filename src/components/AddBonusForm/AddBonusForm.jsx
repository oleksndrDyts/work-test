import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { formatDateWithHours } from 'utils/formatDateWithHours';

// import { useDispatch } from 'react-redux';
// import { addBonus } from 'redux/bonus/bonus-slice';

const regExp = /^[\d|\.|\,]+/; // eslint-disable-line

const AddBonusForm = ({ setItemsState }) => {
  const [goodss, setGoods] = useState('Home Food');

  // const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm();

  const countBonus = (weight, type) => {
    console.log(type);
    switch (type) {
      case 'Home Food premium':
      case 'Paw paw':
        return parseInt(weight * 10 * 100) / 100;

      case 'Home Food':
      case 'Albian':
      case 'Gosbi':
      case 'My Foob':
      case 'Mystic':
        return parseInt(weight * 20 * 100) / 100;

      case 'Nutra cat':
      case 'Nutra dog':
        return 0;

      default:
        break;
    }
    console.log(type);
    return weight * 20;
  };

  const onSubmit = ({ goods, weight, bonus: initialBounus }) => {
    const rowDate = Date.now();
    const dateData = formatDateWithHours(rowDate);
    const bonus = initialBounus
      ? Number(initialBounus)
      : countBonus(weight, goods);

    setItemsState({
      goods,
      bonus,
      id: rowDate,
      dateData,
      weight,
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
          <Option value="Home Food premium">Home Food premium</Option>
          <Option value="Albian">Albian</Option>
          <Option value="Gosbi">Gosbi</Option>
          <Option value="Miocane">Miocane</Option>
          <Option value="Miogato">Miogato</Option>
          <Option value="Nutra cat">Nutra cat</Option>
          <Option value="Nutra dog">Nutra dog</Option>
          <Option value="Paw paw">Paw paw</Option>
          <Option value="My Foob">My Foob</Option>
          <Option value="Mystic">Mystic</Option>
        </Select>
      </Label>

      {/* {goodss === 'Miocane' || goodss === 'Miogato' ? ( */}

      {boolea && (
        <Label>
          Введіть суму бонусів
          <Input
            type="number"
            step="0.01"
            {...register('bonus', {
              required: true,
              pattern: { value: regExp, message: 'Тільки числа' },
            })}
          ></Input>
        </Label>
      )}

      {!boolea && (
        <Label>
          Введіть вагу в кг
          <Input
            type="number"
            step="0.001"
            {...register('weight', {
              required: true,
              pattern: { value: regExp, message: 'Тільки числа' },
            })}
          ></Input>
        </Label>
      )}
      {/* {errors?.weight?.type === 'required' && <p>Поле обовязкове</p>} */}
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

  /* width: 400px; */
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  height: 20px;
  width: 100px;
  padding: 10px;
  border-radius: 4px;

  font-size: 16px;
`;

const Select = styled.select``;

const Option = styled.option``;

const Btn = styled.button`
  font-size: 16px;
  padding: 10px;
  /* @media screen and (min-width: 515px) {
  } */
`;
