interface IPickerItem {
    label: string
    value: number | string
    color?: string
}

export type IPickerItems = Array<IPickerItem>
