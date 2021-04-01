import React, { useState } from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";
//import { DateUtils } from 'react-day-picker';
//import moment from 'moment';
import { formatDate, parseDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";

const Example = (props) => {
  const [date, setDate] = useState({
    from: "",
    to: "",
  });

  const modifiers = { start: date.from, end: date.to };

  return (
    <div className="InputFromTo">
      <DayPickerInput
        value={date.from}
        placeholder="From"
        format="LL"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          selectedDays: [date.from],
          disabledDays: { after: date.to },
          toMonth: date.to,
          modifiers,
          numberOfMonths: 2,
          // onDayClick: () => date.to.getInput().focus()
        }}
        onDayChange={props.from}
      />{" "}
      {"--->"}{" "}
      <span className="InputFromTo-to">
        <DayPickerInput
          // ref={el => (date.to = el)}
          value={date.to}
          placeholder="To"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [date.from],
            disabledDays: { before: date.from },
            modifiers,
            month: date.from,
            fromMonth: date.from,
            numberOfMonths: 2,
          }}
          onDayChange={props.to}
        />
      </span>
    </div>
  );
};
export default Example;
