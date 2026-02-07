export interface IPost {
  id: number;
  title: string;
  body: string;
}

export const posts: IPost[] = [
  { id: 1, title: 'Первый пост', body: 'Текст поста' },
  { id: 2, title: 'Второй пост', body: 'Текст второго поста' },
  { id: 3, title: 'Третий пост', body: 'Текст третьего поста' },
  { id: 4, title: 'Четвертый пост', body: 'Текст четвертого поста' },
  { id: 5, title: 'Пятый пост', body: 'Текст пятого поста' },
  { id: 6, title: 'Шестой пост', body: 'Текст шестого поста' },
  { id: 7, title: 'Седьмой пост', body: 'Текст седьмого поста' },
  { id: 8, title: 'Восьмой пост', body: 'Текст восьмого поста' },
];
