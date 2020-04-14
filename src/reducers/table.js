const initialState = {
    columns: [
        { title: "Name", field: "name" },
        { title: "Surname", field: "surname" },
        { title: "Birth City", field: "birthCity" },
        { title: "Birth Year", field: "birthYear" },
    ],
    rows: [
        { id: 1, name: "Jem", surname: "Fields", birthCity: "Camagüey, Cuba", birthYear: 2000 },
        { id: 2, name: "Joey", surname: "Amos", birthCity: "Jhang, Pakistan", birthYear: 1998 },
        { id: 3, name: "Ibrahim", surname: "Molloy", birthCity: "Koulikoro, Mali", birthYear: 2005 },
        { id: 4, name: "Aneesa", surname: "Cotton", birthCity: "Perugia, Italy", birthYear: 2003 },
        { id: 5, name: "Maisey", surname: "Short", birthCity: "Trois-Rivières, Canada", birthYear: 1999 },
        { id: 6, name: "Ffion", surname: "Wolf", birthCity: "Klaipeda, Lithuania", birthYear: 2001 },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};