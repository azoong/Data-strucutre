class City {
  constructor(name) {
    this.name = name;
    this.routes = new Map();
  }

  addRoute(city, price) {
    this.routes.set(city, price);
  }
}

function dijkstra_shortest_path(startingCity, endingCity) {
  const cheapestPricesTable = {};
  const cheapestPreviousStopoverCityTable = {};

  const unvisitedCities = new Set()
  const visitedCities = new Map();

  cheapestPricesTable[startingCity.name] = 0;

  let currentCity = startingCity;
  //currentcity => atlanta 
  

  // 이 루프는 알고리즘의 핵심입니다. 아직 방문하지 않은 도시를 방문할 수 있는 한 계속 실행됩니다:
  while (currentCity) {    
    visitedCities.set(currentCity, true);
    unvisitedCities.delete(currentCity);

    // 현재 도시의 모든 인접 도시들을 순회합니다:
    for (let [adjacentCity, price] of currentCity.routes) {
      //adjacentCity => boston, denver, chicago
      //price => 100, 160, 200
      // console.log("adjacentCity", adjacentCity)
      if (!visitedCities.has(adjacentCity)) {
        unvisitedCities.add(adjacentCity) 
      }

      const priceThroughCurrentCity =
        cheapestPricesTable[currentCity.name] + price;

      // 시작 도시에서 인접 도시까지의 비용이
      // 지금까지 찾은 것 중 가장 저렴하다면...
      if (
        !cheapestPricesTable[adjacentCity.name] ||
        priceThroughCurrentCity < cheapestPricesTable[adjacentCity.name]
      ) {
        // ... 두 테이블을 업데이트합니다:
        cheapestPricesTable[adjacentCity.name] = priceThroughCurrentCity;
        cheapestPreviousStopoverCityTable[adjacentCity.name] = currentCity
      }
    }
    // 다음 미방문 도시를 방문합니다. 시작 도시에서
    // 가장 저렴하게 갈 수 있는 도시를 선택합니다:
    currentCity = [...unvisitedCities].reduce((minCity, cityName) => {
      if (
        !minCity ||
        cheapestPricesTable[cityName.name] < cheapestPricesTable[minCity.name]
      ) {
        return cityName;
      }
      return minCity;
    }, null);
  }

  const shortestPath = [];
  let currentCityName = endingCity.name;
  // console.log(cheapestPreviousStopoverCityTable)
  // 시작 도시에 도달할 때까지 반복합니다:
  while (currentCityName !== startingCity.name) {
    // 만나는 각 도시 이름을 최단 경로 배열에 추가합니다:
    shortestPath.push(currentCityName);
    // cheapestPreviousStopoverCityTable을 사용하여
    // 각 도시의 이전 경유 도시를 따라갑니다:
    if(cheapestPreviousStopoverCityTable[currentCityName]) {
      currentCityName = cheapestPreviousStopoverCityTable[currentCityName].name
    }
  }
  // 마지막으로 시작 도시를 최단 경로에 추가합니다:
  shortestPath.push(startingCity.name);
  // 시작부터 끝까지의 경로를 볼 수 있도록 결과를 뒤집어서 반환합니다:
  return shortestPath.reverse();
}

atlanta = new City("atlanta");
boston = new City("boston");
chicago = new City("chicago");
denver = new City("denver");
el_paso = new City("el_paso");

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
denver.addRoute(chicago, 40);
denver.addRoute(el_paso, 140);
chicago.addRoute(el_paso, 80);
el_paso.addRoute(boston, 100);

console.log(dijkstra_shortest_path(atlanta, el_paso))
