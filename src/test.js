let callApi = async (api, city) => {
    let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`);
    let res1 = await res.json();
    console.log(res1.current);
  };

//   callApi("4558d53f9641485fb2a114816251910", "paris");

    export { callApi };