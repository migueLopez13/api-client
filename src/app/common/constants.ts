export const COUNTRIES: any = {
  USA: {
    code: 'USA',
    dateFormat: 'mm-dd-yy',
    labels: {
      title: 'Shipping Form',
      name: 'Name ',
      surname: 'Last Name ',
      dni: 'Dni ',
      password: 'Password ',
      gender: 'Gender ',
      phone: 'Phone number ',
      address: 'Address',
      send: 'Send',
      reset: 'Reset',
    },
    errors: {
      name: 'Name must have a min of 3 characters.',
      surname: 'Surname must have a min of 3 characters',
      dni: 'Please set valid DNI whit a letter.',
      password: 'Password must have a min of 3 characters .',
      gender: "You must set 'Man' or 'Woman'",
      address: 'Address must have a min of 3 characters',
      phone: 'You must set a valid phone number.',
    },
  },
};
