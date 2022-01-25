/* eslint-disable react/jsx-curly-newline */
import InputText from '../UI/InputText/InputText';
import SelectSort from '../UI/SelectSort/SelectSort';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <InputText
        placeholder="Поиск"
        value={filter.query}
        onChange={(event) => setFilter({ ...filter, query: event.target.value })
        }
      />
      <SelectSort
        value={filter.sort}
        onChange={(selectedOption) => setFilter({ ...filter, sort: selectedOption })
        }
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );
}
