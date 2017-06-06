const initialState = [
        {   
            id: 1,
            name: "John",
            password: "123456"
        },
        {   
            id: 2,
            name: "Andy",
            password: "123456"
        }
    ];

export default function users(state = initialState, action) {
    switch (action.type) {
        default:
          return state;
    }
}