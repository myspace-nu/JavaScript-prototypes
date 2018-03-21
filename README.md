# JavaScript-prototypes

Various helpful JavaScript prototypes

## Installation

Simply include the desired script with

	<script src="/path/to/array.filter.min.js"></script>

## Examples

### Array.filter prototype

	<script src="/path/to/array.filter.min.js"></script>
	<script type="text/javascript">
	var cars = [
		{ 'manufacturer':'Audi', 'model':'A4' },
		{ 'manufacturer':'Audi', 'model':'A6' },
		{ 'manufacturer':'Volvo', 'model':'V60' },
		{ 'manufacturer':'BMW', 'model':'328i' }
	];

	var someCars = cars.filter(o => (o.manufacturer=='Audi') ); // Filter with Lambda / Arrow function

	var someOtherCars = cars.filter(function(o){ return(o.model=='V60'); }); // Filter with a function

	var someMoreCars = cars.filter({ 'manufacturer':'BMW' }); // Filter with a matching object
	</script>