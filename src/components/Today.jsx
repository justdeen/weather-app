import './Today.css';

export default function Today({ weather }) {
  const test = true
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
        <div className="container-today">

            <h2 className='location'>
              {weather[1].features[0].properties.place_formatted}
            </h2>
            <p className='time'>🕦 {time}</p>
            <img
              src={weather[0].current.condition.icon}
              alt={weather[0].current.condition.text}
              style={{ width: 100, height: 100, display: 'block', margin: '0 auto' }}
            />
            <p style={{fontWeight: '700', fontSize: '17px', color: '#4888ffff', marginBottom: '0px', marginTop: '0px'}}> 
              {weather[0].current.condition.text}
            </p>
            <p className='temp' style={{ fontSize: 35, fontWeight: '500', margin: "8px 0"}}>
              {weather[0].current.temp_c}°C 🌡️
            </p>
        </div>
  );
}