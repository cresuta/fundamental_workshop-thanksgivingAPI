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