const data = [
    {
        name: 'Jon Doe',
        age: 33,
        gender: 'male',
        lookingFor: 'female',
        location: 'Ibadan',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
        name: 'Alan Doe',
        age: 20,
        gender: 'male',
        lookingFor: 'female',
        location: 'Ibadan',
        image: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
        name: 'Eli Eoe',
        age: 31,
        gender: 'female',
        lookingFor: 'male',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
        name: 'Haye Grint',
        age: 27,
        gender: 'female',
        lookingFor: 'male',
        location: 'Abuja',
        image: 'https://randomuser.me/api/portraits/women/52.jpg'
    },
    {
        name: 'Smith cloe',
        age: 36,
        gender: 'female',
        lookingFor: 'male',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        name: 'Elizabeth Goe',
        age: 23,
        gender: 'female',
        lookingFor: 'male',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
        name: 'Linder Grithz',
        age: 23,
        gender: 'female',
        lookingFor: 'male',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
    },
    {
        name: 'Zoe Hampthon',
        age: 43,
        gender: 'male',
        lookingFor: 'female',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name: 'E. Smeck',
        age: 23,
        gender: 'female',
        lookingFor: 'male',
        location: 'Lagos',
        image: 'https://randomuser.me/api/portraits/women/92.jpg'
    },
];

//initiate profile
const profiles = profileIterator(data);

//call first profile
nextProfile();


//Next Event
document.getElementById('next').addEventListener('click', nextProfile);
//Prev Event
document.getElementById('prev').addEventListener('click', prevProfile);

function prevProfile () {
    let currentProfile = profiles.prev().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDIsplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    }else {
        document.getElementById('profileDIsplay').innerHTML = `End of page`
        document.getElementById('imageDisplay').innerHTML = ``

        // window.location.reload();
    }
}


//next prolile
function nextProfile () {
    let currentProfile = profiles.next().value


    if (currentProfile !== undefined) {
        document.getElementById('profileDIsplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    }else {
        window.location.reload();
    }
}





//profile Iterator
function profileIterator (profiles) {
    let nextIndex = 0

    return {
        next: function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} 
            : { done: true}
        },
        prev: function() {
            return nextIndex < profiles.length
            ? { value: profiles[nextIndex--], done: false }
            : { done: true };
        }
    };
}