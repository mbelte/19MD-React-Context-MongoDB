export const formatDate = (date: string) => {
    const newDate = new Date(Date.parse(date))
    return newDate.toLocaleDateString('lv-LV')
}