import "./Hourly.css";

export default function Hourly({weather}) {
  // console.log(weather);
  return (
    <div className="hourly-container">
      <h2 style={{marginBottom: '25px'}}>{weather[0].location.name}, {weather[0].location.country}</h2>
      {weather[0].forecast.forecastday[0].hour.map((hourData, i) => (
        <div className="info" key={i}>
          <div className="card">
            <h6 className="card-header" style={{textAlign: 'center',}}>
              {hourData.time}
            </h6>
            <div className="card-body">
              <img src={hourData.condition.icon} alt="" style={{ width: 50, height: 50, display: 'block', margin: '0 auto'}} />
              <p className="card-title" style={{ color: '#4888ffff', fontSize: '17px', fontWeight: '600', textAlign: 'center' }}>
                {hourData.condition.text}
              </p>
              <p className="card-text" style={{ fontWeight: '600', marginTop: '10px', fontSize: '12px' }}>
                <span>{hourData.chance_of_rain}% 💧 &nbsp; &nbsp;</span>
                <span>{hourData.chance_of_snow}% ❄️ &nbsp; &nbsp;</span>
                <span>{hourData.temp_c}°C 🌡️ &nbsp; &nbsp;</span>
                <span>{hourData.wind_kph} kph 💨</span>
              </p>
            </div>
          </div>
           
        </div>
      ))}
    </div>
  );
}
