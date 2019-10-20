const employeeDB = [
  {
    id: 1,
    name: 'Pablo',
  },
  {
    id: 2,
    name: 'Goku',
  }
]

const salaries = [
  {
    id: 1,
    salary: '4000'
  },
  {
    id: 2,
    salary: '100'
  }
]

const getEmployee = (id, callback) => {
  const employee = employeeDB.find(val => id === val.id)

  if (!employee) {
    callback(`No se encontro ${id}`)
  }

  callback(null, employee)
}

const getSalary = (employee, callback) => {
  const salary = salaries.find(val => employee.id === val.id)

  if (!salary) {
    callback(`No se encontro ${id}`)
  }

  callback(null, {
    ...employee,
    salary: salary.id
  })
}

getEmployee(1, (err, employee) => {
  if (err) {
    console.log(err)
  }
  console.log(employee)
  getSalary(employee, (err, employee) => {
    if (err) {
      console.log(err)
    }
    console.log(employee)
  })
})