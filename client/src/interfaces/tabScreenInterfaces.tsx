import * as React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

export interface ITabScreenConstant {
    name: string,
    component: React.FC,
    icon: keyof typeof Ionicons.glyphMap
}
