import './WeatherCard.css';

export default function WeatherCard({ weather }) {
  return (
        <div
            className="card"
            style={{
                border: "2px solid #4888ffff",
                borderRadius: 8,
                padding: 16,
                marginTop: 16,
                textAlign: "center",
                backgroundColor: '#000000',
            }}
        >
            <h2 style={{color: 'white'}}>
              {weather[1].features[0].properties.place_formatted}
            </h2>
            <h5 style={{color: '#eda512', fontSize: '14px'}}>
              {`(Lon: ${weather[1].features[0].properties.coordinates.longitude}, Lat: ${weather[1].features[0].properties.coordinates.latitude})`}
            </h5>
            <img
              src={weather[0].current.condition.icon}
              alt={weather[0].current.condition.text}
              style={{ width: 100, height: 100, display: 'block', margin: '0 auto' }}
            />
            <p style={{fontWeight: '700', color: '#4888ffff', marginBottom: '0px', marginTop: '0px'}}> {weather[0].current.condition.text}</p>
            <span style={{marginTop: '0px', fontSize: '13px', color: 'white'}}>~Weather Condition~</span>
            <p style={{ fontSize: 48, margin: "8px 0", color: 'white' }}>
              {weather[0].current.temp_c}°C
            </p>
        </div>
  );
}