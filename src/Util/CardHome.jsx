import React from 'react'
import Card from './Card'
import Contacts from './Contacts'

var numbers = [3,56,34,2,1,44]
//new array having elements that are greater than 10
var newNumbers = numbers.filter(x => x>10)
var sum = numbers.reduce((accumulatoer,currentnumber) =>  accumulatoer + currentnumber)
var index = numbers.findIndex(x => x>10)
var number = numbers.find(x => x>10)

function createCard(contact){
    <Card 

    //we will be able to access key property inside card.jsx and display the id.  This will result in a warning in the console.  Key is a special property used to uniquely identify the different components.  If we want to show id then we need to 
    //create another property for that and pass contact.id to that.
    Key={contact.id}
    Name={contact.Name}
    Img={contact.Img}
    AltText={contact.AltText}
    Email={contact.Email}
    Phone={contact.Phone} />

}

function CardHome(){
    return (
        <>
            {Contacts.map(contact => (
                <Card 

                //we will be able to access key property inside card.jsx and display the id.  This will result in a warning in the console.  Key is a special property used to uniquely identify the different components.  If we want to show id then we need to 
                //create another property for that and pass contact.id to that.
                Key={contact.id}
                Name={contact.name}
                Img={contact.img}
                AltText={contact.atlText}
                Email={contact.email}
                Phone={contact.phone} />
            )) }
        </>
    )
}