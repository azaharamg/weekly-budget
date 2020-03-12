export const checkBudget = (budget, remaining) => {
  let alertClass;

  if (budget / 4 > remaining) {
    alertClass = 'alert alert-danger';
  } else if (budget / 2 > remaining) {
    alertClass = 'alert alert-warning';
  } else {
    alertClass = 'alert alert-sucess';
  }

  return alertClass;
};
