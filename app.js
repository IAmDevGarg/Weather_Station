function fetch_data(){

   var cityname= document.getElementById('city').value
    console.log(cityname)

    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + cityname + "')";
    if(cityname === ""){
        alert("Please enter city name")
    }

        var url= 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=bb2d5e1e7000bb03094dd8d406b4748a&units=metric'
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            var resp_code= data['cod']
            if(resp_code === '404'){
                alert("City not found")
            }
            else{
                var citytemp =data['main']['temp']
                console.log(citytemp)
                var icon =data['weather']['0']['icon']
                console.log(icon)
                var icon_url= 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
                var desc = data['weather']['0']['description']
                console.log(desc)
                document.getElementById("result").innerHTML = '<img src = '+icon_url+'>'+'<h4>'+desc+'</h4>'+'<h3> Temperature : '+citytemp+'&deg;C </h3>'

                
            }
        })
    }