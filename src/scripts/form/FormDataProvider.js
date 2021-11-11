let thanksgivingGuests = [];

export const useGuests = () => {
    return thanksgivingGuests.slice();
}

export const getGuests = () => {
    return fetch("http://localhost:8088/guests")
        .then(res => res.json())
        .then(guests => {
            thanksgivingGuests = guests
        })
}

export const saveGuest = (guest) => {
    return fetch("http://localhost:8088/guests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
    .then(getGuests)
}

export const deleteGuest = (guestId) => {
    return fetch(`http://localhost:8088/guests/${guestId}`, {
        method: "DELETE"
    })
    .then(getGuests)
}

export const updateGuest = (guest) => {
    return fetch(`http://localhost:8088/guests/${guest.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
}