import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author: "Author",
        isbn: "ISBN",
        cover: "Cover",
        copyright: "Copyright",
        pages: "Pages",
        description: "Description"
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload }, 
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload },
        chooseCover: (state, action) => { state.cover = action.payload },
        chooseCopyright: (state, action) => { state.copyright = action.payload },
        chooseLength: (state, action) => { state.pages = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseISBN, chooseCover, chooseCopyright, chooseLength, chooseDescription  } = rootSlice.actions