import { forwardRef, useState, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from 'utils/formatDate';

const DatePickers = ({ isTodayDate, setDateForFetch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="custom-input"
      onClick={() => {
        onClick();
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  const days = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'];
  const months = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  const locale = {
    localize: {
      day: n => days[n],
      month: n => months[n],
    },
    formatLong: {
      date: () => 'mm/dd/yyyy',
    },
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          setDateForFetch(formatDate(date), false);

          //   console.log(date);
          // console.log(new Date(date));
          // console.log(formatDate(date).slice(3));
        }}
        customInput={<ExampleCustomInput />}
        dateFormat="MMMM"
        showMonthYearPicker
        locale={locale}
        wrapperClassName="date_picker"
        // onCalendarClose={() => {
        //   console.log('lox');
        // }}
      />
      <DatePickerWrapperStyles isTodayDate={isTodayDate} />
    </>
  );
};

export default DatePickers;

const DatePickerWrapperStyles = createGlobalStyle`
    .date_picker{
        width: 100px;
    }

    .custom-input {

            display: flex;
            align-items: center;
            justify-content: center;

            height: 39px;

            padding: 10px;

            font-weight: 500;
            border-radius: 4px;

            border:none;
            color: white;
            background-color: ${({ isTodayDate }) =>
              isTodayDate ? 'gray' : '#2da0e8'};
                cursor:pointer;

  
    }
`;
