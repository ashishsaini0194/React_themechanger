var themeState = {
    theme: "light"
}

var theme_reducer = (state = themeState, action) => {
    switch (action.type) {
        case "st_light":
            return { ...state, theme: "light" }
        case "st_dark":
            return { ...state, theme: "dark" }
        default : return state
    }
}

export default theme_reducer;