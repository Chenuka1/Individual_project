import vaccineImage from '../assets/vaccines.png'
import record from '../assets/medical record.jpg'
import growth from '../assets/babygrowth1.png'
import physician2 from '../assets/physician2.jpg'
import '../styles/services.css'

export default function Services() {
    return (
        <div>
            <div></div>

            <div className='services'>
                <h1>We offer fast & reliable <br /> Medical & Healthcare needs</h1>
                <img src={physician2} alt="physician2"/>

                
                    
            
            </div>

            <div className='services1'>
                <h1>Our services</h1>
                <img src={vaccineImage} alt="vaccineImage"/>
                <img src={record} alt="record"/>
                <img src={growth} alt="growth"/>
            </div>
        </div>
    );
}
