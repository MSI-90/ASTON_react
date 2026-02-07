import {useState} from "react";
import type {IPostList} from "../../../widgets/PostList/testData/Post.ts";
import {filterByLength} from "../lib/filterByLength.ts";
import './PostLengthFilter.css';

interface IPostLengthFilter {
  labelPreview: string;
  minValue: number;
  originalPosts: IPostList[];
  onPostChange: (post: IPostList[]) => void;
}

export default function PostLengthFilter({labelPreview, minValue, originalPosts, onPostChange}: IPostLengthFilter) {
  const [value, setValue] = useState(minValue);
  const [valueError, setValueError] = useState('');


  return (
    <>
      <div className={'post-filter'}>
        <label htmlFor={'post-filter'}>{labelPreview}</label>
        <input
          type='number'
          name={'post-filter'}
          placeholder='post Length'
          value={value}
          onChange={(event) => {
            if (!Number(event.target.value)){
              setValueError('Введите корректное число')
            } else {
              setValueError('')
              const newValue = parseInt(event.target.value);
              setValue(newValue);
              onPostChange(filterByLength(originalPosts, newValue));
            }
          }}
        />
        {valueError && <span>{valueError}</span>}
      </div>
    </>
  )
}