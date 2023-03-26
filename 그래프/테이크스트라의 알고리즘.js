// class City
//     attr_accessor :name, :routes

//     def initialize(name)
//         @name = name
//         @routes = {}
//     end 

//     def add_route(city, price)
//         @routes[city] = price
//     end
// end


class City {
    constructor(name) {
        this.name = name;
        this.routes = {};
    }

    add_route(city, price) {
        this.routes[city] = price;
    }
}

atlanta = new City('atlanta')
boston = new City('boston')
chicago = new City('chicago')
denver = new City('denver')
el_paso = new City('el_paso')

atlanta.add_route(boston, 100)
atlanta.add_route(denver, 160)
boston.add_route('chicago', 120)
boston.add_route('denver', 180)
chicago.add_route('el_paso', 80)
denver.add_route('chicago', 40)
denver.add_route('el_paso', 140)

console.log(atlanta)
console.log(boston.routes)