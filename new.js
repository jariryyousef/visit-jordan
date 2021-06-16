confirm("We are glad you visited us, we wish you a pleasant visit") 

var name = prompt("what is your name?")
alert ("welcome to jordan "+name)

var x = prompt("what do you want to read from these (amman, aqapa ,wadirum)")

if (x == "amman")
{
 document.write("<div>"+"<h3>"+"AMMAN"+"</h3>"+"<p>" + "Kick off your Jordan trip in the capital Amman, which is well connected with a modern, international airport and is only a few hours’ drive from cities like  and Jerusalem. Home to four million people, the traffic-clogged city can be a sensory overload in some areas, and isn’t easily walkable due to steep hills and crumbling sidewalks. That said, there are a few sites worth seeing as well as easy day trips to historical, religiously-significant spots less than an hour away."+"</p>" +"<img src='https://s23835.pcdn.co/wp-content/uploads/2019/04/Jordan-Amman-mosque-Tamara.jpg' alt='amman' width='500' height='250'>" + "</div> ") 

}
 else if (x == "aqapa" )
 {
    document.write("<div>"+"<h3>"+"Aqaba and the Red Sea"+"</h3>"+"<p>" + "Cap off your Jordan itinerary with some well-deserved rest and relaxation in the coastal city of Aqaba, which is beloved for its blonde beaches, luxe resorts and lively nightlife scene. Built along the shores of the Red Sea, it’s the gateway to an underwater paradise, as the Aqaba diving sites are considered among the world’s best. Divers of all skill levels will love exploring the drop-offs, coral reefs and wrecks, which are beautifully illuminated by the sun which penetrates to depths of 150 metres in some areas."+"</p>" +"<img src='https://s23835.pcdn.co/wp-content/uploads/2019/10/Jordan-Aqaba-Red-Sea-swimmig.jpg' alt='aqapa' width='500' height='250'>" + "</div>") ;

 }

 else if (x == "wadirum")
 {

    document.write("<div>"+"<h3>"+"WADI RUM"+"</h3>"+"<p>" + "“The Valley of the Moon”, depicted as Mars in several Hollywood feature films Wadi Rum is an Arabian fairy-tale waiting to be discovered. Home to nomadic Bedouin tribes, Wadi Rum is a a quiet getaway of stars, sand, and sun; a perfect complement from Amman’s epicenter. Once inhabited by the Nabataeans of prehistoric times, Wadi Rum allows you to get lost in large ` landscapes and horizon lines. The calmness of the desert is sure calm your spirit and de-clutter your thoughts. Wadi Rum is waiting for you.  "+"</p>" +"<img src='https://media-cdn.tripadvisor.com/media/photo-s/1a/30/d8/6f/milky-way-ecolodge.jpg' alt='wadi-rum' width='500' height='250'>" + "</div> ")
 }
    else {
      alert("please choose one")
    }
 

