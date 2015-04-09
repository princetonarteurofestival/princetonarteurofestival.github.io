age: {
  validators: {
    notEmpty: {
      message: 'Age is required and can\'t be empty'
    },
    lessThan: {
      value: 100,
      inclusive: true,
      message: 'The age has to be less than 100'
    },
    greaterThan: {
      value: 12,
      inclusive: true,
      message: 'The age has to be greater than or equals to 12'
    }
  }
}
