import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import MovingCircles from './components/MovingCircles'; // Importa el componente MovingCircles
import './App.css';

// Define la paleta de colores aquí
const customColors = ['#FFD1DC', '#FFA07A', '#FFB6C1', '#FFC0CB', '#FFDAB9', '#FFA07A'];


function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="hero-container">
                <HeroSection />
            </div>
            
            <div className="circles-container">
                <MovingCircles colors={customColors}/> {/* Renderiza el componente MovingCircles como fondo */}
            </div>
            {/* Renderiza el resto de los componentes */}
            <AboutSection />
            <EducationSkills />
            <ExperienceProjects />
            <Extracurriculars />
            <Footer />
        </div>
    );
}

export default App;
