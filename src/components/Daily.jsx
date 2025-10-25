import "./Daily.css";

export default function Daily({ weather }) {
    return (
    <div className="hourly-container">
        <h2 style={{marginBottom: '25px'}}>{weather[0].location.name}, {weather[0].location.country}</h2>
      {weather[0].forecast.forecastday.map((e, i) => (
        <div className="info" key={i}>
          <div className="card">
            <h6 className="card-header" style={{textAlign: 'center', color: '#ffffffff'}}>{e.date}</h6>
            <div className="card-body">
              <img src={e.day.condition.icon} alt="" style={{ width: 50, height: 50, display: 'block', margin: '0 auto'}} />
              <p className="card-title" style={{ color: '#4888ffff', fontSize: '17px', fontWeight: '600', textAlign: 'center' }}>
                {e.day.condition.text}
              </p>
              <p className="card-text" style={{ fontWeight: '600', marginTop: '10px', fontSize: '12px' }}>
                <span>{e.day.daily_chance_of_rain}% 💧 &nbsp; &nbsp;</span>
                <span>{e.day.daily_chance_of_snow}% ❄️ &nbsp; &nbsp;</span>
                <span>{Math.floor((e.day.maxtemp_c + e.day.mintemp_c)/2)}°C 🌡️</span>
              </p>
            </div>
          </div>
           
        </div>
      ))}
    </div>
  );
}