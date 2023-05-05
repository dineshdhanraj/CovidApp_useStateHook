import Service from '../service/Service'
export default async function Load(url){
  console.log('I AM IN LOAD', url);
const result = await Service(url);
  console.log('I AM IN LOAD result', result);
if(result.country){
  console.log('I AM IN IF');
  const Holder={
recovered: result.recovered,
      todayRecovered: result.todayRecovered,
      tests: result.tests,
      flag: result.countryInfo.flag,
      todayCases: result.todayCases,
      cases: result.cases
  };
  return Holder;
}
else
{

  const Holder={
    cases:'Not Available',
  };
  return Holder;
}

}