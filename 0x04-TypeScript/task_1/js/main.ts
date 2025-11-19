// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature for additional attributes
}

// Create teacher3 object as per example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Log the teacher3 object
console.log(teacher3);

// Additional examples to demonstrate the interface
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: 'Mike',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  contract: true,
  specialization: 'Mathematics',
};

// Log additional examples
console.log(teacher1);
console.log(teacher2);

// Function to display teacher information
function displayTeacher(teacher: Teacher): void {
  const container = document.createElement('div');
  container.style.margin = '20px';
  container.style.padding = '20px';
  container.style.border = '1px solid #ccc';
  container.style.borderRadius = '5px';

  const title = document.createElement('h3');
  title.textContent = `Teacher: ${teacher.firstName} ${teacher.lastName}`;
  container.appendChild(title);

  const details = document.createElement('ul');

  const fullTimeItem = document.createElement('li');
  fullTimeItem.textContent = `Full Time: ${teacher.fullTimeEmployee}`;
  details.appendChild(fullTimeItem);

  const locationItem = document.createElement('li');
  locationItem.textContent = `Location: ${teacher.location}`;
  details.appendChild(locationItem);

  if (teacher.yearsOfExperience) {
    const experienceItem = document.createElement('li');
    experienceItem.textContent = `Years of Experience: ${teacher.yearsOfExperience}`;
    details.appendChild(experienceItem);
  }

  // Display additional attributes
  for (const key in teacher) {
    if (
      ![
        'firstName',
        'lastName',
        'fullTimeEmployee',
        'location',
        'yearsOfExperience',
      ].includes(key)
    ) {
      const additionalItem = document.createElement('li');
      additionalItem.textContent = `${key}: ${teacher[key]}`;
      details.appendChild(additionalItem);
    }
  }

  container.appendChild(details);
  document.body.appendChild(container);
}

// Display teachers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.textContent = 'Teacher Interface Demonstration';
  title.style.textAlign = 'center';
  title.style.color = '#333';
  document.body.appendChild(title);

  displayTeacher(teacher3);
  displayTeacher(teacher1);
  displayTeacher(teacher2);
});
