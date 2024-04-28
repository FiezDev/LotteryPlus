// src/utils/processUserData.ts
import { User, Departments } from '../interfaces';

export const processUserData = (users: User[]): Departments => {
  const departments: Departments = {};

  users.forEach(user => {
    const { department, gender, hairColor, firstName, lastName } = user;
    const fullName = firstName + lastName;

    if (!departments[department]) {
      departments[department] = {
        male: 0,
        female: 0,
        ageRange: 'N/A',
        hair: {},
        addressUser: {}
      };
    }

    if (gender.toLowerCase() === 'male') {
      departments[department].male += 1;
    } else if (gender.toLowerCase() === 'female') {
      departments[department].female += 1;
    }

    const hair = hairColor || 'Unknown';
    departments[department].hair[hair] = (departments[department].hair[hair] || 0) + 1;

    departments[department].addressUser[fullName] = user.address?.postalCode || 'Unknown';
  });

  // Calculate age ranges for each department
  Object.keys(departments).forEach(dept => {
    const ages = users
      .filter(user => user.department === dept && typeof user.age === 'number')
      .map(user => user.age as number); // Ensuring that undefined ages are not included

    if (ages.length > 0) {
      const minAge = Math.min(...ages);
      const maxAge = Math.max(...ages);
      departments[dept].ageRange = `${minAge}-${maxAge}`;
    } else {
      departments[dept].ageRange = 'N/A';
    }
  });

  return departments;
};
