const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRl',
  }).format(value); // TODO

export default formatValue;
