// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature for additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function using function keyword
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

// Create teacher3 object as per example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Create director1 object as per example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Log the objects to console
console.log(teacher3);
console.log(director1);

// Test the printTeacher function
console.log(printTeacher('John', 'Doe')); // Should output: John Doe

// Additional examples to demonstrate the interfaces
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

const director2: Directors = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Paris',
  numberOfReports: 8,
  yearsOfExperience: 12,
};

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

// Function to display director information
function displayDirector(director: Directors): void {
  const container = document.createElement('div');
  container.style.margin = '20px';
  container.style.padding = '20px';
  container.style.border = '2px solid #4CAF50';
  container.style.borderRadius = '5px';
  container.style.backgroundColor = '#f9f9f9';

  const title = document.createElement('h3');
  title.textContent = `Director: ${director.firstName} ${director.lastName}`;
  title.style.color = '#4CAF50';
  container.appendChild(title);

  const details = document.createElement('ul');

  const fullTimeItem = document.createElement('li');
  fullTimeItem.textContent = `Full Time: ${director.fullTimeEmployee}`;
  details.appendChild(fullTimeItem);

  const locationItem = document.createElement('li');
  locationItem.textContent = `Location: ${director.location}`;
  details.appendChild(locationItem);

  const reportsItem = document.createElement('li');
  reportsItem.textContent = `Number of Reports: ${director.numberOfReports}`;
  reportsItem.style.fontWeight = 'bold';
  details.appendChild(reportsItem);

  if (director.yearsOfExperience) {
    const experienceItem = document.createElement('li');
    experienceItem.textContent = `Years of Experience: ${director.yearsOfExperience}`;
    details.appendChild(experienceItem);
  }

  // Display additional attributes
  for (const key in director) {
    if (
      ![
        'firstName',
        'lastName',
        'fullTimeEmployee',
        'location',
        'yearsOfExperience',
        'numberOfReports',
      ].includes(key)
    ) {
      const additionalItem = document.createElement('li');
      additionalItem.textContent = `${key}: ${director[key]}`;
      details.appendChild(additionalItem);
    }
  }

  container.appendChild(details);
  document.body.appendChild(container);
}

// Display teachers and directors when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.textContent = 'Teacher and Director Interfaces Demonstration';
  title.style.textAlign = 'center';
  title.style.color = '#333';
  document.body.appendChild(title);

  // Demonstrate printTeacher function on the page
  const printTeacherDemo = document.createElement('div');
  printTeacherDemo.style.margin = '20px';
  printTeacherDemo.style.padding = '15px';
  printTeacherDemo.style.backgroundColor = '#e7f3ff';
  printTeacherDemo.style.border = '1px solid #2196F3';
  printTeacherDemo.style.borderRadius = '5px';

  const printTeacherTitle = document.createElement('h3');
  printTeacherTitle.textContent = 'printTeacher Function Demo';
  printTeacherTitle.style.color = '#2196F3';
  printTeacherDemo.appendChild(printTeacherTitle);

  const printTeacherExample1 = document.createElement('p');
  printTeacherExample1.textContent = `printTeacher("John", "Doe") = "${printTeacher(
    'John',
    'Doe'
  )}"`;
  printTeacherDemo.appendChild(printTeacherExample1);

  const printTeacherExample2 = document.createElement('p');
  printTeacherExample2.textContent = `printTeacher("Jane", "Smith") = "${printTeacher(
    'Jane',
    'Smith'
  )}"`;
  printTeacherDemo.appendChild(printTeacherExample2);

  const printTeacherExample3 = document.createElement('p');
  printTeacherExample3.textContent = `printTeacher("Alice", "Johnson") = "${printTeacher(
    'Alice',
    'Johnson'
  )}"`;
  printTeacherDemo.appendChild(printTeacherExample3);

  document.body.appendChild(printTeacherDemo);

  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Teachers';
  subtitle.style.marginLeft = '20px';
  subtitle.style.color = '#2196F3';
  document.body.appendChild(subtitle);

  displayTeacher(teacher3);
  displayTeacher(teacher1);

  const directorSubtitle = document.createElement('h2');
  directorSubtitle.textContent = 'Directors';
  directorSubtitle.style.marginLeft = '20px';
  directorSubtitle.style.color = '#4CAF50';
  document.body.appendChild(directorSubtitle);

  displayDirector(director1);
  displayDirector(director2);
});
