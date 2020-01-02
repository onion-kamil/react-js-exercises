const Header = props => {
  const activeItems = props.items.filter(item => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkosć zamówienia: {number}</h2>
      <h2>
        {number
          ? `Do zapłaty: ${number * 10} złotych`
          : "Nie masz nic w koszyku!"}
      </h2>
    </header>
  );
};
