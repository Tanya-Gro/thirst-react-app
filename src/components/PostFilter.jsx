import React from 'react'
import { MySelect } from "./UI/select/MySelect";
import { MyInput } from "./UI/input/MyInput";

export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput 
        type="text" 
        placeholder="Поиск"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      
      <MySelect
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'}
        ]}
        value={filter.sort}
        onChange={selectedSort=> setFilter({...filter, sort: selectedSort}) }
      />
    </div>
  )
}
