
export const Button = () => {
  // Объявляем функцию для обработки клика по кнопке
  const handleClick = () => {
    console.log('Button clicked!');
  }

  // Возвращаем кнопку с обработчиком события onClick
  return <button onClick={handleClick}>Click me!</button>;
}