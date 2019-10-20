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

const getEmployee = (id) => {
  
  return new Promise((resolve, reject) => {
    const employee = employeeDB.find(val => id === val.id)

    if (!employee) {
      reject(`No se encontro ${id}`)
    }
  
    resolve(employee)
  })

}

const getSalary = async (employee) => {
  const salary = salaries.find(val => employee.id === val.id)

  if (!salary) {
    throw new Error(`No se encontro ${id}`)
  }

  return {
    ...employee,
    salary: salary.id
  }
}

const getInformation = async (id) => {
  let employee = await getEmployee(id);
  let resp = await getSalary(employee);
  console.log(resp);
}

getInformation(1)