import animals from './animals'

//array destructruing. cat will have the 0the element of the array and dog 1st element.
const [cat,dog] = animals

//object destructuring.  name and shound should exactly match with the properties in cat array.  In the below look how object is destructured using {} and array
//is destructured using[]
const {name : catName, sound : catSound, feedingRequirements : {food, water},items:[catFood1, catFood2]} = cat