//import components
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import FolderScreen from "../screens/FolderScreen";
import ProfileScreen from "../screens/ProfileScreen";

//import interfaces
import {ITabScreenConstant} from "../interfaces/tabScreenInterfaces";

export const tabScreenConstant: Array<ITabScreenConstant> = [
    {name: "Home", component: HomeScreen, icon: "home-outline"},
    {name: "Folder", component: FolderScreen, icon: "folder-open-outline"},
    {name: "Notification", component: NotificationScreen, icon: "md-notifications-outline"},
    {name: "Profile", component: ProfileScreen, icon: "person-outline"}
]
