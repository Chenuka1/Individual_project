import Doctor from '../assets/Doctor.jpg';
import nurse from '../assets/nurse2.jpg';
import background from '../assets/vaccine2.webp';
import '../styles/staff.css';

export default function Staff() {
  return (
    <div className="staff">
      <div className="image1">
        <img src={background} alt="background" />
      </div>
      <div className='healthcare'>
        <h1>Healthcare providers</h1>
        <img src={Doctor} />   
        <img src={nurse} /><br></br>
      </div>
    </div>
  );
}
