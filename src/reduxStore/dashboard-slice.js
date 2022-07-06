const { createSlice } = require("@reduxjs/toolkit");
const dashBoardSlice = createSlice({
    name: "dashboard",
    initialState: {
        listOfDashboardItems: [],
        totalItems: 0
    },
    reducers: {
        loadDashBoard: (state, action) => {

            state.listOfDashboardItems = action.payload
        }
    }
})

export const { loadDashBoard } = dashBoardSlice.actions

export default dashBoardSlice