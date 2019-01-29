export class InMemoryDataService {
  createDb() {
    const employees = [
      { id: 1, name: 'Shabin', department: 'IT' },
      { id: 2, name: 'Pramod', department: 'Accounts' },
      { id: 3, name: 'Sajin', department: 'IT' },
      { id: 4, name: 'Suresh', department: 'HR' }

      /* 
      new Employee(1, 'Shabin', 'IT' ),
      new Employee(2, 'Pramod', 'Accounts'),
      new Employee(3, 'Sajin', 'IT' )
       */
    ];
    return { employees };
  }
}
