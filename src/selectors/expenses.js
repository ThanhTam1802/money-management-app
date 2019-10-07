// GET VISIBLE EXPENSIVE
const getVisibleExpensive = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt > startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt < endDateMatch;
    const textMacth = expense.name.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMacth;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
};
export default getVisibleExpensive;