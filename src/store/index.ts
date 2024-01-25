import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState} from "../Types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";

const initialState:InitialState = {
    videos: [],
    currentPlaying:null,
    searchTerm :'',
    searchResults :[],
    nextPageToken : null,
    recommendedVideos : []

}

const YoutubeSlice = createSlice({
    name : "youtubeApp",
    initialState,
    reducers : {},
    extraReducers :(builder =>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{

        })
    })
})

export const store = configureStore({
    reducer :{
        youtubeApp : YoutubeSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
