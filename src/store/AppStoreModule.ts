import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { homePageReducer } from "./homepage/homePage.reducers";


export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("homePage", homePageReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
    ])
]

