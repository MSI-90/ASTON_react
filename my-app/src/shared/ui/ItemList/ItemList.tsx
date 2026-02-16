
interface ItemListProps<T> {
  itemList: T[];
  componentOnRender: (item: T) => React.ReactNode;
  loading?: boolean;
  error?: boolean;
  className?: string;
  currentItemId?: number;
}

export default function ItemList<T>(props:ItemListProps<T>) {
  const {
    itemList,
    componentOnRender,
    loading,
    error,
    className,
    currentItemId
  } = props;
  return (
    <>
      <div className={className}>
        {currentItemId && <h3>Текущий альбом: {currentItemId}</h3>}
        {loading && <h1>Загрузка...</h1>}
        {error && <p>Ошибка....</p>}
        {itemList.length === 0 && <p>Нет данных</p>}
        {itemList &&
          itemList.map((item) =>
            componentOnRender(item) )}
      </div>
    </>
  )
}