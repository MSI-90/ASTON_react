import {useState, useId} from "react";
import './PostLengthFilter.css';

interface IPostLengthFilter {
  labelPreview: string;
  minValue: number;
  onChange: (value: number) => void;
}

export default function PostLengthFilter({labelPreview, minValue, onChange}: IPostLengthFilter) {
  const [value, setValue] = useState(minValue);
  const [valueError, setValueError] = useState('');
  const id = useId();

  return (
    <>
      <div className={'post-filter'}>
        <label htmlFor={id}>{labelPreview}</label>

        <input
          type="number"
          id={id}
          value={value}
          onChange={(e) => {
            const raw = e.target.value;

            if (!Number(raw)) {
              setValueError('Введите корректное число');
              return;
            }

            setValueError('');
            const newValue = Number(raw);

            setValue(newValue);
            onChange(newValue);
          }}
        />

        {valueError && <span>{valueError}</span>}
      </div>
    </>
  )
}