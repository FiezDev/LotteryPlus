import { User, Departments } from '../interfaces';

export const processUserData = (users: User[]): Departments => {
  const departments: Departments = {};

  users.forEach(user => {
    const { company, gender, hair, firstName, lastName, address, age } = user;
    const deptName = company.department;

    if (!departments[deptName]) {
      departments[deptName] = {
        male: 0,
        female: 0,
        ageRange: 'N/A',
        hair: {},
        addressUser: {}
      };
    }

    const deptData = departments[deptName];

    deptData.male += gender.toLowerCase() === 'male' ? 1 : 0;
    deptData.female += gender.toLowerCase() === 'female' ? 1 : 0;

    const hairColor = hair?.color || 'Unknown';
    deptData.hair[hairColor] = (deptData.hair[hairColor] || 0) + 1;

    const fullName = `${firstName}${lastName}`;
    deptData.addressUser[fullName] = address?.postalCode || 'Unknown';

    if (typeof age === 'number') {
      if (deptData.ageRange === 'N/A') {
        deptData.ageRange = `${age} - ${age}`;
      } else {
        const [currentMin, currentMax] = deptData.ageRange.split(' - ').map(Number);
        const newMin = Math.min(currentMin, age);
        const newMax = Math.max(currentMax, age);
        deptData.ageRange = `${newMin} - ${newMax}`;
      }
    }
  });

  return departments;
};
