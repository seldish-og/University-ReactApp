
// Создаем функциональный компонент Welcome
export const Welcome = (props) => {
  // Возвращаем JSX-элемент с использованием props
  return <h1>Hello, {props.name}</h1>;
}