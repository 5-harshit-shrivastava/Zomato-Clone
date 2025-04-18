const restaurent=[];

const images=["image_1 Umed Bhawan Palace","image_2 1932 house kitchen and bar",
                     "image_3 khas bhag","image_5 flamingo",
                     "image_6 cosa blanca","image_7 ektara-radisson jodhpur",
                     "image_8 the filos cafe and restaurent","image_9 culinnary Haaven",
                     "image_10 Bazaar","image_4 Royal Castle Restaurent"]

const restaurent_name=["Umed Bhawan Palace","1932 house kitchen and bar",
                     "khas bhag","flamingo",
                     "cosa blanca","ektara-radisson jodhpur",
                     "the filos cafe and restaurent","culinnary Haaven",
                     "Bazaar","Royal Castle Restaurent"]

const foodTypes = ["Fruits","Vegetables","Grains","Dairy","Meat",
                        "Seafood","Nuts","Legumes","Sweets","Beverages"
]

const jodhpurlocation = [
     "Cantt Area" ,"Ratanada" ,"Residency Road" ,"Sardarpura" ,"Circuit House Road" ,
    "Air Force Area" ,"Panch Batti Circle" ,"Shastri Nagar" ,"Clock Tower Area" ,"Mandore Road" 
  ];
                      

for(let i=0;i<100;i++){

    const obj={};
    obj["images"] = images[Math.floor(Math.random()*10)];
    obj["name"] = restaurent_name[Math.floor(Math.random()*10)];
    obj['rating']=Math.floor(Math.random()*5+1);
    obj["food_types"]=foodTypes[Math.floor(Math.random()*5+1)];
    obj["price_for_two"]=Math.floor(Math.random()*2401+100);
    obj["location"]=jodhpurlocation[Math.floor(Math.random()*10)];
    obj["distance_from_customer_house"]=(Math.random()*10+1).toFixed(1);
    obj["offers"]=Math.floor(Math.random()*30);
    obj["alcohol"]=Math.random()>0.7;
    obj["restaurent_open_time"]=Math.floor(Math.random()*24);
    obj["restaurent_close_time"]=(obj["restaurent_open_time"]+12) %24;

    restaurent.push(obj);
}

console.log(restaurent);
