import React from 'react';
import { Link } from "react-router-dom";
import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: 1,
    title: 'Curso de React',
    description: 'Aprende los fundamentos de React y construye aplicaciones interactivas.',
    image: 'https://via.placeholder.com/300x150'
  },
  {
    id: 2,
    title: 'Curso de JavaScript',
    description: 'Domina JavaScript desde lo básico hasta lo avanzado.',
    image: 'https://via.placeholder.com/300x150'
  }
  // ...otros cursos
];

const CoursesView = () => {
  return (
    <div className="courses-view">
       <h1>Cursos disponibles</h1>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
        />
      ))}
      <Link to="/register">
        <button>Regístrate para acceder a los cursos</button>
      </Link>
    </div>
  );
};


export default CoursesView;
